function calctip(){

	var amount = document.getElementById('amount').value;
	var percentage = document.getElementById('percen').value;
	//console.log(typeof percentage);
	if( amount !== '' && percentage !== ''){
		var tip = (amount * (percentage/100)).toFixed(2);
		console.log(amount);
		
		var total = parseInt(amount) + tip;

		document.getElementById('tip').value = tip;
		document.getElementById('total').value = total;
	}

}