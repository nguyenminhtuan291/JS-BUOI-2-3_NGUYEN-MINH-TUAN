document.getElementById('trungbinh').onclick = function() {
  let realNumber1 = +document.getElementById("realNumber1").value ;
  let realNumber2 = +document.getElementById("realNumber2").value ;
  let realNumber3 = +document.getElementById("realNumber3").value ;
  let realNumber4 = +document.getElementById("realNumber4").value ;
  let realNumber5 = +document.getElementById("realNumber5").value ;

  let result = (realNumber1 + realNumber2 + realNumber3 + realNumber4 + realNumber5) / 5 ;

  document.getElementById("result-wrapper").style.display = "block" ;
  document.getElementById("result").innerHTML = "Tổng trung bình của 5 số thực = " + result }