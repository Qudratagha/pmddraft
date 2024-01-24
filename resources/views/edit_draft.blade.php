<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compitable" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compitable" content="IE=edge">
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
    </style>
   
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdn.tiny.cloud/1/a75zsruidoxva9mlkyodxbbq4f5g0unzdomf8ote967j9bhf/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tinymce/tinymce-jquery@1/dist/tinymce-jquery.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body class="py-3">
    <div class="container">
        <div class="mt-5">
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
                        <td>{{ $data->created_time }}</td>
                        <td>      
                            <button type="button" class="btn btn-secondary btn-sm" onclick="preview({{ $data->draft_log_id }}, {{ $saveDraft[0]->doc_type_id }}, {{ $saveDraft[0]->customer_plot_id }})">Preview</button>
                            
                            <div class="modal fade" tabindex="-1" id="customModal_{{ $data->draft_log_id }}">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">                                    
                                        </div>
                                        <div class="modal-body">

                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" onclick="closeModal({{ $data->draft_log_id }})">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </td>
                    <tr>
                    @endforeach

                </tbody>
            </table>
                <div class="justify-content-center d-flex">
                    <button type="button" class="d-inline-block btn btn-primary" onclick="editDraft({{$draftEntryID}})">Edit Draft</button>
                    <button type="button" class="d-inline-block btn btn-secondary">Approve Draft</button>
                </div>
            </div>

            <div class="container">
                <form method="post" action="{{route('print')}}" enctype="multipart/form-data" id="editDraft" class="d-none">
                    @csrf
                    <!-- <textarea id="tiny" class="tinyContent" name="content"></textarea> -->
                </form>
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
                function editDraft(id){
                $.ajax({
                    url: `{{route('editDraft')}}`,
                    method: 'post',
                    data: {
                        _token: "{{ csrf_token() }}",
                        draftEntryID : id,
                    },
                    success: function (response) {
                        $('#editDraft').removeClass('d-none');
                        var textarea = '<textarea id="tiny" class="tinyContent" name="content">{!!' + response[0].edited_draft + '!!}</textarea>';
                        $('#editDraft').append(textarea);

                    }
                })
            };    
            </script>
            <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

            <script>    
            function preview(draftLogID, docTypeID, cusPlotID){
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
                        var cusDetails = response.cusDetails[0];
                        var body = response.body[0];
                        var draftTitle = response.draftTitle;
                        $.ajax({
                            url: `{{route('editPreviewPrint')}}`,
                            method: 'post',
                            data: {
                                _token: "{{ csrf_token() }}",
                                cusDetails  : cusDetails,
                                body        : body,
                                draftTitle  : draftTitle,
                            },
                            success: function (responseData) {                         
                                $('.modal-body').html(responseData);
                                $(`#customModal_${draftLogID}`).modal('show');
                            },
                        });
                    },
                });
            }
            function closeModal(draftLogID){
                $(`#customModal_${draftLogID}`).modal('hide');
            }
            
            </script>
</body>
    
</html>