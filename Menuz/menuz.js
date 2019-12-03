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

//Using Moving letters -Effect 1

function first() {
  // Targets
  list = menuz.children[0].children;
  if (isOpen === false) {
    menuz.style.display = "initial";
    for (let i = 0; i < list.length; i++) {
      setTimeout(() => {
        list[i].classList.add("animated", "bounce", "fast");
      }, 70 * i);
    }
    anime({
      targets: menuz,
      duration: 1000,
      height: "80vh"
    });

    isOpen = true;
  } else {
    anime({
      targets: menuz,
      height: 0,
      duration: 150,
      complete: () => {
        for (let i = 0; i < list.length; i++) {
          list[i].classList.remove("animated", "bounce", "fast");
        }
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
  switch (menuzStyle) {
    case "menuz simple":
      simple();
      break;

    case "menuz boring":
      boring();
      break;

    case "menuz first":
      first();
      break;
  }
}
