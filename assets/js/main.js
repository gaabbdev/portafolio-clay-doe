const bar = document.querySelector("#bar");
const nav = document.querySelector("#menu");
const menu = document.querySelector(".menu");

eventos();

function eventos() {
  bar.addEventListener("click", () =>
    nav.classList.toggle("menu-elementos--show")
  );

  document.addEventListener("scroll", () =>
    window.scrollY > 560
      ? menu.classList.add("menu-bg")
      : menu.classList.remove("menu-bg")
  );
}
