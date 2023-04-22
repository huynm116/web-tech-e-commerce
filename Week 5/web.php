<!DOCTYPE html>
<head>
    <title>Submit Form</title>
	<meta charset="UTF-8">
</head>
<body>
    <h2>Submit Your Data</h2>

    <?php

    // define variables and set to empty values
    $name = $email = $comment = "";
    $nameErr = $emailErr = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["name"])) {
        $nameErr = "Name is required";
    } else {
        $name = test_input($_POST["name"]);
        // check if name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
        $nameErr = "Only letters and white space allowed";
        }
    }
    
    if (empty($_POST["email"])) {
        $emailErr = "Email is required";
    } else {
        $email = test_input($_POST["email"]);
        // check if email address is well-formed
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailErr = "Invalid email format";
        }
    }
    
    $comment = test_input($_POST["comment"]);
    }

    function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
    }

    ?>

    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
    Name: <input type="text" name="name" value="<?php echo $name;?>">
    <span class="error">* <?php echo $nameErr;?></span>
    <br><br>
    E-mail: <input type="text" name="email" value="<?php echo $email;?>">
    <span class="error">* <?php echo $emailErr;?></span>
    <br><br>
    Comment: <textarea name="comment" rows="5" cols="40"><?php echo $comment;?></textarea>
    <br><br>
    <input type="submit" name="submit" value="Submit">
    </form>

    <?php
    if(empty($nameErr) && empty($emailErr) && isset($_POST['submit'])) {
        echo "<p>The data you submitted has been recognized.</p>";
    }
    ?>

</body>
</html>