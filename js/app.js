var linkTags = document.querySelectorAll(".header_link");
linkTags.forEach((linkTag) => {
  linkTag.addEventListener("click", function () {
    removeActiveClass();
    this.classList.add("header_link__active");
  });
});
function removeActiveClass() {
  linkTags.forEach((linkTag) => {
    linkTag.classList.remove("header_link__active");
  });
}
