<?php
try{
  require_once("../../connect_ced102g2.php");
  $sql = "select o.orderno ,o.orderdate, o.mbrno, m.mbrname, o.CONSIG,o.CONSIGADD,o.CONSIGTEL,o.POSTCODE  from orders o join mbr m on o. mbrno= m. mbrno ;";
//   $delete = "delete from adm where ADMNO =:admno";
//   $add = "insert into adm(ADMNAME, ADMACC, ADMPSW) values (:admname,:admacc,:admpws)";
  $ord = $pdo->prepare($sql);
  $ord->execute();

  if( $ord->rowCount() == 0 ){
    echo "{}";
  }else{
    $ordRow = $ord->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($ordRow);
  }	
  
}catch(PDOException $e){
    // echo "系統忙碌, 請通知系統維護人員~";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";	
  }

?>