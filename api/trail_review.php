<?php
include('connection.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$data = file_get_contents('php://input');
$json_data = json_decode($data);
$trail_id = $json_data->params->trail_id;
$input_data = [
	'trail_id' => $trail_id,
];

$result = [];
try {
	$model = new Connection();
	$db = $model->getConnection();
	$sql = "SELECT * FROM ratings WHERE trail_id = :trail_id";
	$query = $db->prepare($sql);
	$query->execute($input_data);
	if ($query->rowCount() > 0) {
		while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
			$row_data = [
				"user_name" => $row["user_name"],
				"rating" => $row["rating"],
				"review_content" => $row["review_content"],
			];
			array_push($result, $row_data);
		}
	}
	echo json_encode($result);
} catch(PDOException $error) {
	//catch error
	$result["status"] = $error->getCode();
	$result["message"] = $error->getMessage();
	echo json_encode($result);
}
?>


