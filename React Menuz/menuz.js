//Set up variables

isOpen = false;
menuz = document.getElementsByClassName("menuz-list")[0];

// Style animations
function boring() {
  // Targets
  if (isOpen === false) {
    menuz.style.display = "initial";
    anime({
      targets: menuz,
      height: "80vh",
      duration: 100,
      easing: "linear"
    });
    isOpen = true;
  } else {
    anime({
      targets: menuz,
      height: 0,
      duration: 100,
      complete: () => {
        menuz.style.display = "none";
      },
      easing: "linear"

      // translateX: 100
    });

    isOpen = false;
  }
}
// Simple elastic easing on opening and a linear snap when closing
function simple() {
  // Targets
  if (isOpen === false) {
    menuz.style.display = "initial";
    anime({
      targets: menuz,
      height: "80vh"
    });
    isOpen = true;
  } else {
    anime({
      targets: menuz,
      height: 0,
      duration: 150,
      complete: () => {
        menuz.style.display = "none";
      },
      easing: "linear"

      // translateX: 100
    });

    isOpen = false;
  }
}

//Main function call
function menuzAnimator(menuzStyle) {
  if (menuzStyle === "menuz simple") {
    simple();
  } else if (menuzStyle === "menuz boring") {
    boring();
  }
}
