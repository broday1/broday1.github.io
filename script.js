// Welcome
console.log("BRODAY1 Website Loaded");

// Smooth Fade In
document.addEventListener("DOMContentLoaded", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "1s";
        document.body.style.opacity = "1";
    },100);

});

// Neon Hover Effect
const buttons = document.querySelectorAll(".buttons a");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.boxShadow="0 0 25px #00aaff";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.boxShadow="none";

    });

});

// Dynamic Title
const titles=[
    "BRODAY1",
    "Gaming",
    "Content Creator",
    "Welcome"
];

let i=0;

setInterval(()=>{

    document.title=titles[i];

    i++;

    if(i>=titles.length){
        i=0;
    }

},2500);
