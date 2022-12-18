document.getElementById('change').onclick = function() {
  const number = 23500;
  let changeUsd = +document.getElementById("changeUsd").value ;
  let result = changeUsd * number ;
  document.getElementById("result-wrapper").style.display = "block" ;
  document.getElementById("result").innerHTML = "Số tiền đã quy đổi = " + new Intl.NumberFormat('vn-VN').format(result) +" VND" }