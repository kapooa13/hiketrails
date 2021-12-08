<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");

class Connection {
    public function getConnection(){
        $host = "localhost:3306";
        $db = "hiketrails";
        $user = "root";
        $pass = "14-October";
        $options = array(
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
            );
        $db = new PDO("mysql:host=$host;dbname=$db;", $user, $pass, $options);
        return $db;
    }
}

?>
