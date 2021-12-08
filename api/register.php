<?php
include('connection.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$data = file_get_contents('php://input');
$json_data = json_decode($data);
$username = $json_data->params->username;
$password = $json_data->params->password;
$hashed_password = password_hash($password, PASSWORD_DEFAULT);
$input_data = [
	'username' => $username,
	'password' => $hashed_password
];

$result = [];
try {
	$model = new Connection();
	$db = $model->getConnection();
	$sql = "INSERT INTO users VALUES (NULL, :username, :password)";
	$query = $db->prepare($sql);
	$query->execute($input_data);
	echo json_encode($result);
} catch(PDOException $error) {
	//catch error
	$result["status"] = $error->getCode();
	$result["message"] = $error->getMessage();
	echo json_encode($result);
}
?>


