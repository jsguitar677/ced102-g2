<?php
try{
  require_once("../../connect_ced102g2.php");
 
  $MBRDATA2=" SELECT a.actno, b.mbrno , b.actname, b.actsdate ,c.locpic
              FROM  afteract a join actv b ON a.actno = b.actno
                               join `location` c on b.actloc = c.locname ";
  
  //a.活動編號 b.活動發起人 b.活動名稱 b,活動簡介 b,活動舉辦日
  //afferact //actv //location

  $memberData = $pdo->prepare($MBRDATA2);
  $memberData->execute();





  $memRow = $memberData->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($memRow); 


}catch(PDOException $e){
    echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}

?>