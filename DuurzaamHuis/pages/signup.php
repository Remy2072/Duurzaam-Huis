<html>
  <head>
    <?php 
    session_start();
    ?>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
  </head>
    <style>
      body {
        text-align: center;
        padding: 40px 0;
        background-color: #1c1c1f;
      }
        h1 {
          color: #17c9b7;
          font-family: "Montserrat", sans-serif;
          font-weight: 900;
          font-size: 40px;
          margin-bottom: 10px;
        }
        p {
          color: #404F5E;
          font-family: "Montserrat", sans-serif;
          font-size:20px;
          margin: 0;
        }
      i {
        color: #17c9b7;
        font-size: 100px;
        line-height: 200px;
        margin-left:-15px;
      }
      .card {
        background-color: #252529;
        padding: 60px;
        border-radius: 4px;
        display: inline-block;
        margin: 0 auto;
      }
    </style>
    <body>
      <div class="card">
      <div style="border-radius:200px; height:200px; width:200px; background: #484848; margin:0 auto;">
        <i class="checkmark">✓</i>
      </div>
        <h1>Success</h1> 
        <p>Account is aangemaakt<br/>Wacht 5-10 seconden</p>
      </div>
    </body>
</html>
<script>
    var timer = setTimeout(function() {
        window.location='login.php'
    }, 5000);
</script>
<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("127.0.0.1", "c979aps1", "miyqpiel", "c979ecosy");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

$naam = $_POST['name'];
$email = $_POST['ename'];
$password = $_POST['pname'];
 
// Attempt insert query execution
$sql = "INSERT INTO `users` (`userid`, `name`, `email`, `password`) VALUES (NULL, '$naam', '$email', '$password');";
if(mysqli_query($link, $sql)){
    // echo "De Informatie is verstuurd dankjewel"."<br>";
    // echo "<a href='../jsonrequest.html'>Klik hier Om het te bekijken</a>";
    // sleep(10);
    // header("Location: login.html");
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 
// Close connection
mysqli_close($link);
?>