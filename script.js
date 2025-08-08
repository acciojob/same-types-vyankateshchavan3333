function daysOfAYear(year){
	if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
{
		return 366;
	}
	else{
		return 365
	}
}
console.log(daysOfAYear(2000))