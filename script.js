let gridNumber = 16
let gridContainer = document.createElement("div")

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
