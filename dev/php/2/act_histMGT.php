<?php
try{
    require_once("../../connect_ced102g2.php");
    //編號 a.ACTNO		文章a.ACTCON	活動圖  a.ACTPIC1,ACTPIC2, ACTPIC3 a.AFTERACT
    //活動日期b.ACTSDATE	活動名稱b.ACTNAME	活動地點 b.ACTLOC  b.ACTV

    $sql = "select a.ACTNO, a.RESULT, a.ACTPIC1, a.ACTPIC2, a.ACTPIC3, b.ACTSDATE, b.ACTNAME, b.ACTLOC   from afteract a join actv b on a.actno = b.actno";
    // $add = "insert into afteract(actpic1, actpic2, actpic3, action) values (:actpic1, :actpic2, :actpic3, :action)";
    $afterAct = $pdo->query($sql);

    //將所有必填欄位填完，即可新增該筆活動資料
    // if(isset($_GET["actpic1"]) and $_GET["actpic2"] and $_GET["actpic3"] and $_GET["action"]){
    //     $afterAct_add = $pdo ->prepare($add);
    //     $afterAct_add->bindValue(":actpic1",$_GET["actpic1"]);
    //     $afterAct_add->bindValue(":actpic2",$_GET["actpic2"]);
    //     $afterAct_add->bindValue(":actpic3",$_GET["actpic3"]);
    //     $afterAct_add->bindValue(":action",$_GET["action"]);
    //     $afterAct_add->execute();
    // }else{

    // }
    if($afterAct->rowCount() == 0){
        echo "{}";
    }else{
        $afterActRow = $afterAct->fetchAll(PDO::FETCH_ASSOC);
        // print_r($afterActRow);
        echo json_encode($afterActRow);
    }

}catch(PDOException $e){
    echo "error",$e->getMessage(),"****line",$e->getLine(),"<br>";
}

?>