document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  var menuActive = false;
  var menuSideActive = false;
  var header = document.querySelector(".header");
  setHeader();
  initPageMenu();
  side_menu(); // Call the side_menu function here
  closeSideMenu();
  function setHeader() {
    if (window.innerWidth > 991 && menuActive) {
      closeMenu();
    }
  }

  function initPageMenu() {
    var menu = document.querySelector(".page_menu");
    var menuContent = document.querySelector(".page_menu_content");
    var menuTrigger = document.querySelector(".menu_trigger");

    menuTrigger.addEventListener("click", function () {
      if (!menuActive) {
        openMenu();
      } else {
        closeMenu();
      }
    });

    var pageMenuItems = document.querySelectorAll(".page_menu_item");
    pageMenuItems.forEach(function (item) {
      if (item.classList.contains("has-children")) {
        item.addEventListener("click", function (evt) {
          evt.preventDefault();
          evt.stopPropagation();
          var subItem = this.children[0];
          if (subItem.classList.contains("active")) {
            subItem.classList.remove("active");
            TweenMax.to(subItem, 0.3, { height: 0 });
          } else {
            subItem.classList.add("active");
            subItem.style.height = "auto";
            TweenMax.from(subItem, 0.3, { height: 0 });
          }
        });
      }
    });
  }

  function openMenu() {
    var menuContent = document.querySelector(".page_menu_content");
    menuContent.style.height = "auto";
    // TweenMax.from(menuContent, 0.3, {height:0});
    menuActive = true;
  }

  function closeMenu() {
    var menuContent = document.querySelector(".page_menu_content");
    menuContent.style.height = "0";
    // TweenMax.to(menuContent, 0.3, {height:0});
    menuActive = false;
  }

  function openSideMenu() {
    var menuSideContent = document.getElementById("side_bars");
    menuSideContent.style.marginLeft = "0%";
    menuSideActive = true;
  }

  function closeSideMenu() {
    var menuSideContent = document.getElementById("side_bars");
    menuSideContent.style.marginLeft = "-230px";
    menuSideActive = false;
  }

  async function side_menu() {
    var menuSideTrigger = await document.getElementById("side_menu");
    menuSideTrigger.addEventListener("click", function () {
      if (!menuSideActive) {
        openSideMenu();
      } else {
        closeSideMenu();
      }
    });
  }
});
