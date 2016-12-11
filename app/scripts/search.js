export default function search() {
    const appBar = document.querySelector('.app-bar');
    const brand = document.querySelector('.brand');
    const btn = document.querySelector('.btn--search--mobile');
    const btnDropdown = document.querySelector('.btn--dropdown');
    const secondToolbar = document.querySelector('.secondary-toolbar');
    const students = document.querySelector('.students');
    const load = document.querySelector('.load');
    const footer = document.querySelector('.footer');
    const searchMobile = document.querySelector('.search--mobile');

    [].forEach.call(document.querySelectorAll('.btn--search--mobile, .btn--back'), (el) => {
        el.addEventListener('click', () => {
            appBar.classList.toggle('is-search');
            brand.classList.toggle('is-search');
            btn.classList.toggle('is-search');
            btnDropdown.classList.toggle('is-search');
            secondToolbar.classList.toggle('is-search');
            students.classList.toggle('is-search');
            load.classList.toggle('is-search');
            footer.classList.toggle('is-search');
            searchMobile.classList.toggle('is-search');
        });
    });
}
