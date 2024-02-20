<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{ asset('css/bootstrap.css') }}">
    <link rel="stylesheet" href="{{ asset('css/npmbootstrap.css') }}">
{{--    <script src="https://cdn.tiny.cloud/1/a75zsruidoxva9mlkyodxbbq4f5g0unzdomf8ote967j9bhf/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>--}}

    <style>

            button {
            display: block;
            width: 20%;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            cursor: pointer;
            }
            button:hover {
                background-color: #0056b3;
            }

    </style>



</head>

<body style="padding-top: 30px">
    <div class="container">
        <form method="post" action="{{route('preview')}}" enctype="multipart/form-data">
            @csrf
            <input type="hidden" name="cusPlotID"  id="cusPlotID"   value="{{ $cusPlotID }}">
            <input type="hidden" name="docTypeID"  id="docTypeID"   value="{{ $docTypeID }}">
            <input type="hidden" name="userID"     id="userID"      value="{{ $userID }}">
            <input type="hidden" name="userRole"   id="userRole"    value="{{ $userRole }}">
            <textarea id="tiny"  name="content"></textarea>
            <div class="mt-4 d-flex justify-content-center">
                <button type="button" class="btn btn-info" data-toggle="modal" data-target="#preview" onclick="previewDraft()"> Preview </button>
            </div>
        </form>

        <div class="modal fade bd-example-modal-lg" id="preview" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg  modal-simple modal-edit-user">
                <div class="modal-content  modal-lg p-3 p-md-5" id="modal-content">
                    <div class="modal-body container">
                    </div>
                    <div class="bottom-line"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="mt-2">
                                    <label for=""> Mark To Manager
                                        <input type="checkbox" id="markToMngr" name="markToMngr" value="0">
                                    </label>
                                </div>
                            </div>
                            <div class="col">
                                <button class="btn btn-secondary" onclick="saveDraft()">Save</button>
                            </div>
                            <div class="col">
                                <form method="POST" action="{{route('printDraft')}}" enctype="multipart/form-data" id="printDraft">
                                    @csrf
                                    <input type="hidden" name="cusPlotID"  id="cusPlotID"   value="{{ $cusPlotID }}">
                                    <input type="hidden" name="docTypeID"  id="docTypeID"   value="{{ $docTypeID }}">
                                    <input type="hidden" name="userID"     id="userID"      value="{{ $userID }}">
                                    <input type="hidden" name="userRole"   id="userRole"    value="{{ $userRole }}">
                                    <input type="hidden" name="markToMngrPrint" id="markToMngrPrint" value="" >
                                    <input type="hidden" name="content"     id="content">
                                    <button type="button" class="btn btn-secondary" onclick="printDraft()">Print</button>
                                </form>
                            </div>
                        </div>
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
        $('.tox-notifications-container').css('display', 'none');

        $('textarea#tiny').tinymce({
            height: 900,
            // width: 750,
            plugins: [
                'advlist','autolink',
                'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
                'fullscreen','insertdatetime','table',
            ],
            toolbar: "undo redo | styleselect | fontselect fontsizeselect fontfamily bold italics underline forecolor backcolor | link image | alignleft aligncenter alignright alignjustify |lineheight | numlist bullist indent outdent | removeformat ",
            setup: function (editor) {
                editor.on('init', function () {
                    // Set the width of the preview iframe
                    $(editor.iframeElement).contents().find('.mce-preview-frame').css('width', '500px'); // Change '500px' to your desired width
                });
            },
          });
    </script>


<script>
    function saveDraft(){
        var markToMngr;
        var cusPlotID   = $("#cusPlotID").val();
        var docTypeID   = $("#docTypeID").val();
        var userID      = $("#userID").val();
        var userRole    = $("#userRole").val();
        if ($('#markToMngr').is(':checked')) {
             markToMngr  = 1;
        } else {
             markToMngr  = 0;
        }
        var content = tinymce.activeEditor.getContent();
        $.ajax({
                url: `{{route('saveDraft')}}`,
                method: 'post',
                data: {
                    _token: "{{ csrf_token() }}",
                    cusPlotID: cusPlotID ,
                    docTypeID: docTypeID,
                    userID: userID ,
                    userRole: userRole,
                    content: content,
                    markToMngr: markToMngr
                },
                success: function (response) {
                    alert(response);
                    location.reload();
                },
            });
    }

    function printDraft() {
        const docTypeID = $("#docTypeID").val();

        $.ajax({
            url: `{{route('checkEntry')}}`,
            method: 'get',
            data: {
                _token: "{{ csrf_token() }}",
                docTypeID: docTypeID,
            },
            success: function (response) {
                if ($.isArray(response) && response.length === 0) {
                    const shouldExecute = confirm("Please save the draft before printing.");
                    if (shouldExecute) {
                        $('#markToMngrPrint').val($('#markToMngr').is(':checked') ? 1 : 0);
                        $('#content').val(tinymce.activeEditor.getContent());
                        $('#printDraft').submit();
                        window.reload();
                    }
                }else{
                    console.log('not');
                    return;
                }
            },
        });

    }

    function approveDraft(){
        console.log('approve btn');
    }

    function previewDraft() {
        var cusPlotID   = $("#cusPlotID").val();
        var docTypeID   = $("#docTypeID").val();
        var userID      = $("#userID").val();
        var userRole    = $("#userRole").val();
        var content     = tinymce.activeEditor.getContent();

        $.ajax({
            url: `{{route('preview')}}`,
            method: 'post',
            data: {
                _token: "{{ csrf_token() }}",
                cusPlotID: cusPlotID ,
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
                        content : content,
                        cusPlotID: cusPlotID ,
                        docTypeID: docTypeID,
                    },
                    success: function (data) {
                        $('.modal-body').html(data);
                        $('#preview').modal('show');
                    },
                });
            },
        });
    }
</script>
</body>

</html>



