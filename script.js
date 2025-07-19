let gridNumber = 16
let gridContainer = document.createElement("div")
let setBtn = document.createElement("button")

document.body.append(setBtn)
setBtn.setAttribute("id", "set-btn")

const setBtnEl = document.getElementById("set-btn")
setBtnEl.textContent = "Set grid"

setBtnEl.addEventListener("click", () => {
  let setGridNumber = prompt("enter number")
  
  if (setGridNumber > 100){
    alert("no you can't do more than a 100")
  } else {
    gridNumber = setGridNumber;
    setGrid()
  }
})

function setGrid(){
  clearGrid()
  document.body.appendChild(gridContainer) 
  gridContainer.setAttribute("class", "grid-container")

  document.querySelector(".grid-container").style.maxWidth = "512px";

  for (i = 0; i < (gridNumber * gridNumber); i++){
    let gridItem = document.createElement("div")
    gridContainer.appendChild(gridItem);
    gridItem.textContent = `${i}`
    gridItem.classList.add("grid-item")
  }  

  const gridItemEl = document.querySelectorAll(".grid-item")

  gridItemEl.forEach(element => {
    element.style.width = (512 / gridNumber) + "px";
    element.style.height = (512 / gridNumber) + "px";
    element.style.border = "0.5px solid black";
  })

  gridItemEl.forEach(element => {
    element.addEventListener("mouseover", event =>{
      event.target.style.backgroundColor = "black";
    });
  });
} 

function clearGrid(){
  let removeGrid = document.getElementsByClassName("grid-item")
  console.log(`${removeGrid.length}x${removeGrid.length} grid removed`)
  while(removeGrid.length > 0){
    removeGrid[0].parentNode.removeChild(removeGrid[0]);
  }
}