<?php
    try{
        // require_once("./connectBooks.php");
        require_once("../../connect_ced102g2.php");
        //MBRPIC, MBRNAME, DONATE
        $sql = "select MBRPIC, MBRNAME, DONATE from MBR order by DONATE desc";
        $donateRow = $pdo->query($sql);
        $donateRows = $donateRow->fetchAll(PDO::FETCH_ASSOC);
        // print_r($donateRows);
        echo json_encode($donateRows);
    }catch(PDOException $e){    
        $result = ["errMsg" => $e->getMessage()];
        echo json_encode($result);
    }
?>