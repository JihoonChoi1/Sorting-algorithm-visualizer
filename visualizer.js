
let array;
let barContainer = document.querySelector(".bar-container");
let numOfBars = 90;

function createRanArray() {
  array = [];
  for(let i = 0 ; i < numOfBars ; i++) {
    array.push(Math.random());
  }
}



function displayBars() {
  for(let i = 0 ; i < numOfBars ; i++) {
    const bar = document.createElement("div");
    bar.style.width = "1%";
    bar.style.height = array[i]*100 + "%";
    bar.classList.add("bar");
    barContainer.appendChild(bar);
  }
}

createRanArray();
displayBars();