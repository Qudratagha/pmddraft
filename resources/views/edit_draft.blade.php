<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compitable" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compitable" content="IE=edge">
    <link rel="stylesheet" href="{{ asset('css/bootstrap.css') }}">
    <link rel="stylesheet" href="{{ asset('css/npmbootstrap.css') }}">
    <script src="{{ asset('js/tinymceapi.js') }}"></script>

    <script src="https://cdn.tiny.cloud/1/a75zsruidoxva9mlkyodxbbq4f5g0unzdomf8ote967j9bhf/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>

        <script src="https://cdn.tiny.cloud/1/a75zsruidoxva9mlkyodxbbq4f5g0unzdomf8ote967j9bhf/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>

    <style>
        button {
            display: block;
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }

        .history {
            text-align: center;
        }

    </style>


</head>
<body class="py-3">
<div id="printArea"></div>
<div class="container" style="margin-top: 10px">
    <section class="history">
        <h1>Draft History</h1>
    </section>
    <div class="mt-2">
        <table class="table table-striped">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            @foreach($saveDraftLog as $key=>$data)
                <tr>
                    <td>{{ $data->draft_log_id }}</td>
                    <td>{{ $data->Name }}</td>
                    <td>{{ $data->created_date }}</td>
                    <td>{{ \Carbon\Carbon::parse($data->created_time)->format('H:i') }}</td>
                    <td>
                        <button type="button" class="btn btn-secondary btn-sm"
                                onclick="preview({{ $data->draft_log_id }}, {{ $saveDraft[0]->doc_type_id }}, {{ $saveDraft[0]->customer_plot_id }})">
                            Preview
                        </button>
                        <div class="modal fade" tabindex="-1" id="customModal_{{ $data->draft_log_id }}">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                    </div>
                                    <div class="modal-body" style="padding: 50px">
                                    </div>

                                    <div class="modal-footer">
                                        <div class="mt-2 mb-2 justify-content-center d-flex">
                                            @if($key == 0)
                                                @if($saveDraft[0]->approved_by_dir == true)
                                                    <button type="button" class="d-inline-block btn btn-secondary" style="margin-right: 10px" value="{{$docTypeID}}" onclick="printDraft(this.value)">Print</button>
                                                @endif
                                            @endif
                                            <button type="button" class="d-inline-block btn btn-secondary" onclick="closeModal({{ $data->draft_log_id }})">Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                <tr>
            @endforeach
            </tbody>
        </table>
        <div class="mt-2 mb-2 justify-content-center d-flex">
            @if($saveDraft[0]->mark_to_mngr == false AND $userRole == 'ASSISTANT')
            <button type="button" class="d-inline-block btn btn-secondary" style="margin-right: 1px" onclick="editDraft({{$draftEntryID}})">Edit Draft</button>
            @endif
            @if($saveDraft[0]->mngr_approval == false AND $userRole == 'MANAGER' )
            <button type="button" class="d-inline-block btn btn-secondary" style="margin-right: 1px" onclick="editDraft({{$draftEntryID}})">Edit Draft</button>
            @endif
            @if($userRole == 'DIRECTOR' AND $saveDraft[0]->approved_by_dir == false)
            <button type="button" class="d-inline-block btn btn-secondary" style="margin-right: 1px" onclick="editDraft({{$draftEntryID}})">Edit Draft</button>
            <button type="button" class="d-inline-block btn btn-secondary" onclick="approveDraft()">Approve Draft</button>
            @endif
        </div>
    </div>
    <form method="post" action="{{route('printDraft')}}" enctype="multipart/form-data" id="editDraft" class="d-none">
        @csrf
        <input type="hidden" name="cusPlotID" id="cusPlotID" value="{{ $cusPlotID }}">
        <input type="hidden" name="docTypeID" id="docTypeID" value="{{ $docTypeID }}">
        <input type="hidden" name="userID" id="userID" value="{{ $userID }}">
        <input type="hidden" name="userRole" id="userRole" value="{{ $userRole }}">
        <textarea id="tiny" class="tinyContent" name="content"></textarea>
        <div class="mt-4 d-flex justify-content-center">
            <button type="button" class="btn btn-info" data-toggle="modal" data-target="#previewEdit"
                    onclick="previewDraftEdit()"> Preview
            </button>
        </div>
    </form>

    <div class="modal fade bd-example-modal-lg" id="udpateDraft_{{$docTypeID}}" tabindex="-1" role="dialog"
         aria-hidden="true">
        <div class="modal-dialog modal-lg  modal-simple modal-edit-user">
            <div class="modal-content  modal-lg p-3 p-md-5" id="modal-content">
                <div class="modal-body container">
                </div>
                <div class="bottom-line"></div>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            @if($userRole == 'ASSISTANT')
                            <label for=""> Mark To Manager
                                <input type="checkbox" id="markToMngr" name="markToMngr" value="0">
                            </label>
                            @elseif($userRole == 'MANAGER')
                                <label for=""> Mark To Director
                                    <input type="checkbox" id="markToDir" name="markToDir" value="0">
                                </label>
                            @endif
                        </div>
                        <div class="col">
                            <button class="btn btn-secondary" onclick="updateDraft()">Update</button>
                        </div>
                        <div class="col">
{{--                            <form method="POST" action="{{route('printDraft')}}" enctype="multipart/form-data"--}}
{{--                                  id="printDraft">--}}
{{--                                @csrf--}}
{{--                                <input type="hidden" name="cusPlotID" id="cusPlotID" value="{{ $cusPlotID }}">--}}
{{--                                <input type="hidden" name="docTypeID" id="docTypeID" value="{{ $docTypeID }}">--}}
{{--                                <input type="hidden" name="userID" id="userID" value="{{ $userID }}">--}}
{{--                                <input type="hidden" name="userRole" id="userRole" value="{{ $userRole }}">--}}
{{--                                <input type="hidden" name="saveDraft" id="saveDraftID"--}}
{{--                                       value="{{ $saveDraft[0]->draft_entry_id }}">--}}

