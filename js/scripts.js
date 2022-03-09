var jobs = [
    'Garbage Collector',
    'Amazon Driver',
    'Yard Guy',
    'Landlord',
    'Roofer',
    'Ticket Inspector',
    'Papparazo',
    'Chick-fil-A Employee',
    'Bellhop',
    'Bank Social Media Manager',
    'Crime Scene Cleanup',
    'Corporate Lawyer',
    'Monstanto (any job)',
    'Subtitle Translator',
    'Uber Driver',
    'Telemarketer',
    'Solider',
    'Cleaner',
    'Miner',
    'Promotional Mascot',
    'Traffic director',
    'Roadkill collector',
    'Podiatrist',
    'Fisherman'

]
function newJob() {
    var randomNumber = Math.floor(Math.random() * 24);
    document.getElementById('jobDisplay').innerHTML = jobs[randomNumber];
}


function search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
      
    }
  }
}

