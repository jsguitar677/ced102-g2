<?php
try{
    // require_once("connect.php");
  require_once("../../connect_ced102g2.php");

    $Fundra=" SELECT a.ACTNO, b.ACTNAME, a.FUNDDATE, a.FUNDSN, a.AMOUNT 
              FROM fundra a join actv b on a.actno = b.actno
              WHERE a.MBRNO = :MBRNO";

    $Actvap=" SELECT a.ACTNO , b.ACTNAME , b.ACTSDATE
              FROM actvap a join actv b on a.actno = b.actno
              WHERE a.MBRNO = :MBRNO";

    $memberData = $pdo->prepare($Fundra);
    $memberData->bindValue(":MBRNO", $_POST["MBRNO"]);
    $memberData->execute();

    $memberData2 = $pdo->prepare($Actvap);
    $memberData2->bindValue(":MBRNO", $_POST["MBRNO"]);
    $memberData2->execute();
    
    // 資料庫取回的資料
    $memRow = $memberData->fetchAll(PDO::FETCH_ASSOC);
    $memRow2 = $memberData2->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode([$memRow,$memRow2]); 


}catch(PDOException $e){
    echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>

