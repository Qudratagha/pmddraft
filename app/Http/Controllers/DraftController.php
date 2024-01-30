<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Draft;
use App\Http\Requests\StoreDraftRequest;
use App\Http\Requests\UpdateDraftRequest;
use Dflydev\DotAccessData\Data;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Mews\Purifier\Facades\Purifier;

class DraftController extends Controller
{
    public function index(Request $request)
    {
        // single
        $cusPlotID  = 125651;
        $docTypeID  = 5051;
        $userID     = 2;
        $userRole   = "ASSIATANT";

        //double 
        // $cusPlotID  = 38208;
        // $docTypeID  = 5052;
        // $userID     = 2;
        // $userRole   = "ASSIATANT";

        // $cusPlotID  = $request['cusPlotID'];
        // $docTypeID  = $request['docTypeID'];
        // $userID     = $request['userId'];
        // $userRole   = $request['userRole'];

        $draftsExists = DB::select("SELECT * FROM saved_drafts WHERE doc_type_id = '$docTypeID' ");
        return view('add_draft',compact('cusPlotID','docTypeID','userID','userRole'));
        // if (empty($draftsExists)) {
        //     return view('add_draft',compact('cusPlotID','docTypeID','userID','userRole'));
        // } else {
        //     return view('edit_draft', ['draftsExists' => $draftsExists]);
        // }
                                    
    }

    
    public function saveDraft(Request $request)
    {
        $cusPlotID  = $request['cusPlotID'];
        $docTypeID  = $request['docTypeID'];
        $userID     = $request['userID'];
        $userRole   = $request['userRole'];
        $markToMngr = $request['markToMngr'];
        $body       = $request->content;
       
        $currentDateTime = now()->timezone('Asia/Karachi');
        $date = $currentDateTime->format('Y-m-d');
        $time = $currentDateTime->format('h:i:s');    
      
        $existingDraft = DB::select("SELECT * FROM saved_drafts WHERE doc_type_id = '$docTypeID' AND customer_plot_id = '$cusPlotID'");
        dd($existingDraft);
        if (!empty($existingDraft)) {
            return response()->json('Draft Already Exists');
        }
        $saveDraft = DB::insert('INSERT INTO saved_drafts (doc_type_id, customer_plot_id, created_by, created_date, edited_draft, mark_to_mngr, approved_by_dir, mngr_approval) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [
                $docTypeID,
                $cusPlotID,
                $userID,
                $date,
                $body,
                $markToMngr,
                false,
                false,
            ]);
        $lastInsertId = DB::getPdo()->lastInsertId();
        
