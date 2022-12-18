document.getElementById('total').onclick = function() {
  let dayWork = +document.getElementById("dayWork").value ;
  let salary = +document.getElementById("salary").value ;

  let result = dayWork * salary ;

  document.getElementById("result-wrapper").style.display = "block" ;
  document.getElementById("result").innerHTML = "VND : " + result }