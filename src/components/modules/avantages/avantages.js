let loadMoreBtn = document.querySelector("#load-more-btn"),
  items = document.querySelector(".load-more-block"),
  img = document.querySelector(".avanteges-img"),
  wrapper = document.querySelector(".avanteges-wrapper");

loadMoreBtn.onclick = (e) => {
  e.preventDefault();
  items.style.display = "block";
  img.style.height = "857px";
  wrapper.style.height = "857px";

  loadMoreBtn.style.display = "none";
};
