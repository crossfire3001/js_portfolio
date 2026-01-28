const tabButtons = document.querySelectorAll(".design-list__item");
const tabDesc = document.querySelectorAll(".design__descr");
const tabImages = document.querySelectorAll(".design-images");

const changeContent = (array, value) => {
  array.forEach((element) => {
    if (element.dataset.tabsField === value) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  });
};

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener("click", (e) => {
    const dataValue = tabButton.dataset.tabsHandler;

    changeContent(tabImages, dataValue);
    changeContent(tabDesc, dataValue);

    tabButtons.forEach((btn) => {
      if (btn === e.target) {
        btn.classList.add("design-list__item_active");
      } else {
        btn.classList.remove("design-list__item_active");
      }
    });
  });
});
