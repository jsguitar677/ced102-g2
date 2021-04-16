<?php 
try {
	require_once("./connectBooks.php");
	$sql = "select * from orders";
	$orders = $pdo->query($sql);  //執行指令
} catch (PDOException $e) {
	// echo "系統忙碌, 請通知系統維護人員~";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";	
}
?>   
<!DOCTYPE html>
<html lang="zn-Hant">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Backend</title>
    <!-- icon -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.css">
    <!-- 打包連接的css -->
    <link rel="stylesheet" href="./css/pages/orderMGT.css">
    <!-- 自己開watch sass連接的css，如果不用請把下面註解，上面打開-->
    <!-- <link rel="stylesheet" href="./css/orderMGT.css"> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/list.js/2.3.1/list.min.js'></script>
    <script src="./js/common_backend.js"></script>
</head>
<body>
    @@include('./layout/backend_header.html')
    <div class="bg">
        <main id="backend">
            <aside class="tags">
                <div class="t1 tag"><a href="./admMGT.html"><div class="circle"></div>管理員管理</a></div>
                <div class="t2 tag"><a href="./memMGT.html"><div class="circle"></div>會員管理</a></div>
                <div class="t3 tag"><a href="./prodMGT.html"><div class="circle"></div>商品管理</a></div>
                <div class="t4 tag current"><a><div class="circle"></div>訂單管理</a></div>
                <div class="t5 tag"><a href="./rptMGT.html"><div class="circle"></div>檢舉留言管理</a></div>
                <div class="t6 tag"><a href="./actMGT.html"><div class="circle"></div>活動審核管理</a></div>
                <div class="t7 tag"><a href="./act_histMGT.html"><div class="circle"></div>活動花絮管理</a></div>
                <span class="text">© 淨下塑湲 All Rights Reserved. <br>淨下塑湲版權所有不得轉載</span>
            </aside>
            <div class="content">
                <section id="c4">
                    <h1>訂單管理</h1>
                    <div class="flex">
                        <div class="search"><i class="fas fa-search"></i><input class="search" type="text" name="search" placeholder='請輸入編號或名稱'></div>
                    </div>
                    <table>
                        <thead>
                       		
                            <tr>
                                <th>訂單編號</th>
                                <th>訂單日期</th>
                                <th>會員編號</th>
                                <th>會員姓名</th>
                                <th>訂單狀態</th>
                                <th>付款狀態</th>
                                <th>送貨狀態</th>
                                <th>出貨</th>
                                <th>查看訂單</th>
                            </tr>
                        </thead>
                        <tbody class="list">
                            <?php		
                            while($ordRow = $orders->fetch(PDO::FETCH_ASSOC)){ 
                            ?>
                            <tr>
                                <td><div class="no-block ord-num"><?=$ordRow["orderno"]?></div></td>
                                <td><?=$ordRow["orderdate"]?></td>
                                <td class="mem-num"><?=$ordRow["merno"]?></td>
                                <td class="mem-name"><?=$ordRow["mbrname"]?></td>
                                <td>處理中</td>
                                <td>已付款</td>
                                <td>備貨中</td>
                                <td>
                                    <label class="toggle-btn" for="shipment">
                                        <input type="checkbox" id="shipment" hidden>
                                        <span class="slider"></span>
                                    </label>
                                </td>
                                <td>
                                    <div class="view-icon"><i class="fas fa-paste"></i></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="alert-block alert-block-view">
                        <form id="ord-view" class="alert">
                            <div class="top">
                                <label class="left">訂單編號：</label><p><?=$ordRow["orderno"]?></p><br>
                                <label class="left">訂單日期：</label><p><?=$ordRow["orderdate"]?></p><br>
                                <label class="left">會員編號：</label><p><?=$ordRow["merno"]?></p><br>
                                <label class="left">會員姓名：</label><p><?=$ordRow["mbrname"]?></p><br>
                            </div>
                            <div class="middle1">
                                <table>
                                    <tr>
                                        <th>編號</th>
                                        <th>名稱</th>
                                        <th>單價</th>
                                        <th>數量</th>
                                        <th>客製圖片</th>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>環保手機殼</td>
                                        <td>NTD 1,697</td>
                                        <td>1</td>
                                        <td><div class="btn">下載</div></td>
                                    </tr>
                                </table>
                            </div>
                            <div class="middle2">
                                <label class="left">商品總價格：</label><p>NTD 1,697</p><br>
                                <label class="left">環保幣折抵：</label><p>NTD 20</p><br>
                                <label class="left">結帳總價：</label><p>NTD 1,677</p><br>
                            </div>
                            <div class="bottom">
                                <label class="left">收貨人：</label><p>Herry Wang</p><br>
                                <label class="left">收貨地址：</label><p>32001桃園市中壢區中大路300號</p><br>
                                <label class="left">收貨人電話：</label><p>0932333333</p><br>
                            </div>
                            <div class="cancel-btn btn">關閉</div>
                        </form>
                    </div>
                    <?php 
                    }
                    ?>	
                </section>
            </div>
        </main>
    </div>
</body>
</html>