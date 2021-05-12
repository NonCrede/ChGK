let ptr = document.querySelector(".wheel_hand");
let animation = ptr.animate([
    {transform: "rotate("+0 + "deg)" },
    {transform: "rotate("+430 + "deg)" },
], {
    easing: "ease-in-out",
    duration: 1000,
});
animation.addEventListener("finish", function(){
    ptr.style.transform = "rotate("+430 + "deg)";
});
//ptr.style.transform = "rotate("+45 + "deg)";
//ptr.style.transition = "transform "+1000 +"ms";
