const ratingBar = document.getElementById("rating-bar");

for (let i = 0; i < ratingBar.children.length; ++i) {
  if (ratingBar.children[i].tagName == "INPUT") {
    ratingBar.children[i].addEventListener("change", function(radio) {
      if (this.value) {
        let colorIntensity = i / 2;
        ratingBar.style.color = "white";
        ratingBar.style.backgroundColor = `rgb(${100 -
          colorIntensity / 8}, ${100 + (colorIntensity / 8) * 128}, 50)`;
      }
    });
  }
}
