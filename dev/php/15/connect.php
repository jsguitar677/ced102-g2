<?php
    $dbname = '淨下塑源';
    $user = 'root';
    $password = 'arowana1508';
    $dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charset=utf8";
    $options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION , //出錯要提醒
                     PDO::ATTR_CASE => PDO::CASE_NATURAL); //欄位照MySQL原本大小寫
    $pdo = new PDO($dsn,$user,$password,$options);
?>

