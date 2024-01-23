<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compitable" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compitable" content="IE=edge">
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
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdn.tiny.cloud/1/a75zsruidoxva9mlkyodxbbq4f5g0unzdomf8ote967j9bhf/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tinymce/tinymce-jquery@1/dist/tinymce-jquery.min.js"></script>
  
</head>

<body>
    <div class="container">   
        <form method="post" action="{{route('print')}}" enctype="multipart/form-data">
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

                            <!-- <button type="submit" class="btn btn-secondary">Print</button> -->
                            <form method="POST" action="{{route('printDraft')}}" enctype="multipart/form-data" id="printDraft">
                                @csrf
                                <input type="hidden" name="cusPlotID"  id="cusPlotID"   value="{{ $cusPlotID }}">
                                <input type="hidden" name="docTypeID"  id="docTypeID"   value="{{ $docTypeID }}">
                                <input type="hidden" name="userID"     id="userID"      value="{{ $userID }}">
                                <input type="hidden" name="userRole"   id="userRole"    value="{{ $userRole }}">
                                <input type="hidden" name="content" id="content">
                                <button type="button" class="btn btn-secondary" onclick="printDraft()">Print</button>
                                
                            </form>
                            
                                
                            </div>
                            <!-- <div class="col">
                                <button class="btn btn-secondary" onclick="approveDraft()">Approve</button>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<script>
      $('textarea#tiny').tinymce({
        height: 400,
        plugins: [
            'advlist','autolink',
            'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
            'fullscreen','insertdatetime','media','table','help','wordcount',
        ],
        toolbar: "undo redo print | styleselect | fontselect fontsizeselect fontfamily bold italics underline forecolor backcolor | link image | alignleft aligncenter alignright alignjustify |lineheight | numlist bullist indent outdent | removeformat | spellcheckdialog",    
      });     
</script>
<script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>


<script>
    function saveDraft(){
        var cusPlotID   = $("#cusPlotID").val();
        var docTypeID   = $("#docTypeID").val();
        var userID      = $("#userID").val();
        var userRole    = $("#userRole").val();
        if ($('#markToMngr').is(':checked')) {
            var markToMngr  = 1;
        } else {
            var markToMngr  = 0;
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
                    alert('yes baby');
                },
            });
    }

    function printDraft(data){
        var content = tinymce.activeEditor.getContent();
        $('#content').val(content);
        $('#printDraft').submit();   
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
                    userID: userID ,
                    userRole: userRole,
                },

                success: function (response) {
                    $.ajax({
                        url: `{{route('print')}}`,
                        method: 'post',
                        data: {
                            _token: "{{ csrf_token() }}",
                            draftData: response,
                            content : content
                        },
                        success: function (data) {
                            var modal_content = data;
                            $('.modal-body').html(modal_content);
                            // $('#preview').modal('show');
                        },
                    });
                },
            });

            
            
        }
</script>
</body>

</html>



