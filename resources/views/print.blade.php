<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Simple Page</title>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

    <style>
      body {
        font-family: Arial, sans-serif;
        font: size 12px;
        margin-top: 50px;
        padding-left: 40px;
        margin-right: 30px;
        text-align:justify;
        text-indent: 0.0cm; /* Adjust the value as needed */
        margin-left: -0.5cm; 
      }

      #title {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .d-flex-end{
        display: flex;
        justify-content: flex-end;
      }

      .d-flex-between{
        display: flex;
        justify-content: space-between;
      }

      .info {
        display: inline-block;
        text-align: left;
      }

      .d-inline-block{
        display: inline-block;
      }

      .align-right{
         text-align: right;
      }

      .margin-left{
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

      article{
        text-align: left;
      }

    </style>
  </head>
  <body>
    <p id="title">{{ $draftTitle }}</p>
    <div class="d-flex-end">
      <div class="info">
        <div class=" mb-0">
          <b>Defense Housing Authority, Quetta</b>
      </div>
        <div class=" mb-0">Main Airport Road Quetta</div>
        <div class=" mb-0">Telephone Number: 081-2864446-7</div>
        <div class=" mb-0">Email: info@dhaquetta.com</div>
        <div class=" mb-0">
          <b>Property Code:{{ $cusDetails[0]['property_code'] }}</b>
        </div>
        <div class="text-right">
          <div class=" mb-0">
            {{ now()->format('d F Y') }}
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex-between">
      <div class="d-inline-block">
         To
      </div>
      <div class="d-inline-block" style="margin-left:20px">
          <article>{{$cusDetails[0]['name']}} {{$cusDetails[0]['relation_title']}} {{$cusDetails[0]['So_Do_Wo']}}</article>
          <article>({{ $cusDetails[0]['cnic_nicop'] }})</article>
          <article>{{ $cusDetails[0]['present_address'] }}</article>
          <article>{{ $cusDetails[0]['phone_no'] }}</article>
      </div>
      <div></div>
      <div class="d-inline-block align-right">
          <img src="{{asset('/pictures/draftPic.png')}}" alt="Image Description" height="100" width="95">
      </div>
    </div>
    <div class="subject"> Subject: <span><b><u>{{ $draftTitle}}</u></b></span>
    </div>
    <div><span>DHAQ Membership No. {{ $cusDetails[0]['membership_prefix_no'] }}</span></div>
    <div class="body" style="margin: top 10px;">
          {!! $content !!}
    </div>
  </body>
  <!-- <script>
        $(document).ready(function () {
            window.print();
        });
    </script> -->
</html>


