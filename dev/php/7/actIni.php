<?php
try{
  require_once("../../connect_ced102g2.php");
  $mbr_info_sql = "select MBRNO , MBRPIC , MBRNAME , MBRBIO from mbr";
  $f_sql = "select f.MBRNO , f.fnum , f.ftotal , m.MBRNO , m.MBRPIC , m.MBRNAME , m.MBRBIO from (select MBRNO , count(*) fnum , sum(amount) ftotal from fundra group by MBRNO order by ftotal desc) f join mbr m on (m.MBRNO = f.MBRNO);";
//   $f_sql = "select MBRNO , count(*) fnum , sum(amount) ftotal from fundra group by MBRNO order by ftotal desc limit 5";
  $j_sql = "select j.MBRNO , j.jnum , m.MBRNO , m.MBRPIC , m.MBRNAME , m.MBRBIO from (select MBRNO , count(*) jnum from actvap group by MBRNO order by jnum desc) j join mbr m on (m.MBRNO = j.MBRNO)";
//   $j_sql = "select MBRNO , count(*) jnum from actvap group by MBRNO order by jnum desc limit 5";

  $i_sql = "select MBRNO , count(*) inum from actv group by MBRNO";

  $mbr_info = $pdo->prepare($mbr_info_sql);
  $mbr_info->execute(); //會員資訊

  $f = $pdo->prepare($f_sql);
  $f->execute(); //募款累計金額及次數

  $j = $pdo->prepare($j_sql);
  $j->execute(); //活動參與次數

  $i = $pdo->prepare($i_sql);
  $i->execute(); //發起活動次數


  if( $mbr_info->rowCount() == 0 ){
    echo "{}";
  }else{
    $mRow = $mbr_info->fetchAll(PDO::FETCH_ASSOC);
    $fRow = $f->fetchAll(PDO::FETCH_ASSOC);
    $jRow = $j->fetchAll(PDO::FETCH_ASSOC);
    $iRow = $i->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode([$mRow,$fRow,$jRow,$iRow]);
  }	

}catch(PDOException $e){
  echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>