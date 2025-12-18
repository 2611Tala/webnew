<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name     = htmlspecialchars($_POST["name"] ?? "");
    $phone    = htmlspecialchars($_POST["phone"] ?? "");
    $location = htmlspecialchars($_POST["location"] ?? "");

    if ($name && $phone && $location) {
        $_SESSION["userInfo"] = [
            "name"     => $name,
            "phone"    => $phone,
            "location" => $location
        ];

        $userJson = json_encode($_SESSION["userInfo"]);
        $success = "Login successful! Welcome, $name 🍬";
    } else {
        $error = "Please fill all fields correctly.";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login - Sweet Store</title>
  <link rel="stylesheet" href="sweet.css" />
</head>
<body>

  <header class="main-header">
    <div class="header-logo">
      <img src="image/st.png" alt="Sweet Store Logo">
    </div>

    <nav class="header-nav">
      <ul>
        <li><a href="sweet.html">Home</a></li>
        <li><a href="about us.html">About us</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>

    <div class="icons">
      <img src="image/home.png" alt="home">
      <img src="image/shopping.png" alt="shopping">
      <img src="image/fav.png" alt="fav">
      <img src="image/person.png" alt="person">
    </div>
  </header>

  <section class="login-container">
    <div class="login-box">
      <h2>👤 Login to Sweet Store</h2>

      <form method="POST" action="login.php">
        <input type="text"   name="name"     placeholder="Enter your name" required>
        <input type="number" name="phone"    placeholder="Enter your phone number" required>
        <input type="text"   name="location" placeholder="Enter your location" required>
        <button type="submit">Login</button>
      </form>

      <?php if (!empty($success)): ?>
        <p class="msg success"><?php echo $success; ?></p>
      <?php elseif (!empty($error)): ?>
        <p class="msg error"><?php echo $error; ?></p>
      <?php endif; ?>

    </div>
  </section>

  <script src="js.js"></script>

  <?php
  if (!empty($success) && !empty($userJson)) {
      echo "<script>
        localStorage.setItem('userInfo', '$userJson');
        setTimeout(() => window.location.href = 'sweet.html', 1500);
      </script>";
  }
  ?>

</body>
</html>
