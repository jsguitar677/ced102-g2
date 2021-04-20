<?php
try{
    require_once("./connectBooks.php");
    //抓取actv table 中的  DNTNOW RECRNOW 整列的ROW數 for 發起活動場次
    $sql = "select DNTNOW, RECRNOW from actv";
    $actv = $pdo->query($sql);
    $actvRows = $actv->fetchAll(PDO::FETCH_ASSOC);
    // print_r($actvRows);
    $donationTot = 0;
    $recruitTot = 0;
    $result = array();
    foreach($actvRows as $i => $actvRow){
            $donationTot = $donationTot + $actvRows[$i]["DNTNOW"];
            $recruitTot = $recruitTot + $actvRows[$i]["RECRNOW"];
    }
    $actvTot = count($actvRows);
    $return = ["donationTot" => $donationTot, "recruitTot"=>$recruitTot, "actvTot"=>$actvTot];
    echo json_encode($return);
}catch(PDOException $e){
    echo $e->getMessage();
}

?>