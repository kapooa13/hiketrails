<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$random_name = uniqid();
$image = $_FILES['image'];
$filename = $image['name'];
$ext = pathinfo($filename)['extension'];
$tmp_file_location = $image['tmp_name'];

$keyname = $random_name.'.'.$ext;
$bucket = 'hiketrails-image-uploads';

require 'vendor/autoload.php';

use Aws\S3\S3Client;
use Aws\S3\Exception\S3Exception;


$s3 = new S3Client([
    'version' => 'latest',
    'region'  => 'us-east-2',
    'credentials' => [
	    'key'    => "",
	    'secret' => ""
    ]
]);

try {
    // Upload data.
    $result = $s3->putObject([
        'Bucket' => $bucket,
        'Key'    => $keyname,
	'ACL'    => 'public-read',
	'ContentType' => 'image/jpeg',
	'SourceFile' => $tmp_file_location
    ]);

    // Print the URL to the object.
    echo $result['ObjectURL'];
} catch (S3Exception $e) {
    echo $e->getMessage() . PHP_EOL;
}

?>
