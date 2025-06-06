function generaterecipe (event) {
    event.preventDefault ();
    let recipediv = document.querySelector("#recipe");

    new Typewriter("#recipe", {
        strings: ["Food is my way of expressing love, culture, and passion."],
        autoStart: true,
        delay:1,
        cursor: "",
      });
    }
let putingredientesform = document.querySelector("#putingredientes");
putingredientesform.addEventListener("submit", generaterecipe);