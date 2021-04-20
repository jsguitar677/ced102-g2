<?php
try{
  require_once("./connectBooks.php");

  $sql = "select MBRNAME, MBREXP, MBRMAIL, MBRBIRTH, MBRCOIN, MBRPHONE, MBREXP, MBRSTAT from mbr ";
  //不用從前端送資料到Server>使用query即可，使用prepare()也不知道要bindValue什麼
  $member = $pdo->query($sql);
  if( $member->rowCount() == 0 ){ 
    echo "{}";//傳回看起來空空的物件之JSON字串
  }else{ //找得到
    $memRows = $member->fetchAll(PDO::FETCH_ASSOC);
    $result = array();
    foreach($memRows as $i => $memRow){
      foreach($memRow as $data){
        $result["$i"] = array("MBRNAME"=>$memRows["$i"]["MBRNAME"], "MBREXP"=>$memRows["$i"]["MBREXP"], "MBRMAIL"=>$memRows["$i"]["MBRMAIL"], "MBRBIRTH"=>$memRows["$i"]["MBRBIRTH"], "mbrcoin"=>$memRows["$i"]["mbrcoin"], "MBRPHONE"=>$memRows["$i"]["MBRPHONE"], "MBREXP"=>$memRows["$i"]["MBREXP"], "MBRSTAT"=>$memRows["$i"]["MBRSTAT"]);
      }
    }
    echo json_encode($result);
   }   //   $result = ["MBRNAME"=>$memRow["MBRNAME"], "MBREXP"=>$memRow["MBREXP"], "MBRMAIL"=>$memRow["MBRMAIL"], "MBRBIRTH"=>$memRow["MBRBIRTH"], "MBRCOIN"=>$memRow["MBRCOIN"], "MBRPHONE"=>$memRow["MBRPHONE"], "MBREXP"=>$memRow["MBREXP"], "MBRSTAT"=>$memRow["MBRSTAT"]];
}catch(PDOException $e){
    echo $e->getMessage();
}
?>