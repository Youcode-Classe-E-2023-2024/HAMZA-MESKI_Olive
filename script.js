"use sctrict"; 

let slides = document.querySelectorAll(".horbox");
let left = document.querySelector(".left");
let rigth = document.querySelector(".right");

let i = 1;
rigth.addEventListener("click", function() {
    if( i + 1 < slides.length - 1) {
        slides[i-1].classList.add("hidden");
        i++;
        console.log(i)
    }
})

left.addEventListener("click", function() {
    if(i - 2 >= 0 ) {
        slides[i-2].classList.remove("hidden");
        i--;
        console.log(i)

    }
})

