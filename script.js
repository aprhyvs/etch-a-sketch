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

const gridItemEl = document.querySelectorAll(".grid-item")

gridItemEl.forEach(element => {
  element.addEventListener("mouseover", event =>{
    event.target.classList.add("change")
  });
});

/*gridItemEl.forEach(element => {
  element.addEventListener("mouseout", event =>{
    event.target.classList.remove("change")
  });
});*/

