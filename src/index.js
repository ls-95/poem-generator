function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "b59ff36eta0339438504acc8a04b4b3o";
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a four lined poem in basic HTML. Avoid adding ```html at the beginning of the answer. Make sure to seperate each of the four poem lines with a <br />. Sign the poem at the end with 'SheCodes AI' inside a <strong> element. Make sure to follow the user instructions:";
  let prompt = `User instructions: Generate a poem in english about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let waitingForPoemToLoad = document.querySelector("#poem");
  waitingForPoemToLoad.innerHTML = `<span class="blink">Generating poem about ${instructionsInput.value}..</span>`;
  waitingForPoemToLoad.classList.remove("hidden");

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
