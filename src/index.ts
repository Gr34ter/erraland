const burgerBtn = document.querySelector('.burger-container') as HTMLDivElement;
const burgerMenu = document.querySelector('.burger-menu') as HTMLDivElement

burgerBtn.addEventListener('click', () => {
    console.log('hi');
    
    burgerMenu.classList.toggle('burger-menu-active');
    burgerBtn.classList.toggle('burger-hide');
});