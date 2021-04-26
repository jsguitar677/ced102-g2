<?php
try{
    require_once("../../connect_ced102g2.php");
    //編號 a.ACTNO		文章a.ACTCON	活動圖  a.ACTPIC1,ACTPIC2, ACTPIC3 a.AFTERACT
    //活動日期b.ACTSDATE	活動名稱b.ACTNAME	活動地點 b.ACTLOC  b.ACTV

    $sql = "select a.ACTNO, a.RESULT, a.ACTPIC1, a.ACTPIC2, a.ACTPIC3, b.ACTSDATE, b.ACTNAME, b.ACTLOC   from afteract a join actv b on a.actno = b.actno";
    $afterAct = $pdo->query($sql);

    if($afterAct->rowCount() == 0){
        echo "{}";
    }else{
        $afterActRow = $afterAct->fetchAll(PDO::FETCH_ASSOC);
        // print_r($afterActRow); 注意: 下方echo 亦會將此行print_r的值一併送至js，會造成取用JS物件時錯誤，測試後記得comment掉
        echo json_encode($afterActRow);
    }

}catch(PDOException $e){
    echo "error",$e->getMessage(),"****line",$e->getLine(),"<br>";
}

?>