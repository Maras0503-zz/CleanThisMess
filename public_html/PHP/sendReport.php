<?php   
    $message = $_POST['content'];
    $to = 'uk3dsublimation@photobox.com';
    $subject = 'WASTE - when you open this please copy whole table into spoilage';
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=ISO-8859-1' . "\r\n";
    $headers .= 'From: noreply@mpiesik.pl';
    mail($to, $subject, $message, $headers);

    $query = "select storeAndDeleteRecords()";
    function select($query){
        include('connection.php');
        $returnArray = array();
        $mysqli->query($query);
        $mysqli->close();
        return $returnArray;
    }
echo json_encode(select($query));