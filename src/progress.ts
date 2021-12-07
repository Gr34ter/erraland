export const addProgress = (button:HTMLDivElement) => {
    setTimeout(() => {
        let barContainer = document.querySelector('.progress') as HTMLElement;
        let bar = document.querySelector('.moving-bar') as HTMLDivElement;
        let progressValue = document.querySelector('.progress-value') as HTMLHeadingElement
        let confirmBtn = document.querySelector('.confirm-btn') as HTMLButtonElement;

        let width = parseInt(bar.style.width);
        if (button.dataset.selected === "false") {
            barContainer.classList.add('progress-active')
            width += 25;
            bar.style.width = `${width}%`;
            button.dataset.selected = "true";
            progressValue.innerText = `${width}%`
        }

        if (width === 100) {
            confirmBtn.classList.add('confirm-btn-active');
        }
    
    }, 600)

}
