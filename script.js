let gridContainer = document.createElement("div")

document.body.appendChild(gridContainer) 

gridContainer.setAttribute("class", "grid-container")

let gridNumber = 16
//gridItem.setAttribute("id", "grid-item")

for (i = 0; i < (gridNumber * gridNumber); i++){
  let gridItem = document.createElement("div")
  gridContainer.appendChild(gridItem);
  gridItem.textContent = `${i}`
  gridItem.classList.add("grid-item")
}