<?php
try{
  require_once("../../connect_ced102g2.php");
  $sql = "select * from prod";
//   $delete = "delete from adm where ADMNO =:admno";
//   $add = "insert into adm(ADMNAME, ADMACC, ADMPSW) values (:admname,:admacc,:admpws)";
  $getAllProds = $pdo->prepare($sql);
  $getAllProds->execute();

  if( $getAllProds->rowCount() == 0 ){
    echo "{}";
  }else{
    $getAllProds_row = $getAllProds->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($getAllProds_row);
  }	

}catch(PDOException $e){
  echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>