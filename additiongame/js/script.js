var number1 = Math.floor((Math.random()*10)+1);
var number2 = Math.floor((Math.random()*10)+1);

document.getElementById('number1').innerHTML = number1;
document.getElementById('number2').innerHTML = number2;

var answer = number1 + number2;

var checkanswer = document.querySelector('input[type=text]');
var value = checkanswer.value;
var btn = document.querySelector('input[type=button][value=check]');

btn.onclick = function(){
	value = checkanswer.value;
	if(value == answer){
		alert('El numero es Correcto!!!! '+answer);
	}else{
		alert('El numero es Incorrecto!!!! '+answer);
	}

	number1 = Math.floor((Math.random()*10)+1);
	number2 = Math.floor((Math.random()*10)+1);

	document.getElementById('number1').innerHTML = number1;
	document.getElementById('number2').innerHTML = number2;

	answer = number1 + number2;

	document.querySelector('input[type=text]').value ='';
	// console.log(value);
}