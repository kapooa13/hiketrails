<?php
include('connection.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$data = file_get_contents('php://input');
$json_data = json_decode($data);
$search_term = $json_data->params->search_term;

$result = [];
try {
	$model = new Connection();
	$db = $model->getConnection();
	$search = "%$search_term%";
	$sql = "SELECT * FROM trails WHERE name LIKE :pattern";
	$query = $db->prepare($sql);
	$query->execute([':pattern' => $search]);
	if ($query->rowCount() > 0) {
		while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
			$row_data = [
				"trail_id" => $row["trail_id"],
				"name" => $row["name"],
				"rating" => $row["rating"],
				"latitude" => $row["latitude"],
				"longitude" => $row["longitude"],
				"description" => $row["description"],
				"image_url" => $row["image_url"],
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

