<?php
try{
    require_once("../../connect_ced102.php");
    $sql = "select a.actno, a.actpic1, a.actpic2, a.actpic3, a.action , b.actsdate, b.actname from afteract a join actv b on a.actno = b.actno";
    $add = "insert into afteract(actpic1, actpic2, actpic3, action) values (:actpic1, :actpic2, :actpic3, :action)";
    $afterAct = $pdo->query($sql);

    //將所有必填欄位填完，即可新增該筆活動資料
    if(isset($_GET["actpic1"]) and $_GET["actpic2"] and $_GET["actpic3"] and $_GET["action"]){
        $afterAct_add = $pdo ->prepare($add);
        $afterAct_add->bindValue(":actpic1",$_GET["actpic1"]);
        $afterAct_add->bindValue(":actpic2",$_GET["actpic2"]);
        $afterAct_add->bindValue(":actpic3",$_GET["actpic3"]);
        $afterAct_add->bindValue(":action",$_GET["action"]);
        $afterAct_add->execute();
    }else{

    }
    if($afterAct->rowCount() == 0){
        echo "{}";
    }else{
        $afterActRow = $afterAct->fetch(PDO::FETCH_ASSOC);
        echo json_encode($afterActRow);
    }

}catch(PDOException $e){
    echo "error",$e->getMessage(),"****line",$e->getLine(),"<br>";
}

?>