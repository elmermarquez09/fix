<?php
    require_once('connect.php');
    session_start();

    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
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

    //create the sql query
    $query = mysqli_query($con, "insert into patient_tbl (date, name, physician, discharge, care, services, staffs, time, regularly , spaces, medicalstaffs, andcare, room  , received, thestaff, laboratoryroom, others, hospital, us, reg_date) values('$date', '$name', '$physician', '$discharge', '$care', '$services', '$staffs', '$time', '$regularly' , '$spaces', '$medicalstaffs', '$andcare', '$room'  , '$received', '$thestaff', '$laboratoryroom', '$others', '$hospital', '$us', NOW())");

    if($query){
        http_response_code(201);
        $message['status'] = "Success....";
    }else{
        http_response_code(422);
        $message['status'] = 'Error....';
    }

    echo json_encode($message);
    echo mysqli_error($con);
?>