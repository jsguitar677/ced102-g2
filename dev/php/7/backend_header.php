<?php
session_start();
try{
    echo json_encode($_SESSION["admname"]);	

}catch(PDOException $e){
    echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>