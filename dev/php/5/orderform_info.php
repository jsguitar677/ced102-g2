<?php
include("getMemInfoFIX.php");

session_start();
$_SESSION["mbrno"] = 1;
try{
  require_once("../../connect_ced102g2.php");
  $ini_ord_sql1 =  "select o.orderno ,o.orderdate, o.mbrno,o.orderstatus,o.paystat,o.cardno,o.shipstat, m.mbrname, o.CONSIG,o.CONSIGADD,o.CONSIGTEL,o.ordertoal,o.discount,o.ordertoal-discount as propricttotal  from orders o join mbr m on o. mbrno= m. mbrno order by orderno asc;";
  $ini_ord_sql2 ="select i.odrsn,i.orderno ,p.prodname, i.price, i.itemqun, i.itemoic from `order item` i join prod p on i. prodno= p. prodno";
  $ini_add_sql = "insert into `orders` ( `mbrno`, `orderdate`, `orderstatus`, `consig`, `consigadd` , `CONSIGTEL`, `cardno`, `paystat` , `shipstat` , `discount` , `propricetotal`,`ordertoal` ,`POSTCODE`) values ( 1, curdate() , 0 , :consig , :consigadd , :CONSIGTEL , :cardno , 3 , 0 , :discount , :propricttotal,:ordertoal,320)";

  // insert into `orders` ( `mbrno`, `orderdate`, `orderstatus`, `consig`, `consigadd` , `CONSIGTEL`, `cardno`, `paystat` , `shipstat` , `discount` , `propricetotal`,`ordertoal` ,`POSTCODE`) 
  // values ( 1, curdate() , 0 , :consig , :consigadd , :CONSIGTEL , :cardno , 3 , 0 , :discount , :propricttotal,:ordertoal,:POSTCODE)

  $ini_ord = $pdo->prepare($ini_ord_sql1);
  $ini_ord->execute(); 
  $ini_ord = $pdo->prepare($ini_ord_sql2);
  $ini_ord->execute(); 

  if( $ini_ord_sql1->rowCount() == 0 ){
    echo "{}";
  }elseif( $ini_ord_sql2->rowCount() == 0 ){
    echo "{}";
  }
  else{
    $iniLocRow = $ini_loc->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($iniLocRow);
  }	
  if(isset($_POST["orderno"])){
    $ini_add = $pdo->prepare($ini_add_sql);
    $ini_add->bindValue(":mbrno",$_SESSION["mbrno"]);
    $ini_add->bindValue(":consig",$_POST["consig"]);
    $ini_add->bindValue(":consigadd",$_POST["consigadd"]);
    $ini_add->bindValue(":CONSIGTEL",$_POST["CONSIGTEL"]);
    $ini_add->bindValue(":cardno",$_POST["cardno"]);
    $ini_add->bindValue(":POSTCODE",$_POST[":POSTCODE"]);
    $ini_add->bindValue(":discount",$_POST["discount"]);
    $ini_add->bindValue(":shipstat",$_POST["shipstat"]);
    $ini_add->bindValue(":ordertoal",$_POST["ordertoal"]);
    $ini_add->bindValue(":discountl",$_POST["discountl"]);
    $ini_add->bindValue(":propricttotal",$_POST["propricttotal"]);
    $ini_add->execute();
    // echo "新增成功<br>";

  }else{
      // echo"無提供，故無法新增<br>";
  }

}catch(PDOException $e){
  echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>