function computeloan(){
	var amount = document.getElementById('amount').value;
	var rate = document.getElementById('rate').value;
	var months = document.getElementById('months').value;

	var interest = (amount * rate * 0.01) / months;
	var payment = ((amount/months) + interest).toFixed(2);
	var show = document.getElementById('result').innerHTML="Months Payment = $" + payment;
	console.log(payment); 
}