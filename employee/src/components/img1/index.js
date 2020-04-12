import React from 'react';
import logo from "./images/aerith.jpg" // Tell webpack this JS file uses this image
console.log(logo); // /logo.84287d09.png

  <img src={logo} alt="Logo" />;
function Header() {
    return  input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
export default Header;