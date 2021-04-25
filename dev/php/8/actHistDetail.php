<?php
try{
  require_once("../../connect_ced102g2.php");
 
  $MBRDATA=" SELECT a.ACTNAME , a.LACHDATE , a.ACTSDATE, a.VISION, a.ACTCON , a.ACTLOC , a.DNTGOAL , a.DNTNOW , a.RECRGOAL ,a.RECRNOW , b.ACTPIC1 , b.ACTPIC2 , b.ACTPIC3 , b.RESULT
  FROM  actv a join afteract b ON a.actno = b.actno
  WHERE a.actno = :actno
";
  //actname活動名稱 lachdate發布募款日期 actsdate出發日期 VISION發起者幹話 ACTCON活動內容 ACTLOC活動地點 DNTGOAL DNTNOW募款最後金額 RECRGOAL參加人數 RECRNOW參加人數
  //actpic1 actpic2 actpic3 發布照片 result 活動成果

  $memberData = $pdo->prepare($MBRDATA);
  $memberData->bindValue(":actno", $_POST["ACTno"]);
  $memberData->execute();
  
  $memRow = $memberData->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($memRow);

}catch(PDOException $e){
    echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}

?>