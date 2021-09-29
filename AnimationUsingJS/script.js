const containerWidth = 1000;
const containerHeight = 500;

// Generating random number
const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

const circleRandomHeight = parseInt(getRandomNumber(0, containerHeight));
const circleRandomWidth = parseInt(getRandomNumber(0, containerWidth));
const squareRandomHeight = parseInt(getRandomNumber(0, containerHeight));
const squareRandomWidth = parseInt(getRandomNumber(0, containerWidth));

// Function for creating circle
const createCircle = () => {
  const circle = document.createElement("div");
  circle.id = "circle";
  circle.style.position = "absolute";
  circle.style.width = "150px";
  circle.style.height = "150px";
  circle.style.top = `${circleRandomHeight}px`;
  circle.style.left = `${circleRandomWidth}px`;
  circle.style.border = "thick solid #F00";
  circle.style["border-radius"] = "50%";
  document.body.appendChild(circle);
};

// Function for creating square
const createSquare = () => {
  const square = document.createElement("div");
  square.id = "square";
  square.style.position = "absolute";
  square.style.top = `${squareRandomHeight}px`;
  square.style.left = `${squareRandomWidth}px`;
  square.style.width = "150px";
  square.style.height = "150px";
  square.style.border = "thick solid #0000FF";
  document.body.appendChild(square);
};

createCircle();
createSquare();


// Moving object using setInterval in x and y axis
const moveAnimation = () => {
  let id = null;
  const circle = document.getElementById("circle");

  let hpos = circleRandomHeight;
  let wpos = circleRandomWidth;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (wpos == squareRandomWidth && hpos == squareRandomHeight) {
      clearInterval(id);
    } else {
      if (hpos < squareRandomHeight) {
        hpos++;
        circle.style.top = `${hpos}px`;
      } else if (hpos > squareRandomHeight) {
        hpos--;
        circle.style.top = `${hpos}px`;
      }
      if (wpos < squareRandomWidth) {
        wpos++;
        circle.style.left = `${wpos}px`;
      } else if (wpos > squareRandomWidth) {
        wpos--;
        circle.style.left = `${wpos}px`;
      }
    }
  }
};

// Triggering moveAnimation function on click of square object 
document.getElementById("square").onclick = () => {
  moveAnimation();
};
