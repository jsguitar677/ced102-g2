<?php
include("getMemInfo.php");
require_once("connect.php");

try{
    if(isset($_SESSION["MBRNO"])){
        $userno = $_SESSION["MBRNO"];
    }else{
        echo "抓不到資料";
    }
    
    $sql = "select * from `mbr`";
    $memberData = $pdo->prepare($sql);
    $memberData->bindValue(1, $userno);
    $memberData->execute();
    // 資料庫取回的資料
    $memRow = $memberData->fetch(PDO::FETCH_ASSOC);

    // $res = ["MBRMAIL"=>$memRow["MBRMAIL"], 
    //         "MBRNAME"=>$memRow["MBRNAME"],
    //         "MBRBIRTH"=>$memRow["MBRBIRTH"],
    //         "MBRPSW"=>$memRow["MBRPSW"], 
    //         "MBRPHONE"=>$memRow["MBRPHONE"],
    //         "MBRNO"=>$memRow["MBRNO"],
    //         "MBRMAIL"=>$memRow["MBRMAIL"], 
    //         "MBRNAME"=>$memRow["MBRNAME"],
    //         "MBRNO"=>$memRow["MBRNO"].
    //         "MBRMAIL"=>$memRow["MBRMAIL"], 
    //         "MBRNAME"=>$memRow["MBRNAME"],
    //         "MBRNO"=>$memRow["MBRNO"].
    //         "MBRMAIL"=>$memRow["MBRMAIL"], 
    //         "MBRNAME"=>$memRow["MBRNAME"],
    //         "MBRNO"=>$memRow["MBRNO"]
    // ];

    echo json_encode($memRow); 

}catch(PDOException $e){
    echo "error :　";
    echo $e->getMessage();
    echo "errorLine :　";
    echo $e->getLine();
}

// $sql = "select * from mbr where MBRMAIL=?";

// $member = $pdo->prepare($sql);
// $member->bindValue(1, $_POST["logMemId"]);
// $member->execute();

?>