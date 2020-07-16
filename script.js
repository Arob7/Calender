// VARIABLE REPRESENTS CURRENT TIME AND LOGS EXACT TIME FORMAT (D,M,D,Y,T)
let currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(currentTime);

// DISPLAYS CURRENT TIME ON PAGE FROM PARAGRAH ID
function displayCurrentTime() {
  document.getElementById("currentDay").innerHTML = currentTime;
}
displayCurrentTime();

//
$(document).ready(function () {
  $("#hour9 + .info").val(localStorage.getItem("hour9"));
  $("#hour10 .info").val(localStorage.getItem("hour10"));
  $("#hour11 .info").val(localStorage.getItem("hour11"));
  $("#hour12 .info").val(localStorage.getItem("hour12"));
  $("#hour1 .info").val(localStorage.getItem("hour1"));
  $("#hour2 .info").val(localStorage.getItem("hour2"));
  $("#hour3 .info").val(localStorage.getItem("hour3"));
  $("#hour4 .info").val(localStorage.getItem("hour4"));
  $("#hour5 .info").val(localStorage.getItem("hour5"));

  $(".save-btn").on("click", function () {
    // THIS WILL GRAB THE CURRENT HOUR
    let time = $(this).parent().attr("id");

    // THIS WILL GRAB THE INPUT VALUE
    let input = $(this).parent().siblings(".info").val();
    console.log(time);
    console.log(input);

    // SHOULD STORE DATA FROM INPUT
    localStorage.setItem(time, input);

    // var hourData = localStorage.getItem(time);

    // console.log("Hour data: " + hourData);
  });
});
