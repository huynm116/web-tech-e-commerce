<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
<form action="" method="post">
<h2>First person:</h2>
  <label for="name1">Name:</label><br>
  <input type="text" id="name1" name="name1"/><br>
  <label for="dob">Date of birth:</label><br>
  <input type="date" id="dob1" name="dob1"/>
  <h2>Second person:</h2>
  <label for="name2">Name:</label><br>
  <input type="text" id="name2" name="name2"/><br>
  <label for="dob">Date of birth:</label><br>
  <input type="date" id="dob2" name="dob2"/>
  <input type="submit" name ="submit" value="Submit"></button>
</form>
<?php
 if (isset($_POST['submit'])) { 
  $dob1= $_POST['dob1'];
  $dob2= $_POST['dob2'];
  $age1 = floor((time() - strtotime($dob1)) / 31556926);
  $age2 = floor((time() - strtotime($dob2)) / 31556926);
  $difference = abs($age1 - $age2);
  echo "<p>Age of the first person:  $age1 </p>";
  echo "<p>Age of the second person:  $age2 </p>";
  echo "<p>The age difference between two people:  $difference </p>";
}
?>
</body>
</html>

