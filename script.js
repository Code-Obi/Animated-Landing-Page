"use strict"
let pass = document.querySelector("#pass");
let passPreviewImg = document.querySelector("#passPreviewImg");
passPreviewImg.addEventListener("click", () => {
    if (pass.type == "password") {
        pass.type = "text";
        passPreviewImg.src = "https://cdn-icons-png.flaticon.com/128/10812/10812267.png";
    } else {
        pass.type = "password";
        passPreviewImg.src =
          "https://cdn-icons-png.flaticon.com/128/159/159604.png";
    }
});