<?php
    try{
        // require_once("./connectBooks.php");
        require_once("../../connect_ced102g2.php");
        //LOCATION LOCPIC;
        $sql = "select a.ACTLOC, b.LOCPIC from ACTV a JOIN LOCATION b ON a.ACTLOC = b.LOCNAME order by a.ACTSDATE desc";
        $LatestActvRow = $pdo->query($sql);
        $LatestActvRows = $LatestActvRow->fetchAll(PDO::FETCH_ASSOC);
        // print_r($LatestActvRows);
        echo json_encode($LatestActvRows);
    }catch(PDOException $e){    
        $result = ["errMsg" => $e->getMessage()];
        echo json_encode($result);
    }
?>