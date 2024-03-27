var button = document.querySelector(".got-this");
var modal = document.querySelector(".modal");
var modalx = document.querySelector(".modal-x");

button.addEventListener("click", function () {
    modal.classList.add("show-modal");
    button.innerText = "You've Got This!";
});

modalx.addEventListener("click", function () {
    modal.classList.remove("show-modal");
    button.innerText = "Who's got this?";
});