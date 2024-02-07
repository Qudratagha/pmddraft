<head>
    <title>Show draft</title>
    <style>
        body {
            font-size: 12px;
            margin-top: 50px;
            padding-left: 40px;
            margin-right: 30px;
            text-align: justify;
            text-indent: 0.0cm; /* Adjust the value as needed */
            margin-left: -0.5cm;
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


    </style>
</head>
<body>
    <p id="title">{{ $draftTitle }}</p>
    <div class="d-flex-end">
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
            <div class="text-right">
                <div class=" mb-0">
                    {{ now()->format('d F Y') }}
                </div>
            </div>
        </div>
    </div>
    <div class="container" style="padding-left:0">
        <div class="row">
            <div class="col-md-8" style="display: inline-block; margin-top: 20px">
                <div class="d-inline-block " style="vertical-align: top;">
                    To
                </div>
                <span class="d-inline-block" style="margin-left: 20px;">

                      <article>{{$cusDetails[0]->name}} {{$cusDetails[0]->relation_title}} {{$cusDetails[0]->So_Do_Wo}}</article>
                      <article>({{$cusDetails[0]->cnic_nicop}})</article>
                      <article>{{$cusDetails[0]->present_address}}</article>
                      <article>{{$cusDetails[0]->phone_no}}</article>
                  </span>
                @if(count($cusDetails) > 1)
                    <span class="d-block mt-3" style="margin-left: 35px; margin-top: 10px">
                          <article>{{$cusDetails[1]->name}} {{$cusDetails[1]->relation_title}} {{$cusDetails[1]->So_Do_Wo}}</article>
                          <article>({{$cusDetails[1]->cnic_nicop}})</article>
                          <article>{{$cusDetails[1]->present_address}}</article>
                          <article>{{$cusDetails[1]->phone_no}}</article>
                        </span>
                @endif
            </div>
            <div class="col-md-4 text-right" style="padding-right:0; display: inline-block">
                <div class="d-block">
                    <img src="{{asset('/pictures/shareA.png')}}" alt="Image Description" height="70">
                    <img src="{{ url('/profile-pic/' . urlencode($cusDetails[0]->customer_id)) }}.jpg" alt="Profile Picture" height="80" width="70">
                </div>
                @if(count($cusDetails) > 1)
                    <div class="mt-4 d-block">
                        <img src="{{asset('/pictures/shareA.png')}}" alt="Image Description" height="70">
                        <img src="{{ url('/profile-pic/' . urlencode($cusDetails[1]->customer_id)) }}.jpg" alt="Profile Picture" height="80" width="70">
                    </div>
                @endif
            </div>
        </div>
    </div>

    <div class="subject"> Subject:
        <span><b><u>{{ $draftTitle}}</u></b></span>
    </div>
    <div>
        <span>DHAQ Membership No. {{ $cusDetails[0]->membership_prefix_no }} (A) reference</span>
    </div>
    @if(count($cusDetails) > 1)
        <div style="margin-top: -4px">
            <span>DHAQ Membership No. {{ $cusDetails[1]->membership_prefix_no }} (B) reference</span>
        </div>
    @endif
    <div class="body" style="margin-top: 5px;">
        {!! $content !!}
    </div>
</body>


