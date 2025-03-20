document.getElementById("visitors").innerHTML = visits;

const year_today = new Date();
var year = year_today.getFullYear();
document.getElementById("year_today").innerHTML = "Copyright &copy; BsCpeE 3-1 QR Scanner " + year;

import visitors from "./counts.txt";