let checker = true;

function btn() {

    if (checker) {
        checker = false;
        document.getElementById("but_block").style.display = "block";
        document.getElementById("btn_text").textContent = "-";
    }
    else {
        checker = true;
        document.getElementById("but_block").style.display = "none";
        document.getElementById("btn_text").textContent = "+";
    }
}