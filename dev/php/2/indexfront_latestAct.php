<?php
session_start();
    try{
        require_once("../../connect_ced102g2.php");
        $sql = "select a.ACTNO, a.ACTLOC, a.ACTNAME, a.RECRGOAL, a.RECRNOW, a.DNTGOAL, a.DNTNOW, a.ACTDLINE, a.ACTSTAT, b.LOCPIC from actv a JOIN location b ON a.ACTLOC = b.LOCNAME where a.ACTSTAT = 2 or a.ACTSTAT = 3 or a.ACTSTAT = 5 order by a.ACTSDATE desc";
        $LatestActvRow = $pdo->query($sql);
        $LatestActvRows = $LatestActvRow->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($LatestActvRows);
    }catch(PDOException $e){    
        echo $e->getMessage();
    }
?>