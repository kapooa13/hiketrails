<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");

class Database{
  
    // specify your own database credentials
    private $host = "localhost:3306";
    private $db_name = "hiketrails";
    private $username = "root";
    private $password = "14-October";
    public $conn;
  
    // get the database connection
    public function getConnection(){
        $this->conn = new mysqli($this->host, $this->username, $this->password, $this->db_name);

        if ($this->conn->connect_error) {
            $response['status'] = '0';
            $response['message'] = $exception->getMessage();
            return $response;

        } else {
            $response['status'] = '1';
            $response['connection'] = $this->conn;
            return $response;

        }
    }
}

?>
