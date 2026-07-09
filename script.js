// ======================================================
// BRODAY1 V9 Galaxy
// script.js - Part 1
// Loader • Cursor • Mouse Light • Hero • Scroll
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("BRODAY1 V9 Galaxy Loaded 🚀");

    /* ===========================
       Loader
    =========================== */

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 1200);

    });

    /* ===========================
       Fade Body
    =========================== */

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity 1s ease";

        document.body.style.opacity = "1";

    },100);

    /* ===========================
       Dynamic Title
    =========================== */

    const titles = [

        "BRODAY1",

        "Gaming",

        "Streamer",

        "Content Creator",

        "BRODAY1 Galaxy"

    ];

    let titleIndex = 0;

    setInterval(() => {

        document.title = titles[titleIndex];

        titleIndex++;

        if(titleIndex >= titles.length){

            titleIndex = 0;

        }

    },2500);

    /* ===========================
       Mouse Light
    =========================== */

    const light = document.querySelector(".mouse-light");

    document.addEventListener("mousemove",(e)=>{

        if(!light) return;

        light.style.left = e.clientX + "px";
        light.style.top = e.clientY + "px";

    });

    /* ===========================
       Custom Cursor
    =========================== */

    const cursor = document.querySelector(".cursor");

    const cursor2 = document.querySelector(".cursor2");

    document.addEventListener("mousemove",(e)=>{

        if(cursor){

            cursor.style.left = e.clientX+"px";
            cursor.style.top = e.clientY+"px";

        }

        if(cursor2){

            cursor2.style.left = e.clientX+"px";
            cursor2.style.top = e.clientY+"px";

        }

    });

    document.addEventListener("mousedown",()=>{

        cursor?.classList.add("active");

    });

    document.addEventListener("mouseup",()=>{

        cursor?.classList.remove("active");

    });

    /* ===========================
       Hero Animation
    =========================== */

    const hero = document.querySelector(".hero");

    if(hero){

        hero.animate(

        [

            {

                transform:"translateY(50px)",

                opacity:0

            },

            {

                transform:"translateY(0)",

                opacity:1

            }

        ],

        {

            duration:1200,

            easing:"ease"

        });

    }

    /* ===========================
       Profile Hover
    =========================== */

    const profile = document.querySelector(".profile");

    if(profile){

        profile.addEventListener("mouseenter",()=>{

            profile.style.transform="scale(1.08) rotate(3deg)";

        });

        profile.addEventListener("mouseleave",()=>{

            profile.style.transform="";

        });

    }

    /* ===========================
       Buttons Hover
    =========================== */

    document.querySelectorAll("a").forEach(button=>{

        button.addEventListener("mouseenter",()=>{

            button.style.transform="translateY(-5px) scale(1.03)";

        });

        button.addEventListener("mouseleave",()=>{

            button.style.transform="";

        });

    });

    /* ===========================
       Scroll Animation
    =========================== */

    window.addEventListener("scroll",()=>{

        const value = window.scrollY;

        document.querySelector(".bg").style.transform =
        `translateY(${value*0.15}px)`;

    });

});// ======================================================
// BRODAY1 V9 Galaxy
// script.js - Part 2
// Music • Theme • Back To Top • Counters • Reveal
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       Music Player
    =========================== */

    const music = document.getElementById("music");
    const playBtn = document.getElementById("playMusic");

    const progress = document.getElementById("progress");
    const volume = document.getElementById("volume");

    const currentTime = document.getElementById("currentTime");
    const duration = document.getElementById("duration");

    if(music){

        music.volume = 0.4;

        music.addEventListener("loadedmetadata",()=>{

            progress.max = Math.floor(music.duration);

            duration.textContent = formatTime(music.duration);

        });

        music.addEventListener("timeupdate",()=>{

            progress.value = Math.floor(music.currentTime);

            currentTime.textContent = formatTime(music.currentTime);

        });

        music.addEventListener("ended",()=>{

            playBtn.innerHTML =
            '<i class="fas fa-play"></i>';

            progress.value = 0;

        });

    }

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

    if(progress){

        progress.addEventListener("input",()=>{

            music.currentTime = progress.value;

        });

    }

    if(volume){

        volume.addEventListener("input",()=>{

            music.volume = volume.value / 100;

        });

    }

    function formatTime(time){

        const min = Math.floor(time / 60);

        const sec = Math.floor(time % 60);

        return `${min}:${sec < 10 ? "0" : ""}${sec}`;

    }

    /* ===========================
       Theme Toggle
    =========================== */

    const themeBtn =
    document.getElementById("theme-toggle");

    if(themeBtn){

        themeBtn.addEventListener("click",()=>{

            document.body.classList.toggle("light-mode");

            if(document.body.classList.contains("light-mode")){

                themeBtn.innerHTML =
                "☀️ Light Mode";

            }

            else{

                themeBtn.innerHTML =
                "🌙 Dark Mode";

            }

        });

    }

    /* ===========================
       Back To Top
    =========================== */

    const back =
    document.getElementById("backToTop");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 350){

            back.style.display = "flex";

        }

        else{

            back.style.display = "none";

        }

    });

    back?.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    /* ===========================
       Animated Counters
    =========================== */

    const counters =
    document.querySelectorAll(".stat-card h2");

    counters.forEach(counter=>{

        const target =
        parseInt(counter.innerText);

        if(isNaN(target)) return;

        let current = 0;

        const update = ()=>{

            current += Math.ceil(target / 60);

            if(current >= target){

                counter.innerText = target + "+";

            }

            else{

                counter.innerText = current + "+";

                requestAnimationFrame(update);

            }

        };

        update();

    });

    /* ===========================
       Reveal Animation
    =========================== */

    const revealItems =
    document.querySelectorAll(

        ".stat-card,.game-card,.setup-card,.discord-card,.contact"

    );

    const observer =
    new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                "translateY(0)";

            }

        });

    },{

        threshold:0.2

    });

    revealItems.forEach(item=>{

        item.style.opacity = "0";

        item.style.transform =
        "translateY(40px)";

        item.style.transition =
        ".8s ease";

        observer.observe(item);

    });

});// ======================================================
// BRODAY1 V9 Galaxy
// script.js - Part 3
// Galaxy • Particles • Performance • Final Effects
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       Galaxy Parallax
    =========================== */

    const video = document.querySelector(".video-bg");

    window.addEventListener("scroll", () => {

        if(video){

            video.style.transform =
            `translateY(${window.scrollY * 0.25}px)`;

        }

    });

    /* ===========================
       Floating Cards
    =========================== */

    document.querySelectorAll(
        ".game-card,.stat,.music-player,.hero-btn"
    ).forEach((card,index)=>{

        card.animate(

        [

            {

                transform:"translateY(0px)"

            },

            {

                transform:"translateY(-8px)"

            },

            {

                transform:"translateY(0px)"

            }

        ],

        {

            duration:3500 + (index * 300),

            iterations:Infinity,

            easing:"ease-in-out"

        });

    });

    /* ===========================
       Glow Mouse Effect
    =========================== */

    document.addEventListener("mousemove",(e)=>{

        document.documentElement.style.setProperty(

            "--mouse-x",

            e.clientX + "px"

        );

        document.documentElement.style.setProperty(

            "--mouse-y",

            e.clientY + "px"

        );

    });

    /* ===========================
       Ripple Buttons
    =========================== */

    document.querySelectorAll("button,a").forEach(btn=>{

        btn.addEventListener("click",(e)=>{

            const ripple =
            document.createElement("span");

            ripple.className = "ripple";

            ripple.style.left =
            e.offsetX + "px";

            ripple.style.top =
            e.offsetY + "px";

            btn.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },700);

        });

    });

    /* ===========================
       Keyboard Shortcuts
    =========================== */

    document.addEventListener("keydown",(e)=>{

        if(e.code === "Space"){

            const music =
            document.getElementById("music");

            const play =
            document.getElementById("playMusic");

            if(music){

                e.preventDefault();

                if(music.paused){

                    music.play();

                    if(play){

                        play.innerHTML =
                        '<i class="fas fa-pause"></i>';

                    }

                }

                else{

                    music.pause();

                    if(play){

                        play.innerHTML =
                        '<i class="fas fa-play"></i>';

                    }

                }

            }

        }

    });

    /* ===========================
       FPS Friendly
    =========================== */

    let ticking = false;

    window.addEventListener("scroll",()=>{

        if(!ticking){

            requestAnimationFrame(()=>{

                ticking = false;

            });

            ticking = true;

        }

    });

    /* ===========================
       Console Signature
    =========================== */

    console.log(

`%c
██████╗ ██████╗  ██████╗
██╔══██╗██╔══██╗██╔═══██╗
██████╔╝██████╔╝██║   ██║
██╔══██╗██╔══██╗██║   ██║
██████╔╝██║  ██║╚██████╔╝
╚═════╝ ╚═╝  ╚═╝ ╚═════╝

BRODAY1 V9 GALAXY
`,

"color:#00aaff;font-size:14px;font-weight:bold"

);

    console.log("Galaxy Mode Activated ⭐");

});

/* ===========================
   tsParticles Galaxy
=========================== */

tsParticles.load("particles-js",{

    fullScreen:{
        enable:false
    },

    background:{
        color:"transparent"
    },

    fpsLimit:60,

    particles:{

        number:{
            value:120,
            density:{
                enable:true,
                area:900
            }
        },

        color:{
            value:[
                "#00aaff",
                "#00ffff",
                "#ffffff"
            ]
        },

        links:{
            enable:true,
            color:"#00aaff",
            distance:170,
            opacity:.25,
            width:1
        },

        move:{
            enable:true,
            speed:1.2,
            outModes:{
                default:"bounce"
            }
        },

        opacity:{
            value:.7
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
                    opacity:1
                }

            },

            push:{

                quantity:5

            }

        }

    }

});

console.log("🚀 BRODAY1 V9 Galaxy Ready");
