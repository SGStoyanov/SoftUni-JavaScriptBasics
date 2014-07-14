var date = new Date()
//console.log(date.getHours() + ":" + date.getMinutes());
var strDate = date.toTimeString();
var hoursMinutes = strDate.substring(0,5);
console.log(hoursMinutes);