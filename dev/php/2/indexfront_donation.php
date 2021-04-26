<?php
    try{
        require_once("../../connect_ced102g2.php");
        $sql = "select MBRPIC, MBRNAME, DONATE from mbr order by DONATE desc";
        $donateRow = $pdo->query($sql);
        $donateRows = $donateRow->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donateRows);
    }catch(PDOException $e){    
        echo $e->getMessage();
    }
?>