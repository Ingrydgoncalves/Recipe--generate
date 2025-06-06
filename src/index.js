function generaterecipe (event) {
    event.preventDefault ();
    let recipeDiv = document.querySelector("#recipe");

    new Typewriter("#recipe", {
        strings: ["Food is my way of expressing love, culture, and passion."],
        autoStart: true,
        delay:1,
        cursor: "",
      });
    }
let putingredienteform = document.querySelector("#putingredientes");
putingredienteform.addEventListener("submit", generaterecipe);