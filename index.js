document.addEventListener("DOMContentLoaded", () => {
    const arrow = document.querySelector(".arrow");
    const arrowButtons = document.querySelectorAll(".btn-arrow");
    const sizeButtons = document.querySelectorAll(".btn-size")

    const arrowChange = (arr) => {
        arrow.textContent = arr;
    }

    arrowButtons.forEach(button => {
        button.addEventListener("click", () => { arrowChange(button.textContent) })
    });

    const sizeChange = (operation) => {
        const fontSize = window.getComputedStyle(arrow).fontSize;
        let size = +fontSize.replace("px", "");

        switch (operation) {
            case "+": size += 10; break;
            case "-": size -= 10; break;
            default: break;
        }

        arrow.style.fontSize = `${size}px`;
    }

    sizeButtons.forEach(button => {
        button.addEventListener("click", () => { sizeChange(button.textContent) })
    });
})