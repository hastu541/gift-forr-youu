document.addEventListener("DOMContentLoaded", function () {

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const question = document.getElementById("mainQuestion");
    const subText = document.getElementById("subQuestion");

    yesBtn.addEventListener("click", function () {
        question.innerHTML = "YAYYYY ❤️";
        subText.innerHTML = "You just made me the happiest person alive 🥰";
    });

    noBtn.addEventListener("mouseover", function () {
        const randomX = Math.floor(Math.random() * 200) - 100;
        const randomY = Math.floor(Math.random() * 200) - 100;

        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });

});
