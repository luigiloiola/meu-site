const cards = document.querySelectorAll('.cards');
const main_top_left = document.querySelector('.main-top-left');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("visible", entry.isIntersecting);
    })
},{
    threshold:0.2
})
cards.forEach(card => {
    observer.observe(card);
})
observer.observe(main_top_left);
