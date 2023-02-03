var jobs = [
  "Garbage Collector",
  "Amazon Driver",
  "Yard Guy",
  "Landlord",
  "Roofer",
  "Ticket Inspector",
  "Papparazo",
  "Chick-fil-A Employee",
  "Bellhop",
  "Bank Social Media Manager",
  "Crime Scene Cleanup",
  "Corporate Lawyer",
  "Any Job at Monsanto",
  "Subtitle Translator",
  "Uber Driver",
  "Telemarketer",
  "Soldier",
  "Cleaner",
  "Miner",
  "Promotional Mascot",
  "Traffic Director",
  "Roadkill Collector",
  "Podiatrist",
  "Fisherman",
  "Start-up CEO",
  "Sherpa",
  "'It's A Small World' Ride Operator",
  "Spam Copywriter",
  "Rat Catcher",
  "Adult Video Store Clerk",
  "Walking Menu",
  "Shopping Cart Valet",
  "Domino Setter-Upper",
  "Driver's Ed Instructor",
  "Civil War Reenactor",
  "Hazardous Materials Cleanup",
  "NYC Taxi Driver",
  "Exorcist",
  "Cosmetics Tester",
  "Crocodile Hunter",
  "Cellphone Salesperson",
  "Bathroom Attendant",
];

// Insert list into results

for (let i = 0; i < jobs.length; i++) {
  let job = document.createElement("li");
  job.innerText = jobs[i];
  document.getElementById("myUL").appendChild(job);
}

// Search and filter

$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myUL li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
