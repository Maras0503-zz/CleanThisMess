<?php
    //SELECT INFORMATION ABOUT PRODUCTS
    $query = "call getRecords()";        
    
    function select($query){
        include('connection.php');
        $returnArray = array();
        $fetch = $mysqli->query($query); 
            while ($row = $fetch->fetch_array()) {
                $rowArray['date'] = $row['waste_date'];
                $rowArray['department'] = $row['waste_department'];
                $rowArray['shift'] = $row['waste_shift'];
                $rowArray['operator'] = $row['waste_operator'];
                $rowArray['product'] = $row['waste_product'];
                $rowArray['reason'] = $row['waste_defect'];
                $rowArray['corrective'] = $row['waste_corrective'];
                $rowArray['qty'] = $row['sumary'];
                $rowArray['machine'] = $row['waste_machine'];
                array_push($returnArray,$rowArray);
            }
            $mysqli->close();
        return $returnArray;
    }   
    
    echo json_encode(select($query));