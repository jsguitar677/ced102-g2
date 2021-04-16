<?php
session_start();
try{
  require_once("connect.php");
  $sql = "select * from `mbr` where MBRMAIL=:MBRMAIL and MBRPSW=:MBRPSW"; 

  $member = $pdo->prepare($sql);
  $member->bindValue(":MBRMAIL", $_POST["MBRMAIL"]);
  $member->bindValue(":MBRPSW", $_POST["MBRPSW"]);
  $member->execute();

  if( $member->rowCount()==0){ //查無此人
	  echo "{}";
  }else{ //登入成功
    //自資料庫中取回資料
  	$memRow = $member->fetch(PDO::FETCH_ASSOC);
    $_SESSION["MBRMAIL"] = $memRow["MBRMAIL"];
    $_SESSION["MBRNAME"] = $memRow["MBRNAME"];
    $_SESSION["MBRNO"] = $memRow["MBRNO"];

    //送出登入者的姓名資料
    $res = ["MBRMAIL"=>$memRow["MBRMAIL"], "MBRNAME"=>$memRow["MBRNAME"],"MBRNO"=>$memRow["MBRNO"]];

    echo json_encode($memRow); //輸出json
  }
}catch(PDOException $e){
  echo $e->getMessage();
}




$mbr_info_sql = "select MBRNO , MBRPIC , MBRNAME , MBRBIO from mbr";
$f_sql = "select f.MBRNO , f.fnum , f.ftotal , m.MBRNO , m.MBRPIC , m.MBRNAME , m.MBRBIO 
from (select MBRNO , count(*) fnum , sum(amount) ftotal 
from fundra group by MBRNO order by ftotal desc) f join mbr m on (m.MBRNO = f.MBRNO);";

$j_sql = "select j.MBRNO , j.jnum , m.MBRNO , m.MBRPIC , m.MBRNAME , m.MBRBIO rom (select MBRNO , count(*) jnum from actvap group by MBRNO order by jnum desc) j join mbr m on (m.MBRNO = j.MBRNO)";

$i_sql = "select MBRNO , count(*) inum from actv group by MBRNO";







?>

