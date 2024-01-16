function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var remainingHours = 14-now.getHours();
    var remainingMinutes = 55-now.getMinutes();
    var minutesPast = minutes-55
    var veryEarlyMinutesPast = minutes-50
    var earlyMinutesPast = minutes-53
    document.getElementById('clock').textContent = hours + ":" + minutes + ":" + seconds
    if (minutes<50){
    document.getElementById('veryEarlyTimeLeft').textContent = 50-minutes + " minutes left if you have a 5 minute pass"}
    else{  document.getElementById('veryEarlyTimeLeft').textContent = "The lesson ended " + veryEarlyMinutesPast + " minutes ago if you have a 5 minute pass"}
  if (minutes<55){
    document.getElementById('timeLeft').textContent = 55-minutes + " minutes left until the end of the lesson"}
  
    else {
      document.getElementById('timeLeft').textContent = "The lesson ended " + minutesPast + " minutes ago"}
    if (hours<15){
    document.getElementById('timeUntilEnd').textContent = 
    remainingHours + ":" + remainingMinutes + " until the end of the day";}
    else{
      document.getElementById('timeUntilEnd').textContent = "The day ended" + remainingHours + " hours ago";}
  }
  
  updateClock();
  setInterval(updateClock, 1000);