<?php
try{
    // require_once("connect.php");
  require_once("../../connect_ced102g2.php");

    $sql = "INSERT INTO `mbr` (`MBRMAIL`, `MBRPSW`, `MBRNAME`, `MBRBIRTH`, `MBRPHONE`) VALUES ( ?,?,?,?,? )";

    $member = $pdo->prepare($sql);
    $member->bindValue(1, $_POST["logMemId"]);
    $member->bindValue(2, $_POST["logMemPsw"]);
    $member->bindValue(3, $_POST["logMemName"]);
    $member->bindValue(4, $_POST["BirthYear"]);
    $member->bindValue(5, $_POST["logMemMobileCheck"]);
    $member->execute();

    echo 1;


}catch(PDOException $e){
  echo "error :　";
  echo $e->getMessage();
  echo "errorLine :　";
  echo $e->getLine();
}
?>
