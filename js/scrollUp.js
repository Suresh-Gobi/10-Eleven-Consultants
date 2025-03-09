document.addEventListener("DOMContentLoaded", function () {
    let scrollUpBtn = document.getElementById("scrollUpBtn");
  
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 200) {
        scrollUpBtn.classList.add("show");
      } else {
        scrollUpBtn.classList.remove("show");
      }
    };
  
    scrollUpBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });