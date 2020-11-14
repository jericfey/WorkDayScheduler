$("document").ready(function () {
  function getDay() {
    let date = new Date();
    let weekDay = new Array(7);
    weekDay[0] = "Sunday";
    weekDay[1] = "Monday";
    weekDay[2] = "Tuesday";
    weekDay[3] = "Wednesday";
    weekDay[4] = "Thursday";
    weekDay[5] = "Friday";
    weekDay[6] = "Saturday";
    console.log(date);
    console.log(weekDay);

    let currentDay = weekDay[date.getDay()];
    $("#currentDay").text(currentDay);

    console.log(currentDay);
    // document.getElementById("currentDay").innerHTML;
  }
});
