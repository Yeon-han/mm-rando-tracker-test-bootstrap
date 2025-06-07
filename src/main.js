import {
  inventoryArr,
  maskArr,
  equipmentArr,
  questItemArr,
} from "./iconList.js";

const imgBootstrapClasses = [
  "unchecked",
  "img-fluid",
  "m-1",
  "bg-light",
  "border",
  "p-1",
  "rounded-3",
];
function initialize(list) {
  for (const ele of list) {
    let newIcon = document.createElement("img");
    if (ele.itemCategory === "inventory") {
      document.querySelector(".inventory-span").append(newIcon);
    }
    if (ele.id === "boss-remains") {
      document.querySelector("#remains-span").append(newIcon);
    }
    if (ele.itemCategory === "quest-item" && !ele.id) {
      document.querySelector(".quest-item-span").append(newIcon);
    }
    if (ele.itemCategory === "regular-masks") {
      newIcon.setAttribute("id", ele.id);
      document.querySelector(".regular-masks-span").append(newIcon);
    }
    if (ele.itemCategory === "equipment") {
      document.querySelector(".equipment-span").append(newIcon);
    }
    if (ele.itemCategory === "transformation-masks") {
      newIcon.setAttribute("id", ele.id);
      document.querySelector(".transformation-masks-span").append(newIcon);
    }
    newIcon.classList.add(ele.insertClass, ...imgBootstrapClasses);
    newIcon.src = ele.path;
  }
}

initialize(equipmentArr);
initialize(inventoryArr);
initialize(questItemArr);
initialize(maskArr);

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
const selectMasks = document.querySelectorAll("#masks");
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

// Shadow on mouseenter/mouseout
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
  clearBottleContents();
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
    if (icon.id === "bottle") {
      bottleToggle(poe);
      bottleToggle(bugs);
      bottleToggle(fish);
      bottleToggle(emptyBottle);
    } else icon.classList.toggle("unchecked");
  });
});

// Bottle stuff
const bottleID = document.getElementById("bottle");
const setBottleContentPath = function (path) {
  bottleID.src = `./assets/inventory/bottle contents/${path}.png`;
};

function selectBottleContent(domElement, pngName) {
  domElement.addEventListener("click", () => {
    setBottleContentPath(`${pngName}`);
  });
}

const poe = document.querySelector(".regular-poe");
const fish = document.querySelector(".fish");
const bugs = document.querySelector(".bugs");
const emptyBottle = document.querySelector(".empty-bottle");
const uncheckBottle = document.querySelector(".remove-bottle-check");

selectBottleContent(bugs, "Bugs");
selectBottleContent(fish, "Fish-Bottle");
selectBottleContent(poe, "Poe-Spirit");
selectBottleContent(emptyBottle, "Empty-Bottle");

function bottleToggle(prop) {
  prop.addEventListener("click", () => bottleID.classList.remove("unchecked"));
}

function clearBottleContents() {
  bottleID.classList.add("unchecked");
  setBottleContentPath("Empty-Bottle");
}
uncheckBottle.addEventListener("click", clearBottleContents);

//////////////////
// Testing area //
//////////////////
