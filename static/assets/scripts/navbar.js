window.addEventListener("load", () => {
  const pageNav = document.getElementById("page-nav");
  let dropdownVisible = false;

  for (const dropdownTab of pageNav.getElementsByClassName("dropdown")) {
    const link = dropdownTab.querySelector("a");
    const dropdown = dropdownTab.querySelector("ul");

    link.addEventListener("click", evt => {
      evt.preventDefault();

      dropdownVisible = !dropdownVisible;

      if (dropdownVisible) {
        dropdown.style.display = "block";
      } else {
        dropdown.style.display = "none";
      }
    });
  }
});
