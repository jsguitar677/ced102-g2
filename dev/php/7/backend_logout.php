<?php
session_start();
    try{
        $_SESSION["admno"] = '';
        $_SESSION["admname"] = '';
    }catch(PDOException $e){
        echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
    }
?>