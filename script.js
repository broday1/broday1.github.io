// ======================================================
// BRODAY1 V8 Infinity
// Part 1
// Loader + Fade + Dynamic Title + Cursor
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("BRODAY1 V8 Infinity Loaded");

    /* =====================================
       Fade In
    ===================================== */

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity 1s ease";

        document.body.style.opacity = "1";

    },100);

    /* =====================================
       Dynamic Browser Title
    ===================================== */

    const titles = [

        "BRODAY1",

        "Gaming",

        "Streamer",

        "Content Creator",

        "Welcome To BRODAY1"

    ];

    let titleIndex = 0;

    setInterval(()=>{

        document.title = titles[titleIndex];

        titleIndex++;

        if(titleIndex >= titles.length){

            titleIndex = 0;

        }

    },2500);

    /* =====================================
       Profile Hover
    ===================================== */

    const profile = document.querySelector(".profile");

    if(profile){

        profile.addEventListener("mouseenter",()=>{

            profile.style.transform="scale(1.06) rotate(2deg)";

            profile.style.boxShadow="0 0 70px #00d4ff";

        });

        profile.addEventListener("mouseleave",()=>{

            profile.style.transform="";

            profile.style.boxShadow="";

        });

    }

    /* =====================================
       Mouse Light
    ===================================== */

    const light = document.querySelector(".mouse-light");

    document.addEventListener("mousemove",(e)=>{

        if(light){

            light.style.left = e.clientX + "px";

            light.style.top = e.clientY + "px";

        }

    });

    /* =====================================
       Gaming Cursor
    ===================================== */

    const cursor = document.querySelector(".cursor");

    if(cursor){

        document.addEventListener("mousemove",(e)=>{

            cursor.style.left = e.clientX + "px";

            cursor.style.top = e.clientY + "px";

        });

        document.addEventListener("mousedown",()=>{

            cursor.classList.add("active");

        });

        document.addEventListener("mouseup",()=>{

            cursor.classList.remove("active");

        });

    }

    /* =====================================
       Hero Buttons Animation
    ===================================== */

    document.querySelectorAll(".hero-btn").forEach(btn=>{

        btn.addEventListener("mouseenter",()=>{

            btn.style.transform="translateY(-8px) scale(1.05)";

        });

        btn.addEventListener("mouseleave",()=>{

            btn.style.transform="";

        });

    });

    /* =====================================
       Social Links Animation
    ===================================== */

    document.querySelectorAll(".links a").forEach(link=>{

        link.addEventListener("mouseenter",()=>{

            link.style.transform="translateY(-8px)";

            link.style.boxShadow="0 0 35px rgba(0,170,255,.45)";

        });

        link.addEventListener("mouseleave",()=>{

            link.style.transform="";

            link.style.boxShadow="";

        });

    });

});// ======================================================
// BRODAY1 V8 Infinity
// Part 2
// Music + Theme + Back To Top + Counter
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       Theme Toggle
    ===================================== */

    const themeBtn = document.getElementById("theme-toggle");

    if(themeBtn){

        themeBtn.addEventListener("click",()=>{

            document.body.classList.toggle("light-mode");

            if(document.body.classList.contains("light-mode")){

                themeBtn.innerHTML="☀️ Light Mode";

            }else{

                themeBtn.innerHTML="🌙 Dark Mode";

            }

        });

    }

    /* =====================================
       Music Player
    ===================================== */

    const music=document.getElementById("music");

    const playBtn=document.getElementById("playMusic");

    const progress=document.getElementById("progress");

    const volume=document.getElementById("volume");

    const current=document.getElementById("currentTime");

    const duration=document.getElementById("duration");

    if(music){

        music.volume=0.4;

    }

    function formatTime(time){

        const min=Math.floor(time/60);

        const sec=Math.floor(time%60);

        return `${min}:${sec<10?"0":""}${sec}`;

    }

    if(playBtn){

        playBtn.addEventListener("click",()=>{

            if(music.paused){

                music.play();

                playBtn.innerHTML='<i class="fas fa-pause"></i>';

            }else{

                music.pause();

                playBtn.innerHTML='<i class="fas fa-play"></i>';

            }

        });

    }

    if(music){

        music.addEventListener("loadedmetadata",()=>{

            progress.max=Math.floor(music.duration);

            duration.textContent=formatTime(music.duration);

        });

        music.addEventListener("timeupdate",()=>{

            progress.value=music.currentTime;

            current.textContent=formatTime(music.currentTime);

        });

        music.addEventListener("ended",()=>{

            playBtn.innerHTML='<i class="fas fa-play"></i>';

            progress.value=0;

        });

    }

    if(progress){

        progress.addEventListener("input",()=>{

            music.currentTime=progress.value;

        });

    }

    if(volume){

        volume.addEventListener("input",()=>{

            music.volume=volume.value/100;

        });

    }

    /* =====================================
       Back To Top
    ===================================== */

    const back=document.getElementById("backToTop");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>350){

            back.style.display="flex";

        }else{

            back.style.display="none";

        }

    });

    if(back){

        back.addEventListener("click",()=>{

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }

    /* =====================================
       Animated Stats
    ===================================== */

    const counters=document.querySelectorAll(".stat-card h2");

    let started=false;

    function animateCounter(){

        if(started) return;

        const section=document.querySelector(".stats-section");

        if(!section) return;

        const trigger=section.getBoundingClientRect().top;

        if(trigger<window.innerHeight-100){

            started=true;

            counters.forEach(counter=>{

                const text=counter.innerText;

                const number=parseInt(text);

                if(isNaN(number)) return;

                let current=0;

                const speed=Math.ceil(number/60);

                const timer=setInterval(()=>{

                    current+=speed;

                    if(current>=number){

                        current=number;

                        clearInterval(timer);

                    }

                    counter.innerText=current+"+";

                },25);

            });

        }

    }

    window.addEventListener("scroll",animateCounter);

    animateCounter();

});// ======================================================
// BRODAY1 V8 Infinity
// Part 3
// Particles + Scroll Reveal + Parallax + Premium Effects
// ======================================================

