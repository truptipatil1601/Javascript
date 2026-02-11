<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Day 6 – Tony's Smart Discount System</title>
<style>
  body {
    font-family: 'Courier New', monospace;
    background: linear-gradient(135deg, #1f1c2c, #928dab);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    min-height: 100vh;
  }
  h1 { color: #ffcc70; margin-bottom: 15px; text-align: center; }
  .receipt {
    background: #222;
    border: 2px dashed #ffcc70;
    border-radius: 10px;
    width: 380px;
    padding: 25px 20px;
    box-shadow: 0 0 20px rgba(255,204,112,0.3);
    margin-top: 20px;
  }
  .line { display: flex; justify-content: space-between; margin: 6px 0; font-size: 18px; }
  .total { border-top: 1px dashed #ffcc70; margin-top: 10px; padding-top: 10px; font-weight: bold; font-size: 20px; display: flex; justify-content: space-between; }
  .msg { text-align: center; margin-top: 12px; font-style: italic; color: #ffcc70; }
  .platinum {
    box-shadow: 0 0 25px gold;
    border-color: gold;
  }
</style>
</head>
<body>
<h1>💳 Tony's Café Discount System</h1>
<p>Use conditional statements to automate discount calculations!</p>
<div class="receipt" id="receipt"></div>
<script>
  // ===============================
  // STEP 1: Membership and bill
  // ===============================
  let customerName = "Sophia";
  let membership = "Gold"; // 🪪 Try: "Platinum", "Silver", "Bronze", "Regular"
  let billAmount = 600;
  let discount = 0;
  let message = "";
  // ===============================
  // STEP 2: Apply discount using if-else
  // ===============================
  if (membership === "Platinum") {
    discount = 0.3;
  } else if (membership === "Gold") {
    discount = 0.2;
  } else if (membership === "Silver") {
    discount = 0.1;
  } else if (membership === "Bronze") {
    discount = 0.05;
  } else {
    discount = 0;
  }
  let finalAmountIfElse = billAmount - (billAmount * discount);
  // ===============================
  // STEP 3: Apply discount using switch
  // ===============================
  let discountSwitch;
  switch (membership) {
    case "Platinum":
      discountSwitch = 0.3;
      break;
    case "Gold":
      discountSwitch = 0.2;
      break;
    case "Silver":
      discountSwitch = 0.1;
      break;
    case "Bronze":
      discountSwitch = 0.05;
      break;
    default:
      discountSwitch = 0;
  }
  let finalAmountSwitch = billAmount - (billAmount * discountSwitch);
  // ===============================
  // STEP 4: Welcome message (Ternary)
  // ===============================
  let isMember = membership !== "Regular";
  message = isMember ? "Welcome back, loyal customer!" : "Sign up to get discounts!";
  // ===============================
  // STEP 5: Display in UI
  // ===============================
  const receiptDiv = document.getElementById("receipt");
  if (membership === "Platinum") receiptDiv.classList.add("platinum");
  receiptDiv.innerHTML = `
    <div class="line"><span>Customer:</span><span>${customerName}</span></div>
    <div class="line"><span>Membership:</span><span>${membership}</span></div>
    <div class="line"><span>Total Bill:</span><span>₹${billAmount}</span></div>
    <div class="line"><span>Discount (if-else):</span><span>${discount * 100}%</span></div>
    <div class="line"><span>Final Amount:</span><span>₹${finalAmountIfElse}</span></div>
    <hr style="border: 1px dashed #ffcc70; margin: 12px 0;">
    <div class="line"><span>Discount (switch):</span><span>${discountSwitch * 100}%</span></div>
    <div class="total"><span>Final (switch)</span><span>₹${finalAmountSwitch}</span></div>
    <p class="msg">${message}</p>
  `;
</script>
</body>
</html>