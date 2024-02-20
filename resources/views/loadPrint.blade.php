<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Daily Report</title>
</head>
<style>
    body {
        font-family: Arial, sans-serif;
        margin-top: 50px;
        padding-left: 40px;
        margin-right: 30px;
        /*text-align: justify;*/
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


</style>
<body>
<p id="title" style="font-size: 16px"> TITLE DOCUMENT - KEEP IN SAFE CUSTODY</p>
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
    </div>
</div>

</body>
</html>