{{--                                <input type="hidden" name="content" id="content">--}}
{{--                                <button type="button" class="btn btn-secondary" onclick="printDraft({{$docTypeID}})">--}}
{{--                                    Print--}}
{{--                                </button>--}}
{{--                            </form>--}}
                        </div>
                    </div>
                </div>

            <!-- <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" onclick="closeModal({{ $docTypeID }})">Cancel</button>
                            </div> -->
            </div>
        </div>
    </div>
</div>
</div>
<script src="{{ asset('js/bootstrap.js') }}"></script>
<script src="{{ asset('js/jquery.js') }}"></script>
<script src="{{ asset('js/popper.js') }}"></script>
<script src="{{ asset('js/tinymce.js') }}"></script>
<script src="{{ asset('js/tinymce-jquery.js') }}"></script>
<script>
    $('textarea#tiny').tinymce({
        height: 800,
        // width: 700,
        plugins: [
            'advlist', 'autolink',
            'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
            'fullscreen', 'insertdatetime', 'media', 'table',
        ],
        toolbar: "undo redo | styleselect | fontselect fontsizeselect fontfamily bold italics underline forecolor backcolor | link image | alignleft aligncenter alignright alignjustify |lineheight | numlist bullist indent outdent | removeformat ",
    });

    function editDraft(id) {
        $.ajax({
            url: `{{route('editDraft')}}`,
            method: 'post',
            data: {
                _token: "{{ csrf_token() }}",
                draftEntryID: id,
            },
            success: function (response) {
                $('#editDraft').removeClass('d-none');
                var textareaContent = response[0].edited_draft;
                tinyMCE.get('tiny').setContent(textareaContent);
            }
        });
    }

    function preview(draftLogID, docTypeID, cusPlotID) {
        $.ajax({
            url: `{{route('editPreview')}}`,
            method: 'post',
            data: {
                _token: "{{ csrf_token() }}",
                draftLogID: draftLogID,
                docTypeID: docTypeID,
                cusPlotID: cusPlotID
            },
            success: function (response) {
                var cusDetails = response.cusDetails;
                var body = response.body[0];
                var draftTitle = response.draftTitle;
                $.ajax({
                    url: `{{route('editPreviewPrint')}}`,
                    method: 'post',
                    data: {
                        _token: "{{ csrf_token() }}",
                        cusDetails: cusDetails,
                        body: body,
                        draftTitle: draftTitle,
                    },
                    success: function (responseData) {
                        $('.modal-body').html(responseData);
                        $(`#customModal_${draftLogID}`).modal('show');
                    },
                });
            },
        });
    }

    function closeModal(draftLogID) {
        $(`#customModal_${draftLogID}`).modal('hide');
    }

    function previewDraftEdit(id) {
        var cusPlotID = $("#cusPlotID").val();
        var docTypeID = $("#docTypeID").val();
        var userID = $("#userID").val();
        var userRole = $("#userRole").val();
        var content = tinymce.activeEditor.getContent();

        $.ajax({
            url: `{{route('preview')}}`,
            method: 'post',
            data: {
                _token: "{{ csrf_token() }}",
                cusPlotID: cusPlotID,
                docTypeID: docTypeID,
                userID: userID,
                userRole: userRole,
            },

            success: function (response) {
                $.ajax({
                    method: 'post',
                    url: `{{route('showDraft')}}`,
                    data: {
                        _token: "{{ csrf_token() }}",
                        draftData: response,
                        content: content,
                        cusPlotID: cusPlotID,
                        docTypeID: docTypeID,
                    },
                    success: function (data) {
                        $('.modal-body').html(data);
                        $('#udpateDraft_{{$docTypeID}}').modal('show');
                    },
                });
            },
        });
    }

    function printDraft(docTypeID) {
        var cusPlotID = $("#cusPlotID").val();

            $.ajax({
            url: `{{route('printDraft')}}`,
            method: 'post',
            data: {
                _token: "{{ csrf_token() }}",
                docTypeID: docTypeID,
                cusPlotID: cusPlotID
            },
            success: function (response) {
                var newWindow = window.open();
                newWindow.document.open();
                newWindow.document.write(response);
                newWindow.document.close();
            },
        });
    }

    function updateDraft() {
        let markToDir = $('#markToDir').is(':checked') ? 1 : 0;
        let markToMngr = $('#markToMngr').is(':checked') ? 1: 0;
        var cusPlotID = $("#cusPlotID").val();
        var docTypeID = $("#docTypeID").val();
        var userID = $("#userID").val();
        var userRole = $("#userRole").val();
        var saveDraftID = {{$saveDraft[0]->draft_entry_id}}
        // var saveDraftID = $("#saveDraftID").val();
        var content = tinymce.activeEditor.getContent();

        $.ajax({
            url: `{{route('updateDraft')}}`,
            method: 'post',
            data: {
                _token: "{{ csrf_token() }}",
                cusPlotID: cusPlotID,
                docTypeID: docTypeID,
                userID: userID,
                userRole: userRole,
                content: content,
                saveDraftID: saveDraftID,
                markToDir: markToDir,
                markToMngr: markToMngr
            },
            success: function (response) {
                alert('Draft has been updated successfully');
                location.reload();

            },
        });
    }

    function approveDraft() {
        var saveDraftID = {{$saveDraft[0]->draft_entry_id}};
        var userID = $("#userID").val();
        $.ajax({
            url: `{{route('approveDraft')}}`,
            method: 'post',
            data: {
                _token: "{{ csrf_token() }}",
                saveDraftID: saveDraftID,
                userID: userID,
            },
            success: function (response) {
                alert('Draft has been approved successfully');
                location.reload();
            },
        });
    }

</script>
</body>

</html>
