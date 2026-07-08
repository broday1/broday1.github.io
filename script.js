// ======================================
// BRODAY1 V7 Ultimate
// Part 1
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Fade In
    ========================== */

    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity .8s ease";
        document.body.style.opacity = "1";
    }, 100);

    /* ==========================
       Dynamic Title
    ========================== */

    const titles = [
        "BRODAY1",
        "Gaming",
        "Streamer",
        "Content Creator",
        "Welcome To BRODAY1"
    ];

    let title = 0;

    setInterval(() => {

        document.title = titles[title];

        title++;

        if (title >= titles.length) {

            title = 0;

        }

    }, 2500);

    /* ==========================
       Cursor
    ========================== */

    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", e => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

    document.addEventListener("mousedown", () => {

        cursor.classList.add("active");

    });

    document.addEventListener("mouseup", () => {

        cursor.classList.remove("active");

    });

    /* ==========================
       Mouse Light
    ========================== */

    const mouseLight = document.querySelector(".mouse-light");

    document.addEventListener("mousemove", e => {

        mouseLight.style.left = e.clientX + "px";
        mouseLight.style.top = e.clientY + "px";

    });

    /* ==========================
       Profile Hover
    ========================== */

    const profile = document.querySelector(".profile");

    profile.addEventListener("mouseenter", () => {

        profile.style.transform = "scale(1.08)";
        profile.style.boxShadow =
            "0 0 40px #00aaff,0 0 90px #00aaff";

    });

    profile.addEventListener("mouseleave", () => {

        profile.style.transform = "";
        profile.style.boxShadow = "";

    });

    /* ==========================
       Hero Buttons Animation
    ========================== */

    document.querySelectorAll(".hero-btn").forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform = "translateY(-6px) scale(1.05)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "";

        });

    });

});/* ======================================
   Music Player
====================================== */

const music = document.getElementById("music");
const playBtn = document.getElementById("playMusic");

const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

if (music) {

    music.volume = 0.4;

}

function formatTime(time){

    if(isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

}

/* ==========================
   Play / Pause
========================== */

if(playBtn){

    playBtn.addEventListener("click",()=>{

        if(music.paused){

            music.play();

            playBtn.innerHTML =
            '<i class="fas fa-pause"></i>';

        }

        else{

            music.pause();

            playBtn.innerHTML =
            '<i class="fas fa-play"></i>';

        }

    });

}

/* ==========================
   Duration
========================== */

music.addEventListener("loadedmetadata",()=>{

    progress.max = Math.floor(music.duration);

    duration.textContent =
    formatTime(music.duration);

});

/* ==========================
   Update Progress
========================== */

music.addEventListener("timeupdate",()=>{

    progress.value = Math.floor(music.currentTime);

    currentTime.textContent =
    formatTime(music.currentTime);

});

/* ==========================
   Seek
========================== */

progress.addEventListener("input",()=>{

    music.currentTime = progress.value;

});

/* ==========================
   Volume
========================== */

volume.addEventListener("input",()=>{

    music.volume = volume.value / 100;

});

/* ==========================
   Song End
========================== */

music.addEventListener("ended",()=>{

    playBtn.innerHTML =
    '<i class="fas fa-play"></i>';

    progress.value = 0;

});

/* ==========================
   Keyboard Shortcuts
========================== */

document.addEventListener("keydown",(e)=>{

    // Space

    if(e.code==="Space"){

        e.preventDefault();

        playBtn.click();

    }

    // Arrow Right

    if(e.code==="ArrowRight"){

        music.currentTime += 5;

    }

    // Arrow Left

    if(e.code==="ArrowLeft"){

        music.currentTime -= 5;

    }

    // Arrow Up

    if(e.code==="ArrowUp"){

        music.volume =
        Math.min(1,music.volume+0.05);

        volume.value = music.volume*100;

    }

    // Arrow Down

    if(e.code==="ArrowDown"){

        music.volume =
        Math.max(0,music.volume-0.05);

        volume.value = music.volume*100;

    }

});

console.log("🎵 Music Player Ready");/* ======================================
   Theme Toggle
====================================== */

const themeBtn = document.getElementById("theme-toggle");

if(themeBtn){

    themeBtn.addEventListener("click",()=>{

        document.body.classList.toggle("light-mode");

        if(document.body.classList.contains("light-mode")){

            themeBtn.innerHTML="☀️ Light Mode";

        }

        else{

            themeBtn.innerHTML="🌙 Dark Mode";

        }

    });

}

/* ======================================
   Back To Top
====================================== */

const back=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>250){

        back.style.display="flex";

    }

    else{

        back.style.display="none";

    }

});

back.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ======================================
   Scroll Reveal
====================================== */

const revealElements=document.querySelectorAll(

".stat,.links a,.music-player,.footer"

);

const reveal=()=>{

    revealElements.forEach(el=>{

        const top=el.getBoundingClientRect().top;

        if(top<window.innerHeight-80){

            el.style.opacity="1";

            el.style.transform="translateY(0)";

        }

    });

};

revealElements.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(40px)";

    el.style.transition=".8s";

});

window.addEventListener("scroll",reveal);

reveal();

/* ======================================
   tsParticles
====================================== */

tsParticles.load("particles-js",{

    fullScreen:{
        enable:false
    },

    fpsLimit:60,

    background:{
        color:"transparent"
    },

    particles:{

        number:{
            value:90,
            density:{
                enable:true,
                area:900
            }
        },

        color:{
            value:"#00aaff"
        },

        links:{
            enable:true,
            color:"#00aaff",
            distance:150,
            opacity:.35,
            width:1
        },

        move:{
            enable:true,
            speed:1.5,
            outModes:{
                default:"bounce"
            }
        },

        opacity:{
            value:.6
        },

        size:{
            value:{
                min:1,
                max:4
            }
        }

    },

    interactivity:{

        events:{

            onHover:{
                enable:true,
                mode:"grab"
            },

            onClick:{
                enable:true,
                mode:"push"
            },

            resize:true

        },

        modes:{

            grab:{
                distance:180,
                links:{
                    opacity:.8
                }
            },

            push:{
                quantity:4
            }

        }

    }

});

/* ======================================
   Console
====================================== */

console.clear();

console.log("%cBRODAY1 V7 Ultimate",
"color:#00aaff;font-size:22px;font-weight:bold;");

console.log("%cWebsite Loaded Successfully 🚀",
"color:#00ff99;font-size:14px;");
