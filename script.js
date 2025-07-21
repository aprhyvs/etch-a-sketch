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
  } else if (setGridNumber == 0 || setGridNumber == null){
    alert("no you can't make it blank")
  } else {
    gridNumber = setGridNumber;
    setGrid()
  }
})

//extra credit #1
function rgb(){
  let red = Math.floor(Math.random() * 256); 
  let blue = Math.floor(Math.random() * 256); 
  let green = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${blue}, ${green}`
}

function clearGrid(){
  let removeGrid = document.getElementsByClassName("grid-item")
  console.log(`${gridNumber}x${gridNumber} grid added`)
  while(removeGrid.length > 0){
    removeGrid[0].parentNode.removeChild(removeGrid[0]);
  }
}

function setGrid(){
  clearGrid()
  document.body.appendChild(gridContainer) 
  gridContainer.setAttribute("class", "grid-container")
  document.querySelector(".grid-container").style.maxWidth = "512px";

  for (i = 0; i < (gridNumber * gridNumber); i++){
    let gridItem = document.createElement("div")
    gridContainer.appendChild(gridItem);
    //gridItem.textContent = `${i}`
    gridItem.classList.add("grid-item")
  }  

  const gridItemEl = document.querySelectorAll(".grid-item")

  gridItemEl.forEach(element => {
    element.style.width = (512 / gridNumber) + "px";
    element.style.height = (512 / gridNumber) + "px";
    element.style.border = "0.5px solid rgb(0,0,0, 0.25)";
  })

  gridItemEl.forEach(element => {
    element.addEventListener("mouseenter", event =>{
      if (!event.target.classList.contains("rgb")){
        event.target.style.backgroundColor = rgb();
        event.target.style.opacity = 0.1
        event.target.classList.add("rgb");        
      } else {
        console.log("this already has a color")
        console.log(`current color ` + event.target.style.backgroundColor)

        //extra credit #2
        if (event.target.style.opacity < 1){
        console.log(`opacity check ` + event.target.style.opacity)
        event.target.style.opacity = parseFloat(element.style.opacity) + 0.1; 
        }
      }      
    });
  });
} 

setGrid();