<?php
try{
  require_once("../../connect_ced102g2.php");
 
  $MBRDATA2=" SELECT a.ACTNO, b.MBRNO , b.ACTNAME, b.ACTSDATE ,c.LOCPIC
              FROM  afteract a join actv b ON a.ACTNO = b.ACTNO
                               join `location` c on b.ACTLOC = c.LOCNAME ";
  
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