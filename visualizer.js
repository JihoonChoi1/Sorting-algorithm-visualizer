
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
}

async function bubbleSort() {

	for(let i = array.length-1 ; i > 0 ; i--) {
		let swapped = false;
		for(let j = 0 ; j < i ; j++) {
			if(array[j] > array[j+1]) {
				swapped = true;
				let temp = array[j+1];
				array[j+1] = array[j];
				array[j] = temp;
				document.querySelector(`.bar${j}`).style.height = array[j] + "%";
				document.querySelector(`.bar${j+1}`).style.height = array[j+1] + "%";
			}
		}
		await sleep(30);
		document.querySelector(`.bar${i}`).style.backgroundColor = "green";
		if(!swapped) {
			let uncoloredBars = document.querySelectorAll('.bar');
			while(i >= 0) {
				await sleep(1);
				uncoloredBars[i].style.backgroundColor = "green";
				i--;
			}
			return;
		}
	}
}

randomizeBar();

document.querySelector(".sel-sort-button").addEventListener("click", selectionSort);
document.querySelector(".bubb-sort-button").addEventListener("click", bubbleSort);
document.querySelector(".randomize-button").addEventListener("click", randomizeBar);

