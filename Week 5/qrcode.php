<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
<form action="" method="post">
  <label for="name">Name:</label><br>
  <input type="text" id="name" name="name"/><br>
  <label for="id">ID:</label><br>
  <input type="text" id="id" name="id"/><br>
  <label for="dose">Dose:</label><br>
  <input type="number" id="dose" name="dose"/><br>
  <input type="submit" name ="submit" value="Submit"></button>
</form>
<?php
 if (isset($_POST['submit'])) { 
  $id= $_POST['id'];
  $name= $_POST['name'];
    $dose= $_POST['dose'];
    $qrtext = $id . $name . $dose;
    require_once './phpqrcode/qrlib.php';
    $qrcode = 'qrcode.png';
    QRcode::png($qrtext, $qrcode, QR_ECLEVEL_L, 5);
    echo "<img src='$qrcode' />";
}
?>
</body>
</html>