const GenerateBtn = document.querySelector(".btn");
const ModeBtn = document.querySelector(".mode");
const ContainerEl = document.querySelector(".container");

ModeBtn.addEventListener("click", () => {
  document.body.style.background = "black";
  document.querySelector(".container").style.boxShadow =
    "0 15px 35px rgba(255, 255, 255, 0.5)";
});

GenerateBtn.addEventListener("click", function generate() {
  var quotes = {
    "— Carol Burnett":
      '"When you have a dream, you have got to grab it and never let go."',
    "— Alexander the Great":
      '"There is nothing impossible to they who will try."',
    "— Michael Altshuler":
      '"The bad news is time flies. The good news is you are the pilot"',
    "— Nicole Kidman":
      '"Life has got all those twists and turns. You have got to hold on tight and off you go."',
    "— Walt Whitman":
      '"Keep your face always toward the sunshine, and shadows will fall behind you."',
  };

  var authors = Object.keys(quotes);

  var author = authors[Math.floor(Math.random() * authors.length)];

  var quote = quotes[author];

  document.getElementById("quotes").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
});
