function getShouldGearSpin() {
  let value = localStorage.getItem("gearSpin");
  if (value === null) {
    value = true;
    setShouldGearSpin(value);
  } else {
    value = JSON.parse(value);
  }
  return value;
}

function setShouldGearSpin(value) {
  localStorage.setItem("gearSpin", JSON.stringify(value));
}

const gear = document.getElementById("gear");

const spin = getShouldGearSpin();

if (spin === "false") {
  gear.className = "paused";
}

gear.addEventListener("click", () => {
  if (getShouldGearSpin() === "true") {
    console.log("Disabling wheel spin");
    setShouldGearSpin("false");
    gear.className = "paused";
  } else {
    console.log("Enabling gear spin");
    setShouldGearSpin("true");
    gear.className = "";
  }
});

const coefTable = document.getElementById("coef-table");
coefTable.addEventListener(
  "click",
  () => {
    const cell = event.target;
    if (cell.tagName.toLowerCase() === "td") {
      cell.style.backgroundColor = "blue";
      cell.style.color = "white";
      event.stopPropagation();
    }
  },
  true
);
