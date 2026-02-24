
// collapse variables
const collapse = document.querySelector("[data-collapse]");
const collapseBtn = document.querySelector("[data-collapse-btn]");

// collapse toggle functionality for mobile
collapseBtn.addEventListener("click", function () {
  elementToggleFunc(collapse);
});
