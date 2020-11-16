$("document").ready(function () {
  //used moment.js to format day of week and today's date and append to id="currentDay"
  let NowMoment = moment();
  let eDisplayMoment = document.getElementById("current-day");
  eDisplayMoment.innerHTML = NowMoment.format("[Today is: ] dddd M-D-YYYY");

  //VARIABLES
  let currentHour = NowMoment.format("H");
  console.log("currentHour: ", currentHour);
  // let pastHours = [];
  // let futureHours = [];
});
