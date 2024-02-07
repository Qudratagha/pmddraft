<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Print Page</title>
</head>
<body>
<!-- Display the content -->
{!! $content !!}

<!-- Automatically trigger the print dialog -->
<script>
    // Trigger the print dialog when the page loads
    window.onload = function() {
        window.print();
    }
</script>
</body>
</html>
