<?php
try{
  require_once("../../connect_ced102g2.php");
 
  $MBRDATA=" SELECT a.CommNo, a.Timestamp , a.ActNo , a.Mbrname , a.Message , b.MBRPIC
             FROM comm a join mbr b on a.Mbrname = b.MBRNAME
             WHERE a.ACTNO =:ACTNO
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