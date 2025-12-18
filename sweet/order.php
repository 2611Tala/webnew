<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$payment = $_POST['payment'];
$cartData = json_decode($_POST['cartData'], true);
$total = $_POST['total'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Order Completed 🎉</title>

<style>
    body {
        font-family: "Cairo", sans-serif;
        text-align: center;
        background: #ffe4ec;
        padding: 40px;
    }
    .box {
        background: #fff;
        padding: 30px;
        width: 60%;
        margin: auto;
        border-radius: 18px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    h2, h3 {
        color: #b34770;
    }
    ul {
        list-style: none;
        padding: 0;
    }
    li {
        background: #ffebf3;
        margin: 8px 0;
        padding: 10px;
        border-radius: 10px;
    }
    .btn {
        background: #ff6ea1;
        color: #fff;
        padding: 12px 28px;
        border: none;
        border-radius: 10px;
        margin-top: 25px;
        cursor: pointer;
        font-size: 16px;
        text-decoration: none;
        display: inline-block;
    }
    .btn:hover {
        background: #e13e82;
    }
</style>

</head>
<body>

<div class="box">

    <h2>✔ Your Order is Confirmed!</h2>
    <p>Thanks <strong><?= $name ?></strong> 💕 Your sweets are on the way!</p>

    <h3>📍 Delivery Info:</h3>
    <p><strong>Phone:</strong> <?= $phone ?></p>
    <p><strong>Address:</strong> <?= $address ?></p>
    <p><strong>Payment Method:</strong> <?= $payment ?></p>

    <h3>🧺 Your Cart:</h3>

    <?php if (!empty($cartData)) : ?>
        <ul>
        <?php foreach ($cartData as $item) : ?>
            <li>
                <strong><?= $item['name'] ?></strong>
                — Qty: <?= $item['qty'] ?>
                — <?= $item['price'] ?>
            </li>
        <?php endforeach; ?>
        </ul>
    <?php else : ?>
        <p>No items included.</p>
    <?php endif; ?>
   <?php $total = 0;

if (!empty($cartData)) {
    foreach ($cartData as $item) {
        $price = (float) preg_replace('/[^\d.]/', '', $item['price']);
        $qty = (int) ($item['qty'] ?? 1);
        $total += $price * $qty;
    }
  }?>

    <h2>💰 Total: <?= $total ?>₪</h2>

    <a href="sweet.html" class="btn">Back to Home</a>

</div>

</body>
</html>
