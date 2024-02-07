<html lang="en">
    <head>
        <title>Print draft</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                font-size: 14px;
                /*margin-top: 50px;*/
                padding-left: 40px;
                margin-right: 30px;
                /*text-align: justify;*/
                text-indent: 0.0cm;
                margin-left: -0.5cm;
            }

            #title {
                display: flex;
                color: red;
                align-items: center;
                justify-content: center;
                margin-top: 40%;
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

            .container {
                padding-left: 0;
            }

            .row {
                display: flex;
            }

            .col-md-8{
                display: inline-block;
                flex: 0 0 66.66667%;
                max-width: 66.66667%;
                padding-right: 15px;
            }
            .col-md-4{
                display: inline-block;
                flex: 0 0 33.33333%;
                max-width: 33.33333%;
                padding-right: 0;
                text-align: right;
                margin-top: 5px;
            }

            .mt-2 {
                margin-top: 2px;
            }

            .mt-4 {
                margin-top: 4px;
            }

            .text-right {
                text-align: right;
            }

            .subject {
                margin-top: 10px;
            }

            .subject span b u {
                font-weight: bold;
                text-decoration: underline;
            }

            @media print {
                body::before {
                    content: "Printing is allowed, but saving is not permitted.";
                    display: block;
                    margin: 20px;
                    color: red;
                }
            }

        </style>
    </head>
    <body>
    <p id="title"> TITLE DOCUMENT - KEEP IN SAFE CUSTODY</p>
    <div class="d-flex-end">
        <div class="info">
            <div>
                <b>Defense Housing Authority, Quetta</b>
            </div>
            <div>Main Airport Road Quetta</div>
            <div>Telephone Number: 081-2864446-7</div>
            <div>Email: info@dhaquetta.com</div>
            <div>
                <b>Property Code:{{ $cusDetails[0] }}</b>
            </div>
            <div class="text-right">
                {{ now()->format('d F Y') }}
            </div>
        </div>
    </div>

    <div class="container" style="padding-left: 0">
        <div class="row">
            <div class="col-md-8" style="display: inline-block; padding-top: 10px; margin-top: 15px">
                <div class="d-inline-block" style="vertical-align: top;">To</div>
                <span  style="margin-left: 20px; display: inline-block">
                        <article>{{$cusDetails[0]->name }} {{$cusDetails[0]->relation_title }} {{$cusDetails[0]->So_Do_Wo }}</article>
                        <article>({{$cusDetails[0]->cnic_nicop }})</article>
                        <article>{{$cusDetails[0]->present_address }}</article>
                        <article>{{$cusDetails[0]->phone_no }}</article>
                    </span>
                @if(count($cusDetails) > 1)
                    <span class="mt-5" style="margin-left: 40px; display: inline-block; margin-top: 20px">
                        <article>{{$cusDetails[1]->name }} {{$cusDetails[1]->relation_title }} {{$cusDetails[1]->So_Do_Wo }}</article>
                        <article>({{$cusDetails[1]->cnic_nicop }})</article>
                        <article>{{$cusDetails[1]->present_address }}</article>
                        <article>{{$cusDetails[1]->phone_no }}</article>
                    </span>
                @endif
            </div>
            <div class="col-md-4" style="text-align: right ;padding-right: 0">
                <div class="d-block">
                    <img src="{{asset('/pictures/shareA.png')}}" alt="Image Description" height="100" width="95">
                    <img src="{{ url('/profile-pic/' . urlencode($cusDetails[0]->customer_id)) }}.jpg" alt="Profile Picture" height="80" width="70">
                </div>
                @if(count($cusDetails) > 1)
                    <div class="mt-4 d-block">
                        <img src="{{asset('/pictures/shareA.png')}}" alt="Image Description" height="100" width="95">
                        <img src="{{ url('/profile-pic/' . urlencode($cusDetails[1]->customer_id)) }}.jpg" alt="Profile Picture" height="80" width="70">
                    </div>
                @endif
            </div>
        </div>
    </div>
    <div class="subject"> Subject: <span><b><u>{{ $draftTitle}}</u></b></span></div>
    <div><span>DHAQ Membership No. {{ $cusDetails[0]->membership_prefix_no }} (A) reference</span></div>
    @if(count($cusDetails) > 1)
        <div><span>DHAQ Membership No. {{ $cusDetails[1]->membership_prefix_no }} (B) reference</span></div>
    @endif
    <div class="body" style="margin-top: 5px;">{!! $content !!}</div>
    </body>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            setTimeout(function () {
                window.print();
            }, 500);
        });
        // document.addEventListener("DOMContentLoaded", function () {
        //     window.print();
        // });
    </script>
</html>
