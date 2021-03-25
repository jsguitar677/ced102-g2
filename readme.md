打摳說明
起手式:

1.將DEV裡的index.html另存新檔，一樣存在dev，檔名取自己頁面的名稱
這個頁面就已經包含HEADER FOOTER 以及 login，把內容寫進會員登入還有footer樣板中間即可
(可以看一下我做的act_hist.html)

2.CSS的部分請在dev裡的SASS資料夾內新增自己的SASS檔，然後import進all.scss檔案就可以直接將自己的CSS寫進自己負責的頁面
不用另外引入(可以打開all.scss看一下我寫的路徑(第一行)

3.所有開發皆在DEV內進行，若要使用live server功能，終端機內輸入gulp u之後，
就可以在dist資料夾內看到你自己的HTML檔案，點右鍵live server執行

4.圖片目前有點小問題，dev裡.html的img src標籤，或是css 的background image，這兩種圖片使用方式的路徑都要從"dist"裡的img目錄取得 也就是說dev的圖片要從dist拿，很奇怪，我會再想辦法解決，然後圖片的話，在dev裡的img資料夾裡，再建一個以你的頁面當作檔名的圖片專用資料夾，把要用的圖片放進去後在終端機執行gulp g，dist裡的img資料夾就會有你在dev/img放的圖片，目前先這樣做!

5.為了減少衝突，大家在命名class或是id的時候可以把自己頁面的縮寫加進去，拿我的葉面當例子就是class = "header" --> ah_header，主要防止自己頁面的css跟別人的吃到同一個class 或 id，因為最後會合成一大支CSS檔案(all.css)

6.已發現問題，若無法執行npm u的話，請先執行node -v查看版本是否為14.16.0，不是的話可以砍掉然後去官網下載，確定為14.16.0版本後把package-lock.json還有node_modules的資料夾刪除，然後在終端機執行 npm cache clear --force，重開編輯器，在終端機執行npm install

最後~
PULL 跟 PUSH 都是要用dev分支!!!!<br>
PULL 跟 PUSH 都是要用dev分支!!!!<br>
PULL 跟 PUSH 都是要用dev分支!!!!<br>


有問題直接line我~




