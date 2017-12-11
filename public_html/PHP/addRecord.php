<?php
    $department = $_POST['department'];
    $operator = $_POST['operator'];
    $shift = $_POST['shift'];
    $product = $_POST['product'];
    $defect = $_POST['defect'];
    $corrective = $_POST['corrective'];
    $quantity = $_POST['quantity'];
    $machine = $_POST['machine'];

    $query = "select addRecord('".$department."','".$shift."','".$operator."','".$product."','".$defect."','".$corrective."','".$quantity."','".$machine."')";
    function select($query){
        include('connection.php');
        $returnArray = array();
        $mysqli->query($query);
        $mysqli->close();
        return $returnArray;
    }
echo json_encode(select($query));