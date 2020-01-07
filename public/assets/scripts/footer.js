window.addEventListener("load", () => {
  const copyYearSpan = document.getElementById("copyright-year");

  copyYearSpan.innerText = new Date().getFullYear();
});
