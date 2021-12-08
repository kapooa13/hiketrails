<?php
include('connection.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$data = file_get_contents('php://input');
$json_data = json_decode($data);
$username = $json_data->params->username;
$password = $json_data->params->password;
$input_data = [
	'username' => $username
];

try {
	$model = new Connection();
	$db = $model->getConnection();
	$sql = "SELECT * FROM users WHERE username LIKE :username";
	$query = $db->prepare($sql);
	$query->execute($input_data);
	if ($query->rowCount() > 0) {
		while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
			$hashed_pass = $row['password'];
			if (password_verify($password, $hashed_pass)) {
				$result = [
					"user_id" => $row["user_id"],
					"username" => $row["username"],
					"successful" => true
				];
				echo json_encode($result);
				break;
			}
		}
	} else {
		echo json_encode(["successful" => false]);
	}
} catch(PDOException $error) {
	//catch error
	$result["status"] = $error->getCode();
	$result["message"] = $error->getMessage();
	echo json_encode($result);
}
?>


