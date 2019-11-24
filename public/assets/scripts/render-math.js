document.addEventListener("DOMContentLoaded", () => {
    // Go through all elements marked as containing TeX formulae
    // and convert them to formatted HTML/MathML tags.
    const mathElems = document.getElementsByClassName("math");
    for (const math of mathElems) {
        const latexCode = math.innerText;
        const displayMode = math.classList.contains("display-mode");

        katex.render(latexCode, math, {
            displayMode,
            throwOnError: false
        });
    }
});
