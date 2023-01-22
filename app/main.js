const nav = document.querySelector("#nav");
const buttons = document.querySelectorAll("a");

console.log(buttons);

window.onscroll = function() {
    scroll();
}

function scroll() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav.classList.remove("bg-header-off");
        nav.classList.add("bg-header-on");
    }
    else {
        nav.classList.remove("bg-header-on");
        nav.classList.add("bg-header-off");
    }
}
