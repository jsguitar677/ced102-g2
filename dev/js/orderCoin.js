var lastTotal = document.getElementById('lastTotal');
            $.ajax({
                url: 'php/5/postMemberInfo.php',
                type: 'POST',
                success: function (data) {
                    let result = JSON.parse(data);
                    let points = result.points;

                    let getPoint = document.getElementById("getPoint");
                    getPoint.innerHTML = points; //持有點數

                    let usePointShow = document.getElementsByName("usePointShow")[0]; // 給使用者看使用的點數Input
                    let usePoint = document.getElementsByName("usePoint")[0]; //傳送給後端的hiddenInput

                    var usePointV = usePointShow.value; //使用的點數
                    var leftPoints = points - usePointV;

                    let leftPointsInput = document.getElementsByName("leftPoints")[0];
                    leftPointsInput.value = leftPoints;

                    usePoint.value = usePointV;
                    // 使用點數：<input type="hidden" name="usePoint" value="0">

                    lastTotal.innerText = parseInt(newPri) - parseInt(usePointV);
                    $("[name='orderTotal']").val(lastTotal.innerText);
                    console.log('lastTotal.innerText--' + lastTotal.innerText)

                    usePointShow.addEventListener("change", function () {

                        document.getElementById('allTotal').innerText = newPri;
                        usePointV = parseInt(usePointShow.value);
                        let gamePoints = parseInt(gamePoint.innerHTML);
                        var theForm = document.getElementById("theForm");

                        if (usePointV > getPoints) {
                            Swal.fire({
                                position: 'center-center',
                                icon: 'warning',
                                title: '使用點數超過可用點數',
                                showConfirmButton: false,
                                timer: 1500
                            })

                            theForm.addEventListener("submit", function () {
                                return false;
                            }, false)
                        } else {
                            // 計算新的總金額
                            lastTotal.innerText = parseInt(newPri) - parseInt(usePointV);

                            // 計算剩餘的點數傳給後端做更新
                            leftPoints = points - usePointV;
                            leftPointsInput.value = leftPoints;

                            theForm.addEventListener("submit", function () {
                                return true;
                            }, false)
                        }

                        usePointShow.value = usePointV
                        usePoint.value = usePointV;

                        $("[name='orderTotal']").val(lastTotal.innerText);
                        console.log('lastTotal--' + lastTotal.innerText);
                    }, false)

                },

            });
