<?php
include('connection.php');

$result = [];
try {
	$model = new Connection();
	$db = $model->getConnection();
	# $sql = "SELECT name FROM trails";
	# $sql = "SELECT trail_id, name, rating, latitude, longitude FROM `trails` WHERE name = 'lp trail'";
	$search = "%lp%";
	$sql = "SELECT trail_id, name FROM trails WHERE name LIKE :pattern";
	$query = $db->prepare($sql);
	$query->execute([':pattern' => $search]);
	if ($query->rowCount() > 0) {
		while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
			$result[$row["trail_id"]] = $row["name"];
		}
		/*
		$sample_row = $query->fetch(PDO::FETCH_ASSOC);
		$result["records"]= array(
			'id' => $sample_row["name"]
		);
		 */
	}
	echo json_encode($result);
} catch(PDOException $error) {
	//catch error
	$result["status"] = $error->getCode();
	$result["message"] = $error->getMessage();
	echo json_encode($result);
}
?>
