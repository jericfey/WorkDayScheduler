$("document").ready(function () {
  // $(`#${i}`).siblings('textarea).val(localstorage.get(i))

  //used moment.js to format day of week and today's date and append to id="currentDay"
  let NowMoment = moment();
  let eDisplayMoment = document.getElementById("current-day");
  eDisplayMoment.innerHTML = NowMoment.format("[Today is: ] dddd M-D-YYYY");

  //VARIABLES
  let currentHour = NowMoment.format("H");
  console.log("currentHour: ", currentHour);

  //   let pastHours = [];
  //   let futureHours = [];

  //loop through every hour in the day and build an input for it
  //   hours.forEach(buildPlanner);

  $(".save-button").on("click", function () {
    let time = $(this).attr("id");
    // console.log(time);

    let task = $(this).siblings("textarea").val();
    console.log(time, task);
    localStorage.setItem(time, task);
  });
});
