<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Print Draft</title>
        <style>
            body {
                font-family: Arial, sans-serif;

                margin-top: 40%;
                padding-left: 40px;
                padding-right: 40px;
                /*text-align: justify;*/
                text-indent: 0.0cm; /* Adjust the value as needed */
                /*margin-left: -0.5cm;*/
            }

            #title {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .d-flex-end {
                display: flex;
                justify-content: flex-end;
            }

            .d-flex-between {
                display: flex;
                justify-content: space-between;
            }

            .info {
                display: inline-block;
                text-align: left;
            }

            .d-inline-block {
                display: inline-block;
            }

            .align-right {
                text-align: right;
            }

            .margin-left {
                margin-left: auto;
            }

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

            article {
                text-align: left;
            }
            .fontSize{
                font-size: 12pt;
            }

        </style>
    </head>
<body>
    <p id="title" class="fontSize"> TITLE DOCUMENT - KEEP IN SAFE CUSTODY</p>
    <div class="d-flex-end fontSize">
        <div class="info">
            <div class="mb-0">
                <b>Defense Housing Authority, Quetta</b>
            </div>
            <div class=" mb-0">Main Airport Road Quetta</div>
            <div class=" mb-0">Telephone Number: 081-2864446-7</div>
            <div class=" mb-0">Email: info@dhaquetta.com</div>
            <div class=" mb-0">
                <b>Property Code:{{ $cusDetails[0]->property_code }}</b>
            </div>
            <div class="text-right" style="text-align: right">
                <div class="mb-0">
                    {{ now()->format('d F Y') }}
                </div>
            </div>
        </div>
    </div>
    <div class="fontSize">
        <div class="d-inline-block" style="vertical-align: top;">
            To
        </div>
        <div class="d-inline-block" style="margin-left: 20px; vertical-align: top; max-width: 50%; ">
            <article>{{$cusDetails[0]->name }} {{$cusDetails[0]->relation_title }} {{$cusDetails[0]->So_Do_Wo }}</article>
            <article>({{$cusDetails[0]->cnic_nicop }})</article>
            <article>{{$cusDetails[0]->present_address }}</article>
            <article>{{$cusDetails[0]->phone_no }}</article>
        </div>
        <div class="d-inline-block" style="vertical-align: top; position: absolute; right: 49px;">
            @if(count($cusDetails) > 1)
                <img src="{{asset('/pictures/shareA.png')}}" alt="Image Description" height="100" width="95">
            @endif
            <img src="{{ url('/profile-pic/' . urlencode($cusDetails[0]->customer_id)) }}.jpg" alt="Profile Picture" height="80" width="70">
        </div>
    </div>
    @if(count($cusDetails) > 1)
        <div style="margin-top: 10px;">
            <div class="d-inline-block fontSize" style="margin-top: 10px; margin-left: 40px; max-width: 70%;" >
                <article>{{$cusDetails[1]->name }} {{$cusDetails[1]->relation_title }} {{$cusDetails[1]->So_Do_Wo }}</article>
                <article>({{$cusDetails[1]->cnic_nicop }})</article>
                <article>{{$cusDetails[1]->present_address }}</article>
                <article>{{$cusDetails[1]->phone_no }}</article>
            </div>
            <div class="d-inline-block" style="vertical-align: top; position: absolute; right: 49px">
                <img src="{{asset('/pictures/shareA.png')}}" alt="Image Description" height="100" width="95">
                <img src="{{ url('/profile-pic/' . urlencode($cusDetails[1]->customer_id)) }}.jpg" alt="Profile Picture" height="80" width="70">
            </div>
        </div>
    @endif
    <div class="subject fontSize" style="margin-top: 17px;"> Subject:
        <span><b><u>{{ $draftTitle}}</u></b></span>
    </div>
    <div class="fontSize" style="margin-top: 10px"> DHAQ Membership No. {{ $cusDetails[0]->membership_prefix_no }}  @if(count($cusDetails) > 1) (A) reference  @endif </div>
    @if(count($cusDetails) > 1)
        <div style="margin-top: -1px;" class="fontSize">
            DHAQ Membership No. {{ $cusDetails[1]->membership_prefix_no }} (B) reference
        </div>
    @endif
    <div class="body" style="margin-top: 10px;">
        {!! $content !!}
    </div>

    <script>
        window.onload = function () {
            window.print();
        }
    </script>
</body>
</html>
