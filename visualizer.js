
let array;
let barContainer = document.querySelector(".bar-container");
let numOfBars = 90;

function createRanArray() {
	array = [];
	for(let i = 0 ; i < numOfBars ; i++) {
		array.push(Math.random()*100);
	}
}

function initializeBars() {
	barContainer.innerHTML = "";
	for(let i = 0 ; i < numOfBars ; i++) {
		const bar = document.createElement("div");
		bar.style.width = "1%";
		bar.style.height = array[i] + "%";
		bar.classList.add("bar", `bar${i}`);
		barContainer.appendChild(bar);
	}
}

function randomizeBar() {
	createRanArray();
	initializeBars();
}

const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

async function selectionSort() {
	let minBarInd = 0;
  	for(let i = 0 ; i < array.length-1 ; i++) {
      	let minInd = i;
      	for(let j = i+1 ; j < array.length ; j++) {
        	if(array[j] < array[minInd]) {
          		minInd = j;
        	}
      	}
		await sleep(30);
      	let temp = array[i];
      	array[i] = array[minInd];
      	array[minInd] = temp;
		document.querySelector(`.bar${i}`).style.height = array[i] + "%";
		document.querySelector(`.bar${minInd}`).style.height = array[minInd] + "%";
		document.querySelector(`.bar${i}`).style.backgroundColor = "green";
  	}
	document.querySelector(`.bar${array.length-1}`).style.backgroundColor = "green";
	//displayBars();
}

randomizeBar();

document.querySelector(".sort-button").addEventListener("click", selectionSort);
document.querySelector(".randomize-button").addEventListener("click", randomizeBar);

