"use strict";

const grid = document.querySelector(".grid");

// function to create a grid

const createGrid = function (gridSize) {
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr`;

  for (let i = 0; i < gridSize ** 2; i++) {
    const gridElement = document.createElement("div");
    gridElement.textContent = i + 1;
    grid.appendChild(gridElement);
    gridElement.classList.add("cell");
  }
};

// color the cells

const changeColor = function () {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      // cell.classList.add("color");
      cell.style.backgroundColor = randomColor();
    });
  });
};

// clear button

const clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click", function () {
  grid.innerHTML = "";
  let gridSize = prompt("What size should a grid be?", 4);
  createGrid(gridSize);
  changeColor();
});

// generate random color

let randomColor = function () {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
};

// call functions
createGrid(4);
changeColor();
