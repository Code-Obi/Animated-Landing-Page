"use strict"
let input = document.getElementsByTagName("input")[3];
let btn = document.getElementsByTagName("img")[3];
btn.addEventListener("click", () => {
    if (input.type == "password") {
        input.type = "text";
        btn.src = "icon/hiddenEye.png";
    } else {
        input.type = "password";
        btn.src = "icon/openEye.png";
    }
})