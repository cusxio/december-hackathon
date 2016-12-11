import search from './search';

search();

const students = document.querySelector('.students');
const profile = document.querySelector('.profile--container');
const body = document.querySelector('body');
const profileClose = document.querySelector('.profile__close');

let target;

students.addEventListener('click', (e) => {
    target = e.target.parentNode.parentNode;
    body.classList.add('disabled');
    profile.classList.add('visible');
});

profileClose.addEventListener('click', () => {
    body.classList.remove('disabled');
    profile.classList.remove('visible');
    target.classList.add('viewed');
});

// https://webpack.github.io/docs/hot-module-replacement.html
if (module.hot) {
    module.hot.accept();
}
