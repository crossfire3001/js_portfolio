const tabButtons = document.querySelectorAll(".design-list__item");
const tabDesc = document.querySelectorAll(".design__descr");
const tabImages = document.querySelectorAll(".design-images");

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener("click", (e) => {
    const dataValue = tabButton.dataset.tabsHandler;

    tabDesc.forEach((descr) => {
      if (descr.dataset.tabsField === dataValue) {
        descr.classList.remove("hidden");
      } else {
        descr.classList.add("hidden");
      }
    });

    tabImages.forEach((image) => {
      if (image.dataset.tabsField === dataValue) {
        image.classList.remove("hidden");
      } else {
        image.classList.add("hidden");
      }
    });

    tabButtons.forEach((btn) => {
      if (btn === e.target) {
        btn.classList.add("design-list__item_active");
      } else {
        btn.classList.remove("design-list__item_active");
      }
    });
  });
});
