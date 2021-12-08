<?php
include('connection.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$data = file_get_contents('php://input');
$json_data = json_decode($data);
$trail_name = $json_data->params->trail_name;
$lat = $json_data->params->lat;
$long = $json_data->params->long;
$desc = $json_data->params->desc;
$image_url = $json_data->params->image_url;
$input_data = [
	'trail_name' => $trail_name,
	'rating' => 0,
	'lat' => $lat,
	'long' => $long,
	'desc' => $desc,
	'image_url' => $image_url
];

echo json_encode($input_data);

$result = [];
try {
	$model = new Connection();
	$db = $model->getConnection();
	$sql = "INSERT INTO trails VALUES (NULL, :trail_name, :rating, :lat, :long, :desc, :image_url)";
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


