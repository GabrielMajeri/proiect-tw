let isRulerActive = false;
let rulerElem = null;
let startX = 0;
let startY = 0;
let currentX = 0;
let currentY = 0;

window.addEventListener("load", () => {
  rulerElem = document.createElement("img");
  rulerElem.id = "ruler";
  rulerElem.src = "/assets/images/ruler.png";
  rulerElem.style.display = "none";
  document.body.appendChild(rulerElem);
});

window.addEventListener("keypress", event => {
  //console.log(`Pressed key ${event.key}`);
  if (event.key === "r") {
    if (isRulerActive) {
      isRulerActive = false;

      rulerElem.style.display = "none";
    } else {
      isRulerActive = true;

      startX = currentX;
      startY = currentY;

      rulerElem.style.display = "block";

      rulerElem.style.left = `${currentX}px`;
      rulerElem.style.top = `${currentY}px`;
    }
  }
});

window.addEventListener("mousemove", event => {
  currentX = event.pageX;
  currentY = event.pageY;

  if (isRulerActive) {
    const dx = currentX - startX;
    const dy = currentY - startY;

    const rulerLength = Math.sqrt(dx * dx + dy * dy);
    const rulerAngle = Math.atan2(dy, dx);

    rulerElem.style.width = `${rulerLength}px`;

    const height = getComputedStyle(rulerElem).getPropertyValue("height");
    rulerElem.style.transform = `rotate(${rulerAngle}rad) translate(0, -${height})`;
  }
});
