document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
    }, 4000);
  });

  window.onload = function () {
    document.getElementById("loader").style.display = "none";
  };