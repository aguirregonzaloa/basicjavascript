var dayuser = document.getElementById('day');
var monthuser = document.getElementById('month');
var yearuser = document.getElementById('year');

var submitButton = document.getElementById('submit-button');

submitButton.addEventListener("click", function(evt){
	var message = document.getElementById('message');
	//parseInt convert from string type to integer
	var Day = (parseInt(dayuser.value));
	var Month = (parseInt(monthuser.value)-1);
	var Year = (parseInt(yearuser.value));
	var nameMonth = ["January", "February","March","April","May","June","July"
	, "August","September","October","November", "Decemember"];
	var nameDay =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

	var Dateday = new Date(Year,Month,Day);
	var DayIs = nameDay[Dateday.getDay()];
	var MonthIs = nameMonth[Month];

	if(DayIs === undefined || MonthIs === undefined ){
		message.innerText =" ";

		setTimeout(()=>{
			message.innerText = "Please enter a valid date";
		},500);

	}else{
		message.innerText = DayIs + ", "+ MonthIs + " "+ Day + " " + Year ;
	}
	
});
