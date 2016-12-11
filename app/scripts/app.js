import search from './search';

search();

const images = document.querySelectorAll('.student__img');

[].forEach.call(images, (img) => {
    const tempImg = new Image();
    tempImg.src = img.src;

    tempImg.onload = () => {
        img.classList.add('pre-loaded');
    };

    const data = img.getAttribute('data-src');
    const largeImg = new Image();
    largeImg.src = data;
    largeImg.onload = () => {
        img.src = data;
        img.classList.remove('pre-loaded');
        img.classList.add('large-loaded');
        img.style.willChange = 'auto';
    };
});

// https://webpack.github.io/docs/hot-module-replacement.html
if (module.hot) {
    module.hot.accept();
}
