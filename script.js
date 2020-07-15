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
  $(".save-btn").on("click", function () {
    // THIS WILL GRAB THE CURRENT HOUR
    let time = $(this).parent().attr("id");
    console.log(time);

    // THIS WILL GRAB THE INPUT VALUE
    let input = $(this).parent().siblings(".info").val();
    console.log(input);

    // STORES DATA FROM INPUT
    localStorage.setItem(time, input);
    console.log(time, input);

    localStorage.getItem(".save-btn");
  });
});
