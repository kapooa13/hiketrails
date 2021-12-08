<?php
include('connection.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$data = file_get_contents('php://input');
$json_data = json_decode($data);
$trail_id = $json_data->params->trail_id;
$desc = $json_data->params->desc;
$user_id = $json_data->params->user_id;
$username = $json_data->params->username;
$rating = $json_data->params->rating;
$input_data = [
	'trail_id' => $trail_id,
	'desc' => $desc,
	'user_id' => $user_id,
	'username' => $username,
	'rating' => $rating,
];

echo json_encode($input_data);

$result = [];
try {
	$model = new Connection();
	$db = $model->getConnection();
	$sql = "INSERT INTO ratings VALUES (NULL, :trail_id, :user_id, :username, :desc, :rating)";
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


