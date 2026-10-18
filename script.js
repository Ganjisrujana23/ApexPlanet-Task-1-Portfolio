
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
// Log a message when the portfolio loads
console.log("Welcome to my personal portfolio!");
