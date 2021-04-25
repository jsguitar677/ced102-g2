<?php
session_start();
// $_SESSION["MBRNO"] = 1;
try{
  require_once("../../connect_ced102g2.php");
  $ini_loc_sql = "select l1.CITYNO , c.CITYNAME , group_concat(l1.LOCNAME separator ',') LOCNAME from location l1 join city c on (c.CITYNO = l1.CITYNO) where NOT exists (select l.CITYNO , c.CITYNAME , l.LOCNAME from location l join (select * from actv where actstat in (2,3,4,5)) a on (a.ACTLOC = l.LOCNAME) join city c on (c.CITYNO = l.CITYNO) where l1.LOCNAME = l.LOCNAME) group by l1.CITYNO";
  $ini_add_sql = "insert into `actv` (`MBRNO`, `LACHDATE`, `ACTNAME`, `ACTSDATE`, `ACTDLINE`, `ACTSTAT`, `VISION`, `ACTCON` , `ACTLOC` , `ACTCITY` , `DNTGOAL` , `RECRGOAL`, `DNTNOW` , `RECRNOW` ) values (:mbrno, curdate() , :actname , :actsdate , :actdline , '0' , :vision , :actcon , :actloc , :actcity , :dntgoal , :recpgoal , 0 , 0)";

  $ini_loc = $pdo->prepare($ini_loc_sql);
  $ini_loc->execute(); //可選擇的發起活動地點

  if( $ini_loc->rowCount() == 0 ){
    echo "{}";
  }else{
    $iniLocRow = $ini_loc->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($iniLocRow);
  }	
  if(isset($_POST["actname"])){
    $ini_add = $pdo->prepare($ini_add_sql);
    $ini_add->bindValue(":mbrno",$_SESSION["MBRNO"]);
    $ini_add->bindValue(":actname",$_POST["actname"]);
    $ini_add->bindValue(":actsdate",$_POST["actsdate"]);
    $ini_add->bindValue(":actdline",$_POST["actdline"]);
    $ini_add->bindValue(":vision",$_POST["vision"]);
    $ini_add->bindValue(":actcon",$_POST["actcon"]);
    $ini_add->bindValue(":actloc",$_POST["actloc"]);
    $ini_add->bindValue(":actcity",$_POST["actcity"]);
    $ini_add->bindValue(":dntgoal",$_POST["dntgoal"]);
    $ini_add->bindValue(":recpgoal",$_POST["recpgoal"]);
    $ini_add->execute();
    // echo "新增成功<br>";

  }else{
      // echo"無提供，故無法新增<br>";
  }

}catch(PDOException $e){
  echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>