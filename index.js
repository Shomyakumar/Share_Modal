
const shareBtn=document.querySelector("#follow-me");
const modal=document.querySelector(".modal-container");
const cross=document.querySelector(".close-btn");
const overlay=document.querySelector(".overlay");
shareBtn.addEventListener("click",open);
cross.addEventListener("click",close);
overlay.addEventListener("click",close);
function open(){
  modal.classList.add("active");
  overlay.classList.add("overlay-active");
}
function close(){
  modal.classList.remove("active");
  overlay.classList.remove("overlay-active");  
}
