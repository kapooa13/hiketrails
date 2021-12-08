<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

# $data = file_get_contents('php://input');
# $json_data = json_decode($data);
# $username = $json_data->params->username;
# $password = $json_data->params->password;


# $_SESSION['username'] = $username;
# $_SESSION['password'] = $password;

session_start();
$_SESSION['username'] = 'fakeuser';
$_SESSION['password'] = 'fakepass';

echo json_encode($_SESSION);

?>
