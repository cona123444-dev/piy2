setTimeout(()=>{
    document.querySelector(".intro").style.display = "none";
    document.querySelector(".main-content").style.display = "block";
    document.body.style.overflow = "auto";

    AOS.init()

}, 4000);
var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 3000)
}
function showPage() {
    const loader = document.getElementById("loader"); 
    loader.style.transition = "opacity 0.5s"; 
    loader.style.opacity = 0;    
    setTimeout(() => { 
        loader.style.display = "none"; 
        document.getElementById("myDiv").style.display = "block"; 
     }, 500);
}
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}