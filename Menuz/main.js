// Set up variables and event listeners
menu = document.getElementsByClassName("hamburger")[0];
menuzStyle = document.getElementsByClassName("menuz")[0].className;
dropdown = document.getElementsByClassName("dropdown")[0];
dropMenu = document.getElementsByClassName("dropMenu")[0];
menuSelcted = document.getElementById("menuzStyle");
menu.addEventListener("click", function() {
  menuzAnimator(menuzStyle);
});

// Dropdown Menu controller

let showDropMenu = false;
dropdown.addEventListener("click", function() {
  if (showDropMenu === false) {
    // console.log("Show Menu");
    dropMenu.style.display = "initial";
    showDropMenu = true;
  } else {
    // console.log("Hide Menu");
    dropMenu.style.display = "none";
    showDropMenu = false;
  }
});

// update menuzStyle based on menuz selection
// When user select a style it updates the animation
for (let i = 0; i < dropMenu.children.length; i++) {
  if (i != 4) {
    dropMenu.children[i].addEventListener("click", () => {
      menuzStyle = "menuz " + dropMenu.children[i].innerHTML.toLowerCase();
      dropMenu.children[i].style.fontWeight = "bold";
      // console.log(dropMenu.children[i].innerHTML);
      // On click update tutorial and information in html page
      menuSelcted.innerHTML = dropMenu.children[i].innerHTML;
      console.log(menuSelcted.innerHTML);
      for (let j = 0; j < dropMenu.children.length; j++) {
        if (i != j) {
          dropMenu.children[j].style.fontWeight = "normal";
        }
      }
      // Remove all classes from list items for newly selected style to work
      for (let i = 0; i < menuz.children[0].children.length; i++) {
        menuz.children[0].children[i].classList.remove(
          "animated",
          "bounce",
          "fast"
        );
      }
    });
  }
}
