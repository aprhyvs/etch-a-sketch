let gridNumber = 16
let gridContainer = document.createElement("div")
let setBtn = document.createElement("button")
let minOpacity = 0.1

//extra credit #1
function rgb(){
  let red = Math.floor(Math.random() * 256); 
  let blue = Math.floor(Math.random() * 256); 
  let green = Math.floor(Math.random() * 256);

// console.log(`rgb(${red}, ${blue}, ${green}, ${minOpacity})`)
  return `rgb(${red}, ${blue}, ${green})`
}

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
  const rgbEl = document.querySelectorAll(".rgb")

  gridItemEl.forEach(element => {
    element.style.width = (512 / gridNumber) + "px";
    element.style.height = (512 / gridNumber) + "px";
    element.style.border = "0.5px solid rgb(0,0,0, 0.25)";
  })

  gridItemEl.forEach(element => {
    element.addEventListener("mouseenter", event =>{
      if (!event.target.classList.contains("rgb")){
        event.target.style.backgroundColor = rgb();
      } else {
        console.log("this grid item already has a color")
      }
      
      event.target.classList.add("rgb");        
      
      /* trying to implement darkening effect
      element.addEventListener("mouseenter", event => {
        event.target.style.opacity = minOpacity;
        if(minOpacity < 1) {
          minOpacity += 0.1;  
        }
      });*/
    });
  });

  /*
  if (gridItemEl.classList.contains("rgb  ")){
    console.log("a element with rgb exists.")
  } else {
    console.log("nothing")
  }*/
} 

function clearGrid(){
  let removeGrid = document.getElementsByClassName("grid-item")
  console.log(`${gridNumber}x${gridNumber} grid added`)
  while(removeGrid.length > 0){
    removeGrid[0].parentNode.removeChild(removeGrid[0]);
  }

  minOpacity = 0.1
}