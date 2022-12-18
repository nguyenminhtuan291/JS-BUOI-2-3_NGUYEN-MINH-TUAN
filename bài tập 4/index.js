document.getElementById('calculate').onclick = function() {
  let long = +document.getElementById("long").value ;
  let width = +document.getElementById("width").value ;


  let result1 = long * width ;

  let result2 = (long + width) * 2;
  document.getElementById("result-wrapper").style.display = "block" ;
  document.getElementById("result1").innerHTML = "Diện tích HCN  :" + result1; 
  document.getElementById("result2").innerHTML = "Chu vi HCN  :" + result2 ;
}