<?php

use App\Http\Controllers\DraftController;
use App\Http\Controllers\ImageController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/',[DraftController::class, 'index'])->name('home');
//save draft
Route::post('/saveDraft',[DraftController::class, 'saveDraft'])->name('saveDraft');
//preview
Route::post('/preview',[DraftController::class, 'preview'])->name('preview');

Route::post('/showDraft',[DraftController::class, 'showDraft'])->name('showDraft');

Route::post('/print',[DraftController::class, 'printD'])->name('printD');
Route::post('/printDraft',[DraftController::class, 'printDraft'])->name('printDraft');

//edit draft

Route::get('/edit',[DraftController::class, 'edit'])->name('edit');
Route::post('/editPreview',[DraftController::class, 'editPreview'])->name('editPreview');
Route::post('/editPreviewPrint',[DraftController::class, 'editPreviewPrint'])->name('editPreviewPrint');

Route::post('/editDraft',[DraftController::class, 'editDraft'])->name('editDraft');
Route::post('/updateDraft',[DraftController::class, 'updateDraft'])->name('updateDraft');
Route::post('/approveDraft',[DraftController::class, 'approveDraft'])->name('approveDraft');


Route::post('/printNew',[DraftController::class, 'printNew'])->name('printNew');



Route::get('/images/{filename}', [ImageController::class, 'show'])->name('image.show');

Route::get('/profile-pic/{filename}', function ($filename) {
    $networkPath = '\\\\10.1.1.108\\PMS_Docs\\profile pic\\';
    $path = $networkPath . $filename;
    if (file_exists($path)) {
        $file = File::get($path);
        $type = File::mimeType($path);
        $response = response($file, 200)->header("Content-Type", $type);
        return $response;
    } else {
        abort(404, 'Image not found');
    }
})->where('filename', '.*');

Route::get('/checkEntry',[DraftController::class, 'checkEntry'])->name('checkEntry');




