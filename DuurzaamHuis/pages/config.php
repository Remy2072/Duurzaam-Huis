<?php

session_start();

$host = "127.0.0.1"; /* Host name */
$user = "c979aps1"; /* User */
$password = "miyqpiel"; /* Password */
$dbname = "c979ecosy"; /* Database name */

$con = mysqli_connect($host, $user, $password,$dbname);
// Check connection
if (!$con) {
 die("Connection failed: " . mysqli_connect_error());
}