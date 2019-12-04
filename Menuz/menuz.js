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

function animateCss() {
  // Targets

  animationName = "";

  if (document.getElementById("animationName").value != "") {
    animationName = document.getElementById("animationName").value;
  } else {
  }
  list = menuz.children[0].children;
  // Open Menu
  if (isOpen === false) {
    menuz.style.display = "initial";

    for (let i = 0; i < list.length; i++) {
      // Add default animation if none selected animation = bounce
      setTimeout(() => {
        animationName != ""
          ? list[i].classList.add("animated", animationName, "fast")
          : list[i].classList.add("animated", "bounce", "fast");
      }, 70 * i);
    }

    anime({
      targets: menuz,
      duration: 1000,
      height: "80vh"
    });
    console.log(list[0].classList);
    isOpen = true;
  } else {
    //Close Menu
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
    for (let i = 0; i < list.length; i++) {
      // Remove default animation from classList if nothing was added
      // removes user added animation also
      animationName != ""
        ? list[i].classList.remove("animated", animationName, "fast", "bounce")
        : list[i].classList.remove("animated", "bounce", "fast");
    }
    // Purge the classList stack from saving previous entries
    if (list[0].classList[0] != undefined) {
      for (let i = 0; i < list.length; i++) {
        list[i].classList.remove(list[i].classList[0]);
      }
    }
    // console.log(list[0].className);
    isOpen = false;
  }
  // console.log(animationName);
}
function wave() {
  // Targets
  list = menuz.children[0].children;
  if (isOpen === false) {
    menuz.style.display = "initial";
    anime({
      targets: menuz,
      height: "80vh"
    });
    for (let i = 0; i < list.length; i++) {
      setTimeout(() => {
        anime({
          targets: list[i],
          width: [-100, "30vw"]
          // easing: "linear"
          // delay: 10 * i
        });
      }, 70 * i);
    }

    isOpen = true;
  } else {
    anime({
      targets: menuz,
      height: 0,
      duration: 10,
      complete: () => {
        menuz.style.display = "none";
      }
      // translateX: 100
    });
    for (let i = 0; i < list.length; i++) {
      setTimeout(() => {
        anime({
          targets: list[i],
          width: 0
          // delay: 100*i
        });
      }, 100 * i);
    }
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

    case "menuz animatecss":
      animateCss();
      break;
    case "menuz wave":
      wave();
      break;
  }
}
