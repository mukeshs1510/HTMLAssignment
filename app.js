let counter = 1;
const slide = document.querySelectorAll(".image-container");

function autoSlide() {
  counter += 1;
  sliderFunction(counter);
}

function clickImageBtn(n) {
  counter += n;
  sliderFunction(counter);
}

function sliderFunction(mCounter) {
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  if (mCounter > slide.length) {
    counter = 1;
  }
  if (mCounter < 1) {
    counter = slide.length;
  }
  slide[counter - 1].style.display = "block";
}

var arrows = document.querySelectorAll(".arrow-span");
var container = document.querySelectorAll(".categories-card");
var cardCounter = 0;

arrows[1].addEventListener("click", () => {
  cardCounter++;
  for (var i of container) {
    if (cardCounter == 0) {
      i.style.left = "0px";
    }
    if (cardCounter == 1) {
      i.style.left = "-280px";
    }
    if (cardCounter == 2) {
      i.style.left = "-560px";
    }
    if (cardCounter > 2) {
      i = 2;
    }
  }
});
arrows[0].addEventListener("click", () => {
  cardCounter--;
  for (var i of container) {
    if (cardCounter == 0) {
      i.style.left = "0px";
    }
    if (cardCounter == 1) {
      i.style.left = "-280px";
    }
    if (cardCounter == 2) {
      i.style.left = "-560px";
    }
    if (cardCounter < 0) {
      i = 0;
    }
  }
});

var arrowsItems = document.querySelectorAll(".arrow-span-latest");
var containerItems = document.querySelectorAll(".latest-prod-card");
var cardCounterItems = 0;

arrowsItems[1].addEventListener("click", () => {
  cardCounterItems++;
  for (var i of containerItems) {
    if (cardCounterItems == 0) {
      i.style.left = "0px";
    }
    if (cardCounterItems == 1) {
      i.style.left = "-280px";
    }
    if (cardCounterItems == 2) {
      i.style.leftItems = "-560px";
    }
    if (cardCounterItems == 3) {
      i.style.left = "-840px";
    }
    if (cardCounterItems == 4) {
      i.style.left = "-1120px";
    }
    if (cardCounterItems > 5) {
      i = 4;
    }
  }
});
arrowsItems[0].addEventListener("click", () => {
  cardCounterItems--;
  for (var i of containerItems) {
    if (cardCounterItems == 0) {
      i.style.left = "0px";
    }
    if (cardCounterItems == 1) {
      i.style.left = "-280px";
    }
    if (cardCounterItems == 2) {
      i.style.left = "-560px";
    }
    if (cardCounterItems == 3) {
      i.style.left = "-840px";
    }
    if (cardCounterItems == 4) {
      i.style.left = "-1120px";
    }
    if (cardCounterItems < 0) {
      i = 0;
    }
  }
});
