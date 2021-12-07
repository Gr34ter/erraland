export var addProgress = function (button) {
    setTimeout(function () {
        var barContainer = document.querySelector('.progress');
        var bar = document.querySelector('.moving-bar');
        var progressValue = document.querySelector('.progress-value');
        var confirmBtn = document.querySelector('.confirm-btn');
        var width = parseInt(bar.style.width);
        if (button.dataset.selected === "false") {
            barContainer.classList.add('progress-active');
            width += 25;
            bar.style.width = width + "%";
            button.dataset.selected = "true";
            progressValue.innerText = width + "%";
        }
        if (width === 100) {
            confirmBtn.classList.add('confirm-btn-active');
        }
    }, 600);
};
