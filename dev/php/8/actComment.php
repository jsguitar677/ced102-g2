<?php
try{
  require_once("../../connect_ced102g2.php");
 
  $MBRDATA=" SELECT a.commNo, a.timestamp , a.actno , a.mbrname , a.message , b.mbrpic
             FROM comm a join mbr b on a.mbrname = b.mbrname
             WHERE a.actno =:actno
";
  //commno 留言編號 timestamp 留言時間 actno 文章編號 mbrname 留言人姓名 message 留言內容 mbrpic 照片大頭貼
 
  $memberData = $pdo->prepare($MBRDATA);
  $memberData->bindValue(":actno",$_POST["ACTNO"]);
  $memberData->execute();
  
  $memRow = $memberData->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($memRow);

}catch(PDOException $e){
    echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}

?>