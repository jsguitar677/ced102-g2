<?php
    include("../../connect_ced102g2.php");
    $sql ='SELECT * FROM `mbrno`';
    $result = $pdo->query($sql);
    $result->execute();
    $data = $result->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
?>