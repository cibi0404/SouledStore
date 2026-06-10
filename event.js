let close = document.getElementById('offerclose');
close.addEventListener('click', function() {
    document.getElementById('offerbar').style.display = 'none';
});

let currentIndex = 0;
let slider = document.getElementById('slider');
const totalSlides = slider.children.length;
let next = document.getElementById('next');
let prev = document.getElementById('prev');

next.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
});

prev.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
});

setInterval(function() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 3000);

let heart =document.getElementById('heart')

heart.addEventListener('click',function ()
 {
    heart.classList.toggle('fa-regular')
    heart.classList.toggle('fa-solid')
    heart.classList.toggle('text-white')
    heart.classList.toggle('text-red-500')
})


