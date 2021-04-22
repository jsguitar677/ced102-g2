<?php
    session_start();
    try{
        require_once('../../connect_ced102g2.php');
        $sql = "select ACTNAME from actv where ACTNAME=:ACTNAME";
        $selectedActv = $pdo->prepare($sql);
        $selectedActv -> bindValue(":ACTNAME",$_GET["ACTNAME"]);
        $selectedActv -> execute();
        if( $selectedActv ->rowCount()==0){ //查無此人
            echo "{}";
        }else{ //登入成功
          //自資料庫中取回資料
            $selectedActvRow = $selectedActv->fetch(PDO::FETCH_ASSOC);
          //登入成功將所需儲存的狀態值存入session中
            $_SESSION["ACTNAME"] = $selectedActvRow["ACTNAME"];
          //送出登入者的姓名資料
            $result = ["ACTNAME"=>$selectedActvRow["ACTNAME"]];
      
          echo json_encode($selectedActvRow); //輸出json
        }

    }catch(PDOException $e){
        $result = ["errMsg" => $e->getMessage()];
        echo json_encode($result);
}
?>