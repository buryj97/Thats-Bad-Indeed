// Generator
document.getElementById("btnGenerate").addEventListener("click", newJob);

function newJob() {
  var randomNumber = Math.floor(Math.random() * jobs.length);
  document.getElementById("jobDisplay").innerHTML = jobs[randomNumber];
}
