<?php
require_once('connect.php');

$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();

    $date = $data ['date'];
    $name = $data ['name'];
    $physician = $data ['physician'];
    $discharge = $data ['discharge'];
    $care = $data ['care'];
    $services = $data ['services'];
    $staffs = $data ['staffs'];
    $time = $data ['time'];
    $regularly = $data ['regularly'];
    $spaces = $data ['spaces'];
    $medicalstaffs = $data ['medicalstaffs'];
    $andcare = $data ['andcare'];
    $room = $data ['room'];
    $received = $data ['received'];
    $thestaff = $data ['thestaff'];
    $laboratoryroom = $data ['laboratoryroom'];
    $others = $data ['others'];
    $hospital = $data ['hospital'];
    $us = $data ['us'];
    $id = $_GET['id'];

$query = mysqli_query($con, "update patient_tbl set date = '$date', name = '$name', physician = '$physician',discharge = '$discharge', care = '$care', services = '$services', staffs = '$staffs', time = '$time', regularly = '$regularly', spaces = '$spaces',medicalstaffs = '$medicalstaffs', andcare = '$andcare', room = '$room', received = '$received', thestaff = '$thestaff', laboratoryroom = '$laboratoryroom', others = '$others',hospital = '$hospital' , us = '$us' where id = '$id' LIMIT 1");

if($query){
    http_response_code(201);
    $message['status'] = "Success";
}else{
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);


?>

