<?php
try{
  require_once("../../connect_ced102g2.php");
  $all_sql = "select a.ACTNO , a.ACTNAME , a.ACTSDATE , a.ACTCITY , concat( 'M', a.ACTCITY) area , city.CITYNAME , city.LOCNAME , city.LOCPIC , concat(city.CITYNAME,city.LOCNAME) loc , a.VISION , a.DNTGOAL , a.RECRGOAL , a.DNTNOW , a.RECRNOW , (round(a.DNTNOW/a.DNTGOAL*100,2)) Frate , (round(a.RECRNOW/a.RECRGOAL*100,2)) Vrate from (select * from actv where actstat in (2,3,5) and actsdate >= curdate()) a join (select l.CITYNO , c.CITYNAME , l.LOCNAME , l.LOCPIC from city c join location l on c.CITYNO = l.CITYNO) city on a.ACTLOC = city.LOCNAME";
  $join_sql = "select a.ACTNO , a.ACTNAME , a.ACTSDATE , a.ACTCITY , concat( 'M', a.ACTCITY) area , city.CITYNAME , city.LOCNAME , city.LOCPIC , concat(city.CITYNAME,city.LOCNAME) loc , a.VISION , a.DNTGOAL , a.RECRGOAL , a.DNTNOW , a.RECRNOW , (round(a.DNTNOW/a.DNTGOAL*100,2)) Frate , (round(a.RECRNOW/a.RECRGOAL*100,2)) Vrate from (select * from actv where actstat in (2,3,5) and (ACTDLINE >= curdate()) and (actsdate >= curdate())) a join (select l.CITYNO , c.CITYNAME , l.LOCNAME , l.LOCPIC from city c join location l on c.CITYNO = l.CITYNO) city on a.ACTLOC = city.LOCNAME";
  $end_sql = "select a.ACTNO , a.ACTNAME , a.ACTSDATE , a.ACTCITY , concat( 'M', a.ACTCITY) area , city.CITYNAME , city.LOCNAME , city.LOCPIC , concat(city.CITYNAME,city.LOCNAME) loc , a.VISION , a.DNTGOAL , a.RECRGOAL , a.DNTNOW , a.RECRNOW , (round(a.DNTNOW/a.DNTGOAL*100,2)) Frate , (round(a.RECRNOW/a.RECRGOAL*100,2)) Vrate from (select * from actv where actstat in (2,3,5) and (ACTDLINE < curdate()) and (actsdate >= curdate())) a join (select l.CITYNO , c.CITYNAME , l.LOCNAME , l.LOCPIC from city c join location l on c.CITYNO = l.CITYNO) city on a.ACTLOC = city.LOCNAME where ((round(a.DNTNOW/a.DNTGOAL*100,2)) >= 60) and ((round(a.RECRNOW/a.RECRGOAL*100,2)) >= 60)";
  $recent3_sql = "select a.ACTNO , a.ACTNAME , a.ACTSDATE , a.ACTCITY , concat( 'M', a.ACTCITY) area , city.CITYNAME , city.LOCNAME , city.LOCPIC , concat(city.CITYNAME,city.LOCNAME) loc , a.VISION , a.DNTGOAL , a.RECRGOAL , a.DNTNOW , a.RECRNOW , (round(a.DNTNOW/a.DNTGOAL*100,2)) Frate , (round(a.RECRNOW/a.RECRGOAL*100,2)) Vrate from (select * from actv where actstat in (2,3,5) and actsdate >= curdate()) a join (select l.CITYNO , c.CITYNAME , l.LOCNAME , l.LOCPIC from city c join location l on c.CITYNO = l.CITYNO) city on a.ACTLOC = city.LOCNAME order by a.ACTSDATE desc limit 3";

  $actAll = $pdo->prepare($all_sql);
  $actAll->execute(); //????????????

  $actJoin = $pdo->prepare($join_sql);
  $actJoin->execute(); //?????????

  $actEnd = $pdo->prepare($end_sql);
  $actEnd->execute(); //????????????????????????

  $recent3 = $pdo->prepare($recent3_sql);
  $recent3->execute(); //????????????


  if( $actAll->rowCount() == 0 ){
    echo "{}";
  }else{
    $actAllRow = $actAll->fetchAll(PDO::FETCH_ASSOC);
    $actJoinRow = $actJoin->fetchAll(PDO::FETCH_ASSOC);
    $actEndRow = $actEnd->fetchAll(PDO::FETCH_ASSOC);
    $recent3Row = $recent3->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode([$actAllRow,$actJoinRow,$actEndRow,$recent3Row]);
  }	

}catch(PDOException $e){
  echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>