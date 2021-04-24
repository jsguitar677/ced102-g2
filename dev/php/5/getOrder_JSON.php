<?php
try{
  require_once("../../connect_ced102g2.php");
  $sql = "select o.orderno ,o.orderdate, o.mbrno,o.orderstatus,o.paystat,o.shipstat, m.mbrname, o.CONSIG,o.CONSIGADD,o.CONSIGTEL,o.ordertoal,o.discount,o.ordertoal-discount as propricttotal  from orders o join mbr m on o. mbrno= m. mbrno order by orderno asc;";
  $sql2= "select i.odrsn,i.orderno ,p.prodname, i.price, i.itemqun, i.itemoic from `order item` i join prod p on i. prodno= p. prodno";
//   $add = "insert into adm(ADMNAME, ADMACC, ADMPSW) values (:admname,:admacc,:admpws)";
  $ord = $pdo->prepare($sql);
  $ord->execute();

  $ord2 = $pdo->prepare($sql2);
  $ord2->execute();

  if( $ord->rowCount() == 0 ){
    echo "{}";
  }else{
    $ordRow = $ord->fetchAll(PDO::FETCH_ASSOC);
    $ordRow2 = $ord2->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode([$ordRow,$ordRow2]);
  }	
  
}catch(PDOException $e){
    // echo "系統忙碌, 請通知系統維護人員~";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";	
  }

?>