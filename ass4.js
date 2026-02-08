<!DOCTYPE html>
<html>
<head>
  <title>Tony's Café Receipt</title>
  <style>
    body {
      font-family: monospace;
      background-color: #f4f4f4;
    }
    .receipt {
      width: 320px;
      background: white;
      padding: 20px;
      margin: 40px auto;
      border: 1px solid #ccc;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    .center {
      text-align: center;
    }
    hr {
      border: 1px dashed #000;
    }
  </style>
</head>
<body>

<div class="receipt" id="receipt"></div>

<script>

  // 1️⃣ Order Details (EDIT THESE)
  let customerName = "Rahul";
  let itemName = "LATTE";
  let price = 150;
  let quantity = 3;

  // 2️⃣ Format the Item Name (using 2 string methods)
  let formattedItem = itemName.toLowerCase();  
  formattedItem = formattedItem.charAt(0).toUpperCase() + formattedItem.slice(1);

  // 3️⃣ Calculate Total
  let total = price * quantity;

  // 🔥 BONUS: 10% Service Charge
  let serviceCharge = total * 0.10;
  let finalAmount = total + serviceCharge;

  // Display Receipt
  document.getElementById("receipt").innerHTML = `
    <div class="center">
      <h2>☕ Tony's Café</h2>
      <p>Where Genius Meets Coffee</p>
    </div>
    <hr>
    <p>Customer: ${customerName}</p>
    <p>Item: ${formattedItem}</p>
    <p>Price: ₹${price}</p>
    <p>Quantity: ${quantity}</p>
    <hr>
    <p>Subtotal: ₹${total}</p>
    <p>Service Charge (10%): ₹${serviceCharge}</p>
    <hr>
    <h3>Total Bill: ₹${finalAmount}</h3>
    <hr>
    <div class="center">
      <p>Thank You! Visit Again ☕</p>
    </div>
  `;

</script>

</body>
</html>
