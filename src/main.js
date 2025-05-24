// Left side buttons
const showAll = document.querySelector(".show-all");
const showMasksButton = document.querySelector(".show-masks");
const showInvButton = document.querySelector(".show-inventory");
const showQuestItemsButton = document.querySelector(".show-quest-items");
const showEquipmentButton = document.querySelector(".show-equipment");

// Confirmations
const clearAllConfirm = document.querySelector(".clear-all-confirm");
const clearAllCancel = document.querySelector(".clear-all-cancel");

// Selecting icons
const allIcons = document.querySelectorAll(".icons img");
const selectMasks = document.querySelectorAll(".masks");
const selectQuestItems = document.querySelectorAll(".quest-item");
const selectInventory = document.querySelectorAll(".inventory");
const selectEquipment = document.querySelectorAll(".equipment");

// Add click to left side buttons
function selectChecklistView(param_1, param_2, displayOption = "") {
  param_1.addEventListener("click", (e) => {
    if (e.srcElement.classList.contains("show-masks")) {
      hideDividers();
      document.querySelector(".trans-mask-divider").removeAttribute("style");
      document.querySelector(".reg-mask-divider").removeAttribute("style");
    } else if (e.srcElement.classList.contains("show-quest-items")) {
      hideDividers();
      document.querySelector(".trade-items-divider").removeAttribute("style");
      document.querySelector(".remains-divider").removeAttribute("style");
    } else {
      hideDividers();
    }

    setDisplay(allIcons, "none");
    setDisplay(param_2, displayOption);
  });
}

// Hide text dividers after switching view
const hideDividers = function () {
  document.querySelectorAll(".dividers").forEach((e) => {
    e.style = "display: none";
  });
};

selectChecklistView(showInvButton, selectInventory, "");
selectChecklistView(showQuestItemsButton, selectQuestItems, "");
selectChecklistView(showEquipmentButton, selectEquipment, "");
selectChecklistView(showMasksButton, selectMasks, "");

// Add shadows when hovering for all images
allIcons.forEach((ele) => {
  shadowToggle(ele);
});

// Shadow on mouseenter/mouseout WTF IS THING??
function shadowToggle(thing) {
  thing.addEventListener("mouseenter", () => {
    thing.classList.toggle("shadow");
  });
  thing.addEventListener("mouseout", () => {
    thing.classList.toggle("shadow");
  });
}

// Collapse warning
function collapseAfterClear() {
  new bootstrap.Collapse("#target", {
    toggle: true,
  });
}

// Display set to "hide" or "" to show
const setDisplay = (element, hideOrShow) => {
  element.forEach((e) => {
    e.style.display = hideOrShow;
  });
};

// This will show ALL icons
showAll.addEventListener("click", () => {
  setDisplay(allIcons, "");
  hideDividers();
});

// YES, CLEAR ALL
clearAllConfirm.addEventListener("click", function () {
  console.log("everything was cleared");
  collapseAfterClear();
  // All icons are turned gray
  allIcons.forEach((ele) => {
    ele.classList.add("unchecked");
  });
});

// NO, KEEP EVERYTHING
clearAllCancel.addEventListener("click", collapseAfterClear);

// CHECK/UNCHECK ITEM ICON!!
allIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    icon.classList.toggle("unchecked");
  });
});

// Bottle stuff
const poe = document.querySelector(".regular-poe");
const fish = document.querySelector(".fish");
const bugs = document.querySelector(".bugs");
const emptyBottle = document.querySelector(".empty-bottle");

const changeBottleContents = function (path) {
  document.getElementById(
    "bottle"
  ).src = `./assets/inventory/bottle contents/${path}.png`;
};

bugs.addEventListener("click", () => {
  changeBottleContents("Bugs");
});

fish.addEventListener("click", () => {
  changeBottleContents("Fish-Bottle");
});

poe.addEventListener("click", () => {
  changeBottleContents("Poe-Spirit");
});
emptyBottle.addEventListener("click", () => {
  changeBottleContents("Empty-Bottle");
});

//////////////////
// Testing area //
//////////////////

// document.querySelector(".jerma").addEventListener("click", function () {
//   window.open("https://youtu.be/AVbCuNjjYcQ?si=MaabBHcIXTF70Bgz&t=30", "popup");
// });
