const home_btn = document.querySelector(".nav #one");
const about_btn = document.querySelector(".nav #two");
const article_one = document.querySelector(".article_one");
const article_two = document.querySelector(".article_two");
const article_three = document.querySelector(".article_three");

const call_btn = document.querySelector(".nav #one1");
const email_btn = document.querySelector(".nav #two2");
const location_btn = document.querySelector(".nav #three3");

const article_three_i = document.querySelector(".article_three_ii");
const article_three_ii = document.querySelector(".article_three_iii");
const article_three_iii = document.querySelector(".article_three_i");

function hideAllArticles() {
  article_one.classList.add("hidden");
  article_two.classList.add("hidden");
  article_three.classList.add("hidden");
  article_three_i.classList.add("hidden");
  article_three_ii.classList.add("hidden");
  article_three_iii.classList.add("hidden");
}

article_one.classList.remove("hidden");

home_btn.addEventListener("click", () => {
  hideAllArticles();
  article_one.classList.remove("hidden");
});

about_btn.addEventListener("click", () => {
  hideAllArticles();
  article_two.classList.remove("hidden");
});

call_btn.addEventListener("click", () => {
  hideAllArticles();
  article_three.classList.remove("hidden");
  article_three_i.classList.remove("hidden");
});

email_btn.addEventListener("click", () => {
  hideAllArticles();
  article_three.classList.remove("hidden");
  article_three_ii.classList.remove("hidden");
});

location_btn.addEventListener("click", () => {
  hideAllArticles();
  article_three.classList.remove("hidden");
  article_three_iii.classList.remove("hidden");
});

const sub_nav = document.querySelector(".sub_nav");
const contact_btn = document.querySelector(".nav #three");

contact_btn.addEventListener("click", (e) => {
  if (sub_nav.classList.contains("sub_transform-show")) {
    sub_nav.classList.remove("sub_transform-show");
    sub_nav.classList.add("sub_transform-hide");
  } else {
    sub_nav.classList.add("sub_transform-show");
    sub_nav.classList.remove("sub_transform-hide");
  }
});
