
function displayrecipe (response){


  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay:1,
    cursor: "",
  });
}




function generaterecipe (event) {
    event.preventDefault ();
    let instructions = document.querySelector("#instructions");
    let recipediv = document.querySelector("#recipe");
    let apikey = "ce024dff2t11ac0410oc03803af4bc0a";
    let prompt= `User instructions: Generate a recipe with ${instructions.value}`;
    let context = `Generate a simple recipe with ingrident of instruction. Your mission is make a recipe in basic html, Separate the line with </br>. Make maxim 10 lines.  And dont show the  symbol  html in page. Start the recipe with title inside <div style=rgb(15, 4, 1); font-size:42px; font-family:Georgia, 'Times New Roman', Times, serif;> .Follow all instructions.`;
    let apiurl= `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`

let recipeelement=document.querySelector("#recipe");
recipeelement.classList.remove("hidden");
recipeelement.innerHTML = `<div class="generating"> ⏳Generating a recipe with ${instructions.value}</div>`;






console.log (`Prompt: ${prompt}`);
  console.log(`Context" ${context}`);


axios.get(apiurl).then(displayrecipe);
}

let putingredientesform = document.querySelector("#putingredientes");
putingredientesform.addEventListener("submit", generaterecipe);