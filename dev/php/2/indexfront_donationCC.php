<?php
    try{
        require_once("./connectBooks.php");
        //MBRPIC, MBRNAME, PARTICIPATE
        $sql = "select MBRPIC, MBRNAME, PARTICIPATE from MBR order by PARTICIPATE desc";
        $participateRow = $pdo->query($sql);
        $participateRows = $participateRow->fetchAll(PDO::FETCH_ASSOC);
        // print_r($participateRows);
        echo json_encode($participateRows);
    }catch(PDOException $e){    
        echo $e->getMessage();
    }
?>