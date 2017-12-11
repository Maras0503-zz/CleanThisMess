<?php
    //SELECT INFORMATION ABOUT PRODUCTS
    $query = "call getRecordsHistory()";        
    
    function select($query){
        include('connection.php');
        $returnArray = array();
        $fetch = $mysqli->query($query); 
            while ($row = $fetch->fetch_array()) {
                $rowArray['date'] = $row['waste_history_date'];
                $rowArray['department'] = $row['waste_history_department'];
                $rowArray['shift'] = $row['waste_history_shift'];
                $rowArray['operator'] = $row['waste_history_operator'];
                $rowArray['product'] = $row['waste_history_product'];
                $rowArray['reason'] = $row['waste_history_defect'];
                $rowArray['corrective'] = $row['waste_history_corrective'];
                $rowArray['qty'] = $row['sumary'];
                $rowArray['machine'] = $row['waste_history_machine'];
                array_push($returnArray,$rowArray);
            }
            $mysqli->close();
        return $returnArray;
    }   
    
    echo json_encode(select($query));