        $saveDraft = DB::insert('INSERT INTO saved_drafts_log (draft_entry_id, edited_draft, created_by_id, created_date, created_time) VALUES (?, ?, ?, ?, ?)', [
            $lastInsertId,
            $body,
            $userID,
            $date,
            $time
        ]);
        return response()->json('Draft Created Successfully');
    }

    public function print(Request $request)
    {
        $cusDetails = $request->all()['draftData']['cusDetails'];
        $content = $request->all()['content'];
        $draftTitle = $request->all()['draftData']['draftTitle'];
        return view('print', compact('cusDetails', 'draftTitle', 'content'));
    }

    public function printDraft(Request $request)
    {
        $data = $request->all();
      
        $content = $data['content'];
        $cusPlotID = $request->cusPlotID;
        $docTypeID = $request->docTypeID;
        $draftTitle = DB::select(" SELECT draft_subject FROM customer_doc_type WHERE doc_type_id = '$docTypeID'");
        $draftTitle = $draftTitle[0]->draft_subject;
        $draftTitle = htmlspecialchars($draftTitle);
        $getPropertyCode = DB::select("
            SELECT 
                plot.property_code
            FROM customer_plot
                JOIN plot ON customer_plot.plot_id = plot.plot_id
            WHERE customer_plot.customer_plot_id = '$cusPlotID'
        ");
        $propCode = $getPropertyCode[0]->property_code;
        $cusDetails = DB::select("
                        SELECT 
                            cp.customer_id,
                            pl.plot_categ_id,
                            pl.plot_id,
                            cp.is_allocated,
                            pl.property_code,
                            cp.customer_plot_id,
                            mm.membership_prefix_no,
                            cc.phone_no,
                            cc.present_address,            
                            cs.name,
                            cs.cnic_nicop,
                            cs.So_Do_Wo,
                            cs.relation_title,
                            pcat.plot_categ
                        FROM plot as pl
                            JOIN customer_plot cp ON pl.plot_id = cp.plot_id
                            JOIN plot_categ pcat ON pl.plot_categ_id = pcat.plot_categ_id
                            JOIN customer cs ON cp.customer_id = cs.customer_id
                            JOIN membership_detail mm ON cs.customer_id = mm.customer_id
                            JOIN customer_contact cc ON cs.customer_id = cc.customer_id
                        WHERE mm.current_membership = 1
                            AND cc.contact_sort_id = 1
                            AND pl.property_code = '$propCode'
                            AND cp.ownership_percentage != '0%'
                    ");
      return view('printDraft', compact('cusDetails', 'draftTitle', 'content'));
    }

    public function preview(Request $request)
    {
        $cusPlotID = $request->cusPlotID;
        $docTypeID = $request->docTypeID;
        
        $draftTitle = DB::select(" SELECT draft_subject FROM customer_doc_type WHERE doc_type_id = '$docTypeID'");
        $draftTitle = $draftTitle[0]->draft_subject;
        $draftTitle = htmlspecialchars($draftTitle);
        $getPropertyCode = DB::select("
            SELECT 
                plot.property_code
            FROM customer_plot
                JOIN plot ON customer_plot.plot_id = plot.plot_id
            WHERE customer_plot.customer_plot_id = '$cusPlotID'
        ");
        $propCode = $getPropertyCode[0]->property_code;
        $cusDetails = DB::select("
                        SELECT 
                            cp.customer_id,
                            pl.plot_categ_id,
                            pl.plot_id,
                            cp.is_allocated,
                            pl.property_code,
                            cp.customer_plot_id,
                            mm.membership_prefix_no,
                            cc.phone_no,
                            cc.present_address,            
                            cs.name,
                            cs.cnic_nicop,
                            cs.So_Do_Wo,
                            cs.relation_title,
                            pcat.plot_categ
                        FROM plot as pl
                            JOIN customer_plot cp ON pl.plot_id = cp.plot_id
                            JOIN plot_categ pcat ON pl.plot_categ_id = pcat.plot_categ_id
                            JOIN customer cs ON cp.customer_id = cs.customer_id
                            JOIN membership_detail mm ON cs.customer_id = mm.customer_id
                            JOIN customer_contact cc ON cs.customer_id = cc.customer_id
                        WHERE mm.current_membership = 1
                            AND cc.contact_sort_id = 1
                            AND pl.property_code = '$propCode'
                            AND cp.ownership_percentage != '0%'
                    ");
        return response()->json([
            'cusDetails' => $cusDetails,
            'draftTitle' => $draftTitle
        ]);        
    }

    public function edit(Request $request)
    {
        $cusPlotID  = 125651;
        $docTypeID  = 5051;
        $userID     = 2;
        $userRole   = "ASSIATANT";

        // $cusPlotID  = $request['cusPlotID'];
        // $docTypeID  = $request['docTypeID'];
        // $userID     = $request['userId'];
        // $userRole   = $request['userRole'];
        
        $saveDraft = DB::select("SELECT * FROM saved_drafts WHERE doc_type_id = '$docTypeID'");
        $draftEntryID = $saveDraft[0]->draft_entry_id;
        $saveDraftLog = DB::select("
                            SELECT 
                                saved_drafts_log.*, [user].Name,
                                saved_drafts_log.draft_log_id as id
                            FROM saved_drafts_log
                                JOIN [user] ON saved_drafts_log.created_by_id = [user].user_id
                                WHERE saved_drafts_log.draft_entry_id = '$draftEntryID'  
                                ORDER BY id DESC ");
        
        return view('edit_draft', compact('saveDraft', 'saveDraftLog', 'draftEntryID', 'cusPlotID','docTypeID','userID','userRole'));       
    }

    public function editPreview(Request $request)
    {
        $docTypeID = $request->docTypeID;
        $draftLogID = $request->draftLogID;
        $cusPlotID = $request->cusPlotID;

        $body = DB::select(" SELECT edited_draft FROM saved_drafts_log WHERE draft_log_id = '$draftLogID'");
                
        $draftTitle = DB::select(" SELECT draft_subject FROM customer_doc_type WHERE doc_type_id = '$docTypeID'");
        $draftTitle = $draftTitle[0]->draft_subject;
        $draftTitle = htmlspecialchars($draftTitle);
        $getPropertyCode = DB::select("
            SELECT 
                plot.property_code
            FROM customer_plot
                JOIN plot ON customer_plot.plot_id = plot.plot_id
            WHERE customer_plot.customer_plot_id = '$cusPlotID'
        ");
        $propCode = $getPropertyCode[0]->property_code;
        $cusDetails = DB::select("
                        SELECT 
                            cp.customer_id,
                            pl.plot_categ_id,
                            pl.plot_id,
                            cp.is_allocated,
                            pl.property_code,
                            cp.customer_plot_id,
                            mm.membership_prefix_no,
                            cc.phone_no,
                            cc.present_address,            
                            cs.name,
                            cs.cnic_nicop,
                            cs.So_Do_Wo,
                            cs.relation_title,
                            pcat.plot_categ
                        FROM plot as pl
                            JOIN customer_plot cp ON pl.plot_id = cp.plot_id
                            JOIN plot_categ pcat ON pl.plot_categ_id = pcat.plot_categ_id
                            JOIN customer cs ON cp.customer_id = cs.customer_id
                            JOIN membership_detail mm ON cs.customer_id = mm.customer_id
                            JOIN customer_contact cc ON cs.customer_id = cc.customer_id
                        WHERE mm.current_membership = 1
                            AND cc.contact_sort_id = 1
                            AND pl.property_code = '$propCode'
                            AND cp.ownership_percentage != '0%'
                    ");
        return response()->json([
            'cusDetails' => $cusDetails,
            'draftTitle' => $draftTitle,
            'body'       => $body

        ]);        
    }

    public function editPreviewPrint(Request $request)
    {
        $data = $request->all();

        $cusDetails = $data['cusDetails'];
        $content    = $data['body'];
        $draftTitle = $data['draftTitle'];

        return view('editPreview', compact('cusDetails', 'draftTitle', 'content'));
    }

    public function editDraft(Request $request)
    {
        $body = DB::select(" SELECT edited_draft FROM saved_drafts WHERE draft_entry_id = '$request->draftEntryID'");
        return response()->json($body);
    }

    public function updateDraft(Request $request)
    {
        // dd($request->all());
        $cusPlotID  = $request['cusPlotID'];
        $docTypeID  = $request['docTypeID'];
        $userID     = $request['userID'];
        $userRole   = $request['userRole'];
        $saveDraftID   = $request['saveDraftID'];
        $body       = $request->content;
        

        $currentDateTime = now()->timezone('Asia/Karachi');
        $date = $currentDateTime->format('Y-m-d');
        $time = $currentDateTime->format('h:i:s');  

        $sql = "UPDATE saved_drafts SET edited_draft = :body WHERE draft_entry_id = :draft_entry_id";
            DB::update($sql, [
                'body' => $body,
                'draft_entry_id' => $saveDraftID,
            ]);

        $saveDraft = DB::insert('INSERT INTO saved_drafts_log (draft_entry_id, edited_draft, created_by_id, created_date, created_time) VALUES (?, ?, ?, ?, ?)', [
            $saveDraftID,
            $body,
            $userID,
            $date,
            $time
        ]);
    }

    public function approveDraft(Request $request)
    {
        $draftEntryID = $request['saveDraftID'];
        $userID = $request['userID'];
        
        $currentDateTime = now()->timezone('Asia/Karachi');
        $date = $currentDateTime->format('Y-m-d');
        $time = $currentDateTime->format('H:i:s');  

        DB::update(
            'UPDATE saved_drafts
             SET approved_by_dir = ?, approval_date = ?, aprover_id = ? 
             WHERE draft_entry_id = ?',
            [true, $date, $userID, $draftEntryID]
        );

    }
}
