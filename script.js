// VARIABLE REPRESENTS CURRENT TIME AND LOGS EXACT TIME FORMAT (D,M,D,Y,T)
let currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(currentTime);

function displayCurrentTime() {
  document.getElementById("currentDay").innerHTML = currentTime;
}
displayCurrentTime();

// $(document).ready(function () {
//   currentTime;
// });
