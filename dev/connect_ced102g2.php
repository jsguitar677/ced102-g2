<?php
    $dbname = 'tebamefe_ced102g2';
    $user = 'tibamefe_since2021';
    $password = 'vwRBSb.j&K#E';
    // $dbname = '淨下溯元';
    // $user = 'root';
    // $password = '11111';
    $dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charset=utf8";
    $options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION , //出錯要提醒
                    PDO::ATTR_CASE => PDO::CASE_NATURAL); //欄位照MySQL原本大小寫
    $pdo = new PDO($dsn,$user,$password,$options);
?>
