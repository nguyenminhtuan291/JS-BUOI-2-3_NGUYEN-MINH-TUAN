document.getElementById('total').onclick = function() {
  let Chuso = +document.getElementById("Chuso").value ;
  let result = 0;

  result = Chuso % 10;

  Chuso = Math.floor(Chuso / 10);

  result += Chuso;

 
  document.getElementById("result-wrapper").style.display = "block" ;
  document.getElementById("result").innerHTML = "Tổng 2 ký số  = " + result; 
}