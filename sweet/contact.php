<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);
    $successMessage = "Thank you $name! Your message has been sent successfully. We will contact you soon.";

} else {
    $successMessage = "";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Submitted - Sweet Store</title>
  <link rel="stylesheet" href="sweet.css">
</head>

<body>

  <div class="contact-result-box">
      <h2>🍰 Message Sent!</h2>
      <p><?= $successMessage ?></p>

      <a href="sweet.html" class="back-btn">Back to Home</a>
      <a href="contact.html" class="back-btn">Send Another Message</a>
  </div>

</body>
</html>
