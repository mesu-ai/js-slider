const images = [
    'images/img-1.jpg',
    'images/img-2.jpg',
    'images/img-3.jpg',
    'images/img-4.jpg',
    'images/img-5.jpg',
    'images/img-6.jpg',
    'images/img-7.jpg'
]


let imgIndex = 0;
setInterval(() => {
    const slider = document.getElementById('slider-show');

    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    slider.setAttribute('src', imgUrl);
    console.log(imgUrl);
    imgIndex++;

}, 1000);