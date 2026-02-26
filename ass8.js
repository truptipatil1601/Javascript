<!DOCTYPE html>
<html>
<head>
    <title>Tony's Smart Café</title>
</head>
<body>

<h2>Check the Console for Output ☕</h2>

<script>

// 1️⃣ Step 1 – Serving Coffee (for loop)

for (let i = 1; i <= 5; i++) {
    console.log("☕ Serving coffee to Customer " + i + "...");
}

console.log("All customers have been served!");


// 2️⃣ Step 2 – Cleaning Tables (while loop)

let tablesLeft = 3;

while (tablesLeft > 0) {
    console.log("Cleaning table... Tables left: " + tablesLeft);
    tablesLeft--;
}


// 3️⃣ Step 3 – Machine Test (do...while loop)

let testsLeft = 0;

do {
    console.log("Running machine test... Tests left: " + testsLeft);
    testsLeft--;
} while (testsLeft > 0);


// 🔥 BONUS – Closing Countdown

for (let countdown = 3; countdown >= 1; countdown--) {
    console.log("Closing café in " + countdown + "...");
}

console.log("☕ Goodnight!");

</script>

</body>
</html>