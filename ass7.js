<!DOCTYPE html>
<html>
<head>
    <title>Tony's Café Reward System</title>
</head>
<body>

<h2>☕ Tony's Café Reward Board</h2>
<div id="output"></div>

<script>
    // Step 1 – Customer Info
    let memberType = "Gold";   // "Gold", "Silver", "Regular"
    let totalBill = 850;       // Example amount
    let hasCoupon = true;      // true or false
    let isWeekend = false;     // true or false

    let message = "";

    // Step 2 – Free Refill Offer (AND Operator &&)
    if (memberType === "Gold" && totalBill > 500) {
        message += "You get a free refill and cookie! <br>";
    }

    // Step 3 – Combo Offer (OR Operator ||)
    if (totalBill > 800 || hasCoupon === true) {
        message += "You qualify for a combo offer! <br>";
    }

    // Step 4 – Café Open Check (NOT Operator !)
    if (!isWeekend) {
        message += "Tony’s Café is open! <br>";
    } else {
        message += "Closed for maintenance! <br>";
    }

    // Step 5 – Comparison Practice
    if (totalBill >= 1000) {
        message += "You earned a bonus gift! <br>";
    }

    // Display all messages
    document.getElementById("output").innerHTML = message;

</script>

</body>
</html>