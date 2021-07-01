let item = document.getElementById("bars");
let item2 = document.getElementById("times");
let x = window.innerWidth;
let grid = document.getElementById("grid");
if(x>1600){
    grid.style.gridTemplateColumns = "auto auto"
}
function showMenu() {
    item2.style.display = "block";
    item.style.display = "none";
}
function hideMenu() {
    item.style.display = "block";
    item2.style.display = "none";
}
