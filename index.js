const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log(e.target.id);
    result.textContent += e.target.id;
  });
});

// Pour les button pas besoin de declarer de contantes si on a un id
// eval methode pour calculer tout ce qu'il a à l'intérieur

equal.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});

clear.addEventListener("click", () => {
  result.textContent = "";
});
