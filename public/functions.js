// code snippet for tabs
const tabsNav = document.querySelector(".tabs__nav");
const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsNav.addEventListener("click", function (event) {
  const targetButton = event.target.closest(".tabs__nav-btn");

  if (targetButton) {
    const tabId = targetButton.getAttribute("data-tab");
    const currentTab = document.querySelector(tabId);

    tabsBtn.forEach((btn) => btn.classList.toggle("active", btn === targetButton));
    tabsItems.forEach((item) => item.classList.toggle("active", item === currentTab));
  }
});

tabsBtn[0].click();
