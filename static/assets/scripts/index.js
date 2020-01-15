function getShouldGearSpin() {
  let value = localStorage.getItem("gearSpin");
  if (value === null) {
    value = "true";
    setShouldGearSpin(value);
  }
  return value;
}

function setShouldGearSpin(value) {
  localStorage.setItem("gearSpin", value);
}

window.addEventListener("load", () => {
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
});