/* =====================================
   tsParticles
===================================== */

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
            distance:160,
            opacity:.3,
            width:1
        },

        move:{
            enable:true,
            speed:1.5,
            direction:"none",
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
                quantity:4
            }

        }

    }

});

/* =====================================
   Scroll Reveal
===================================== */

const reveals=document.querySelectorAll(

".hero,.stat-card,.links a,.game-card,.music-player,.contact,.footer"

);

function revealAnimation(){

    reveals.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<window.innerHeight-100){

            item.style.opacity="1";

            item.style.transform="translateY(0)";

        }

    });

}

reveals.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(50px)";

    item.style.transition="all .8s ease";

});

window.addEventListener("scroll",revealAnimation);

revealAnimation();

/* =====================================
   Parallax Hero
===================================== */

window.addEventListener("mousemove",(e)=>{

    const hero=document.querySelector(".hero");

    if(!hero) return;

    const x=(window.innerWidth/2-e.clientX)/35;

    const y=(window.innerHeight/2-e.clientY)/35;

    hero.style.transform=`translate(${x}px,${y}px)`;

});

/* =====================================
   Game Card Hover
===================================== */

document.querySelectorAll(".game-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.background=

        `radial-gradient(circle at ${x}px ${y}px,

        rgba(0,170,255,.28),

        rgba(255,255,255,.05))`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.05)";

    });

});

/* =====================================
   Keyboard Shortcut
===================================== */

document.addEventListener("keydown",(e)=>{

    if(e.key==="m"){

        const music=document.getElementById("music");

        const btn=document.getElementById("playMusic");

        if(!music) return;

        if(music.paused){

            music.play();

            btn.innerHTML='<i class="fas fa-pause"></i>';

        }else{

            music.pause();

            btn.innerHTML='<i class="fas fa-play"></i>';

        }

    }

});

/* =====================================
   Console Message
===================================== */

console.clear();

console.log("%cBRODAY1 V8 Infinity",

"color:#00aaff;font-size:28px;font-weight:bold;");

console.log("%cWebsite Loaded Successfully",

"color:#00ff99;font-size:16px;");
