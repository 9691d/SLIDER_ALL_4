let frame = document.querySelector(".frame");
let wrap_img = document.querySelector(".wrap_img");
let btn = document.querySelector("button");
let i = 0;
let a = 0;

btn.addEventListener("click", function () {
    a = a + 200;
    if (a > 600) {
        a = 0;
        wrap_img.style.setProperty("transition", 0);
        
       
    }
   
    // wrap_img.style.marginLeft = - a + "px";
    wrap_img.style.setProperty("margin-left", - a + "px");
})