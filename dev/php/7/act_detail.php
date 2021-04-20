<?php
try{
    require_once("../../connect_ced102g2.php");
    $sql1 = "select m.MBRNAME, a.ACTCON, a.ACTNO , a.ACTNAME , a.ACTSDATE , a.ACTSTAT , a.ACTDLINE , concat( 'M',a.ACTCITY) area , city.CITYNAME , city.LOCNAME , city.LOCPIC , concat(city.CITYNAME,city.LOCNAME) loc , a.VISION , a.DNTGOAL , a.RECRGOAL , a.DNTNOW , a.RECRNOW , (round(a.DNTNOW/a.DNTGOAL*100,2)) Vrate , (round(a.RECRNOW/a.RECRGOAL*100,2)) Frate from (select * from actv where actstat in (2,3,5)) a join (select l.CITYNO , c.CITYNAME , l.LOCNAME , l.LOCPIC from city c join location l on c.CITYNO = l.CITYNO) city on a.ACTLOC = city.LOCNAME join mbr m on a.MBRNO = m.MBRNO where a.ACTNO =:actno";

    $act = $pdo->prepare($sql1);
    $act ->bindValue(":actno",$_GET["actno"]);
    $act ->execute();
    $actRow = $act->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($actRow);





}catch(PDOException $e){
  echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>