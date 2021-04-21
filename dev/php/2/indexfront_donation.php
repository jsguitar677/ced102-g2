<?php
    try{
        require_once("./connectBooks.php");
        //MBRPIC, MBRNAME, DONATE
        $sql = "select MBRPIC, MBRNAME, DONATE from MBR order by DONATE desc";
        $donateRow = $pdo->query($sql);
        $donateRows = $donateRow->fetchAll(PDO::FETCH_ASSOC);
        // print_r($donateRows);
        echo json_encode($donateRows);
    }catch(PDOException $e){    
        echo $e->getMessage();
    }
?>