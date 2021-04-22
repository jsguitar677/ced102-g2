<?php
session_start();
    try{
        // require_once("./connectBooks.php");
        require_once("../../connect_ced102g2.php");
        //LOCATION LOCPIC;
        $sql = "select a.ACTLOC, a.ACTNAME, a.RECRGOAL, a.RECRNOW, a.DNTGOAL, a.DNTNOW, a.ACTDLINE, b.LOCPIC from ACTV a JOIN LOCATION b ON a.ACTLOC = b.LOCNAME order by a.ACTSDATE desc";
        $LatestActvRow = $pdo->query($sql);
        $LatestActvRows = $LatestActvRow->fetchAll(PDO::FETCH_ASSOC);
        // $_SESSION["ACTNAME"] = $LatestActvRows["ACTNAME"];
        // foreach($LatestActvRows as $i => $LatestActvRow){
        //         echo $LatestActvRows[$i]["ACTNAME"],"<br>";
        // }
        // print_r($LatestActvRows);
        echo json_encode($LatestActvRows);
    }catch(PDOException $e){    
        echo $e->getMessage();
    }
?>