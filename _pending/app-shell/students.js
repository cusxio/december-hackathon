var searchBtn = document.querySelector(".btn--search--mobile");

searchBtn.addEventListener("click", function(e) {
  document.querySelector(".app-bar").classList.add("is-search");
  document.querySelector(".brand").classList.add("is-search");
  document.querySelector(".btn--search--mobile").classList.add("is-search");
  document.querySelector(".btn--dropdown").classList.add("is-search");
  document.querySelector(".secondary-toolbar").classList.add("is-search");
  document.querySelector(".gallery").classList.add("is-search");
  document.querySelector(".footer").classList.add("is-search");
  document.querySelector(".search--mobile").classList.add("is-search");
})

var backBtn = document.querySelector(".btn--back");

backBtn.addEventListener("click", function(e) {
  document.querySelector(".app-bar").classList.remove("is-search");
  document.querySelector(".brand").classList.remove("is-search");
  document.querySelector(".btn--search--mobile").classList.remove("is-search");
  document.querySelector(".btn--dropdown").classList.remove("is-search");
  document.querySelector(".secondary-toolbar").classList.remove("is-search");
  document.querySelector(".gallery").classList.remove("is-search");
  document.querySelector(".footer").classList.remove("is-search");
  document.querySelector(".search--mobile").classList.remove("is-search");
})