const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
const addtocart = document.getElementById("addtocart");

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

addtocart.addEventListener("click", () => {
    // Display a pop-up alert when the button is clicked
    alert("Added to cart successfully!");
});