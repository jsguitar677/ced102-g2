<?php
include("getMemInfoFIX.php");
try{
  require_once("../../connect_ced102g2.php");

    $MBRDATA=" SELECT ORDERDATE ,SHIPSTAT ,ORDERSTATUS, PROPRICETOTAL,DISCOUNT, ORDERTOAL FROM orders WHERE MBRNO = :MBRNO AND ORDERNO = :ORDERNO";
    //ORDERDATE 訂單日期 // SHIPSTAT 送貨狀態 // ORDERSTATUS 訂單狀態 //PROPRICETOTAL 商品的金額 //DISCOUNT 折扣環保幣金額 // ORDERTOAL 折扣後總價

    $MBRDATA2=" SELECT a.ITEMOIC, a.ITEMQUN, a.PRICE, b.PRODNAME FROM  `ORDER ITEM` a join  PROD b ON a.PRODNO= b.PRODNO WHERE ORDERNO = :ORDERNO ";
    // ITEMOIC 商品圖片 //ITEMQUN 數量 //PRICE 商品單價 //商品名稱


    $memberData = $pdo->prepare($MBRDATA);
    $memberData->bindValue(":MBRNO", $_SESSION["MBRNO"]);
    $memberData->bindValue(":ORDERNO", $_POST["ORDERNO"]);
    $memberData->execute();

    $memberData2 = $pdo->prepare($MBRDATA2);
    $memberData2->bindValue(":ORDERNO", $_POST["ORDERNO"]);
    $memberData2->execute();



    // 資料庫取回的資料
    $memRow = $memberData->fetchAll(PDO::FETCH_ASSOC);

    $memRow2 = $memberData2->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode([$memRow,$memRow2]); 


}catch(PDOException $e){
    echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>