<!DOCTYPE html>
<html>
<head>
    <title>Tony's Café Bill</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f1ea;
            display: flex;
            justify-content: center;
            margin-top: 50px;
        }

        .bill {
            background: white;
            padding: 20px 30px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            width: 300px;
        }

        h2 {
            text-align: center;
        }

        .total {
            font-weight: bold;
            margin-top: 15px;
            color: darkgreen;
        }

        .buggy {
            color: red;
        }
    </style>
</head>
<body>

<div class="bill" id="billOutput">
    <h2>Tony’s Café Bill ☕</h2>
</div>

<script>
    // 1️⃣ Buggy Calculation
    let item1 = "200";  // string
    let item2 = 50;     // number

    let buggyTotal = item1 + item2;  // ❌ string + number = concatenation

    // 2️⃣ Fix with Explicit Conversion
    let fixedTotal = Number(item1) + item2;

    // 3️⃣ Add another item using parseFloat
    let item3 = "100.75";
    let floatTotal = parseFloat(item3) + fixedTotal;

    // 4️⃣ Display in Stylish UI
    document.getElementById("billOutput").innerHTML += `
        <p class="buggy">Buggy Total (200 + 50): ₹${buggyTotal}</p>
        <p>Fixed Total (200 + 50): ₹${fixedTotal}</p>
        <p>Total after adding 100.75: ₹${floatTotal}</p>
        <p class="total">Final total (as string): ₹${String(fixedTotal)}</p>
    `;
</script>

</body>
</html>
