const Usertext = document.querySelector("#Usertext");
const btn = document.querySelector("#btn");
const statusbar = document.querySelector("#status");

const analyse = () => {
  if (Usertext.value !== "") {
    const thresold = 0.5;
    btn.textContent = "Analysing ...";
    toxicity.load(thresold).then((model) => {
      model.classify(Usertext.value).then((prediction) => {
        for (const items of prediction) {
          if (items.label === "toxicity") {
            if (!items.results[0].match) {
              alert("No Toxicity detected");
              btn.textContent = "Check";
            } else {
              alert("Toxicity detected");
              btn.textContent = "Check";
            }
          }
        }
      });
    });
  } else {
    alert("Enter text to analyse");
  }
};

btn.addEventListener("click", analyse);
