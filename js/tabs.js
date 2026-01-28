const tabButtons = document.querySelectorAll(".design-list__item");
const tabDesc = document.querySelectorAll(".design__descr");

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener("click", (e) => {
    tabDesc.forEach((descr, indexDescr) => {
      if (index === indexDescr) {
        descr.classList.remove('hidden') 
      } else {
        descr.classList.add('hidden');
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
