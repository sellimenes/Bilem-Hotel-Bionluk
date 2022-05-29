const oda1 = document.getElementById("oda1");
const oda2 = document.getElementById("oda2");
const oda3 = document.getElementById("oda3");
const oda4 = document.getElementById("oda4");

const odaMeta1 = document.getElementById("odaMeta1");
const odaMeta2 = document.getElementById("odaMeta2");
const odaMeta3 = document.getElementById("odaMeta3");
const odaMeta4 = document.getElementById("odaMeta4");

function odaClickHandler1() {
  odaMeta1.classList.toggle("displayNone");
  oda1.classList.toggle("oda1Bg");
}

function odaClickHandler2() {
  odaMeta2.classList.toggle("displayNone");
  oda2.classList.toggle("oda2Bg");
}

function odaClickHandler3() {
  odaMeta3.classList.toggle("displayNone");
  oda3.classList.toggle("oda3Bg");
}

function odaClickHandler4() {
  odaMeta4.classList.toggle("displayNone");
  oda4.classList.toggle("oda4Bg");
}

// Yeni Slider Başlangıç
var slider = document.querySelector(".items"),
  arrows = document.querySelectorAll(
    ".wrapper-slider .arrow-left, .wrapper-slider .arrow-right"
  ),
  isDown = false,
  startX,
  scrollLeft;

slider.scrollLeft = 1970;

slider.onmousedown = function (e) {
  "use strict";
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

slider.onmouseup = function () {
  "use strict";
  isDown = false;
  slider.classList.remove("active");
};

slider.onmouseleave = function () {
  "use strict";
  isDown = false;
  slider.classList.remove("active");
};

slider.onmousemove = function (e) {
  "use strict";
  if (!isDown) {
    return;
  }
  e.preventDefault();
  var x = e.pageX - slider.offsetLeft,
    walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
};

function controlsSlider(num) {
  "use strict";
  var smooth = setInterval(function () {
    slider.scrollLeft += num;
  }, 10);
  setTimeout(function () {
    clearInterval(smooth);
  }, 210);
}
arrows[0].onclick = function () {
  "use strict";
  controlsSlider(-10);
};

arrows[1].onclick = function () {
  "use strict";
  controlsSlider(10);
};

window.onkeydown = function (e) {
  "use strict";
  var key = e.keyCode;
  if (key === 39) {
    controlsSlider(10);
  }
  if (key === 37) {
    controlsSlider(-10);
  }
};

// Yeni Slider Bitiş

// Hero Slider Başlangıç
let sliderList = [
  "hero-background-1.jpg",
  "hero-background-2.jpg",
  "hero-background-3.jpg",
];

const hero = document.querySelector(".hero");
let j = 0;
function autoSlider() {
  hero.style.background = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url("./images/${sliderList[j]}")`;
  hero.style.backgroundRepeat = "no-repeat";
  hero.style.backgroundSize = "cover";
  hero.style.backgroundPosition = "center";
  j++;
  if (j == sliderList.length) {
    j = 0;
  }
}
autoSlider();
setInterval(autoSlider, 5000);

// NAVBAR

const hamburger = document.querySelector("nav ul + i");

const navbar = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// doubleClick event

function odaDblClickHandler1() {
  window.open("https://www.google.com");
}

function odaDblClickHandler2() {
  window.open("https://www.google.com");
}

function odaDblClickHandler3() {
  window.open("https://www.google.com");
}

function odaDblClickHandler4() {
  window.open("https://www.google.com");
}

var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

if (viewportWidth <= 850) {
  oda1.addEventListener("dblclick", odaDblClickHandler1);
  oda2.addEventListener("dblclick", odaDblClickHandler2);
  oda3.addEventListener("dblclick", odaDblClickHandler3);
  oda4.addEventListener("dblclick", odaDblClickHandler4);
}

var touchtime = 0;
$("#oda1").on("click", function (e) {
  e.preventDefault;
  //DoubleCLick function
  if (touchtime == 0) {
    touchtime = new Date().getTime();
  } else {
    if (new Date().getTime() - touchtime < 800) {
      odaDblClickHandler1();
      touchtime = 0;
    } else {
      touchtime = new Date().getTime();
    }
  }
});

$("#oda2").on("click", function (e) {
  e.preventDefault;
  //DoubleCLick function
  if (touchtime == 0) {
    touchtime = new Date().getTime();
  } else {
    if (new Date().getTime() - touchtime < 800) {
      odaDblClickHandler2();
      touchtime = 0;
    } else {
      touchtime = new Date().getTime();
    }
  }
});

$("#oda3").on("click", function (e) {
  e.preventDefault;
  //DoubleCLick function
  if (touchtime == 0) {
    touchtime = new Date().getTime();
  } else {
    if (new Date().getTime() - touchtime < 800) {
      odaDblClickHandler3();
      touchtime = 0;
    } else {
      touchtime = new Date().getTime();
    }
  }
});

$("#oda4").on("click", function (e) {
  e.preventDefault;
  //DoubleCLick function
  if (touchtime == 0) {
    touchtime = new Date().getTime();
  } else {
    if (new Date().getTime() - touchtime < 800) {
      odaDblClickHandler4();
      touchtime = 0;
    } else {
      touchtime = new Date().getTime();
    }
  }
});
