let calculation = localStorage.getItem("calculation") || "";

function updateCalculation(value) {
  calculation += value;
  displayCalculation();
  // console.log(calculation);
  saveCalculation();
}

function saveCalculation() {
  localStorage.setItem("calculation", calculation);
}

function displayCalculation() {
  document.querySelector(".display-button").innerHTML = calculation;
}
