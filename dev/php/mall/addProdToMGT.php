<?php
try{
  require_once("../../connect_ced102g2.php");
  $Sql_addProd = "INSERT INTO `prod`(`PRODCLNO`, `PRODNAME`, `PRODPRICE`, `PRODBIO`, `PRODPIC_1`, `PRODPIC_2`, `PRODPIC_3`, `PRODPIC_4`, `PRODPIC_5`, `PRODSTAT`, `PRODCA`, `LISTEDDATE`)
  values( :PRODCLNO, :PRODNAME, :PRODPRICE, :PRODBIO, :PRODPIC_1, :PRODPIC_2, :PRODPIC_3, :PRODPIC_4, :PRODPIC_5, 1 , :PRODCA, curdate() )";

  //$addProd = $pdo->query($Sql_addProd);
  // $_POST["PRODCLNO"] = "1";
  // $_POST["PRODNAME"] ="3";
  // $_POST["PRODPRICE"] ="1322";
  // $_POST["PRODBIO"] ="2323esrdhf"; 
  // $_POST["PRODPIC_1"] ="1";
  // $_POST["PRODPIC_2"] ="1";
  // $_POST["PRODPIC_3"]="1";
  // $_POST["PRODPIC_4"]="1";
  // $_POST["PRODPIC_5"]="1";
  // $_POST["PRODCA"] = "0";

  $addProd = $pdo->prepare($Sql_addProd);
  $addProd->bindValue(":PRODCLNO",$_POST["PRODCLNO"]);
  $addProd->bindValue(":PRODNAME",$_POST["PRODNAME"]);
  $addProd->bindValue(":PRODPRICE",$_POST["PRODPRICE"]);
  $addProd->bindValue(":PRODBIO",$_POST["PRODBIO"]);
  $addProd->bindValue(":PRODPIC_1",$_POST["PRODPIC_1"]);
  $addProd->bindValue(":PRODPIC_2",$_POST["PRODPIC_2"]);
  $addProd->bindValue(":PRODPIC_3",$_POST["PRODPIC_3"]);
  $addProd->bindValue(":PRODPIC_4",$_POST["PRODPIC_4"]);
  $addProd->bindValue(":PRODPIC_5",$_POST["PRODPIC_5"]);
  $addProd->bindValue(":PRODCA",$_POST["PRODCA"]);
  $addProd->execute();

  echo "yes";

}catch(PDOException $e){
  echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>