const GenerateMemeBtn = document.querySelector(
  ".meme-generator .generate-meme-btn"
);
const MemeImage = document.querySelector(".meme-generator img");
const MemeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

updateDetails = (url, title, author) => {
  MemeImage.setAttribute("src", url);
  MemeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme by: ${author}`;
};

const GenerateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};

GenerateMemeBtn.addEventListener("click", GenerateMeme);
