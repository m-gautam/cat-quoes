let quotesDiv = document.getElementById("quotes");

fetch("https://api.kanye.rest")
  .then((res) => res.json())
  .then((quote) => {
    console.log("-=-=->", quote.quote);
    quotesDiv.innerHTML = `<p> ${quote.quote} </p>`;
  });

let catButton = document.getElementById("give-cat");

catButton.addEventListener("click", (evt) => {
  let catDiv = document.getElementById("cat-pic");

  fetch("https://api.thecatapi.com/v1/images/search?")
    .then((res) => res.json())
    .then((cats) =>
      cats.forEach((cat) => {
        console.log(cat.url);
        catDiv.innerHTML = `<h3>Here is the cat wishing you bestest day</h3>`;
        catDiv.innerHTML += `<img src="${cat.url}" alt="kitty" />`;
      })
    );
});
