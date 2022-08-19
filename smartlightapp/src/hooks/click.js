export function click(e){

  let bg = document.getElementById("mainBg");

  let controls = document.getElementById("controls");

  let rooms = document.getElementById("buttonsContainer");

  let pwr_btn = document.getElementById("power_button");
  
  if (e.target.nextElementSibling == document.getElementById("home")){
  controls.classList.remove("ani_controls");
  bg.classList.remove("selected");
  bg.classList.add("unselected");
  rooms.classList.remove("ani_rooms")
  pwr_btn.classList.add("opacityNon");
  return;
  }

  let element = e.target.parentElement;
  
  let element_name = element.children[2].innerText;

  rooms.classList.add("ani_rooms")  

  bg.classList.remove("unselected");

  bg.classList.add("selected");

  pwr_btn.classList.remove("opacityNon");


  controls.classList.add("ani_controls");


  // console.dir(element);

  // console.log(element_name);

}