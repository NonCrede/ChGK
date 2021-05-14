let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,16,18,19,20];
let array2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

for (let i = 0; i < 100; i++) {

    let rand_number = Math.floor(Math.random() * array.length);
    let temp = array[rand_number];

    let rand = Math.floor(Math.random() * array.length);
    array[rand_number] = array[rand];
    array[rand] = temp;
}
let offset = 0;
let sector = 360 / array.length;

for (let i = 0; i < array.length; i++) {
    let r = 360 * (Math.floor(Math.random() * 3) + 1);
    let q = 0;
    if (i != 0) {
        q = array[i - 1];
    }
    if (q < array[i]) {
        array2[i] = offset + (array[i] - q) * sector + r;
    }else {
        array2[i] = offset + (360 - (q - array[i]) * sector) + r;
    }
    if (i == 0) {
        array2[i] =  array2[i] - sector / 2;
    }
    offset =  array2[i];
}
console.log(array);
console.log(array2);
let ptr = document.querySelector(".wheel_hand");
let o = 0;
ptr.addEventListener("click", function(){
    ptr.style.transition = "transform "+2500 +"ms";
    ptr.style.transform = "rotate("+ (array2[o]+ 8) + "deg)";
    o = o + 1;
});
//ptr.style.transform = "rotate("+45 + "deg)";
//ptr.style.transition = "transform "+1000 +"ms";