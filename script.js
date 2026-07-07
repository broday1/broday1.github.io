// ======================================
// BRODAY1 V6.3 Premium
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       Fade In
    =========================== */

    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 1s ease";
        document.body.style.opacity = "1";
    }, 100);

    /* ===========================
       Dynamic Title
    =========================== */

    const titles = [
        "BRODAY1",
        "Gaming",
        "Content Creator",
        "Welcome To BRODAY1"
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
       Profile Hover
    =========================== */

    const profile = document.querySelector(".profile");

    if(profile){

        profile.addEventListener("mouseenter",()=>{

            profile.style.transform="scale(1.08)";
            profile.style.boxShadow="0 0 60px #00aaff";

        });

        profile.addEventListener("mouseleave",()=>{

            profile.style.transform="";
            profile.style.boxShadow="";

        });

    }

    /* ===========================
       Social Links
    =========================== */

    document.querySelectorAll(".links a").forEach(link=>{

        link.addEventListener("mouseenter",()=>{

            link.style.transform="translateY(-6px)";
            link.style.boxShadow="0 0 25px #00aaff";

        });

        link.addEventListener("mouseleave",()=>{

            link.style.transform="";
            link.style.boxShadow="";

        });

    });

    /* ===========================
       Mouse Light
    =========================== */

    const mouseLight=document.querySelector(".mouse-light");

    document.addEventListener("mousemove",(e)=>{

        if(mouseLight){

            mouseLight.style.left=e.clientX+"px";
            mouseLight.style.top=e.clientY+"px";

        }

    });

    /* ===========================
       Gaming Cursor
    =========================== */

    const cursor=document.querySelector(".cursor");

    if(cursor){

        document.addEventListener("mousemove",(e)=>{

            cursor.style.left=e.clientX+"px";
            cursor.style.top=e.clientY+"px";

        });

        document.addEventListener("mousedown",()=>{

            cursor.classList.add("active");

        });

        document.addEventListener("mouseup",()=>{

            cursor.classList.remove("active");

        });

    }

    /* ===========================
       Music Player
    =========================== */

    const music=document.getElementById("music");
    const playBtn=document.getElementById("playMusic");

    const progress=document.getElementById("progress");
    const volume=document.getElementById("volume");

    const currentTime=document.getElementById("currentTime");
    const duration=document.getElementById("duration");

    if(music){

        music.volume=0.4;

    }

    if(playBtn){

        playBtn.addEventListener("click",()=>{

            if(music.paused){

                music.play();

                playBtn.innerHTML='<i class="fas fa-pause"></i>';

            }

            else{

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

            currentTime.textContent=formatTime(music.currentTime);

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

    function formatTime(time){

        const minutes=Math.floor(time/60);

        const seconds=Math.floor(time%60);

        return `${minutes}:${seconds<10?"0":""}${seconds}`;

    }

    /* ===========================
       Back To Top
    =========================== */

    const back=document.getElementById("backToTop");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>250){

            back.style.display="flex";

        }

        else{

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

});

/* ===========================
   tsParticles
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
            value:80,
            density:{
                enable:true,
                area:800
            }
        },

        color:{
            value:"#00aaff"
        },

        links:{
            enable:true,
            color:"#00aaff",
            distance:150,
            opacity:.3,
            width:1
        },

        move:{
            enable:true,
            speed:1.5
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

            resize:true

        },

        modes:{

            grab:{

                distance:180,

                links:{
                    opacity:.8
                }

            }

        }

    }

});

console.log("BRODAY1 V6.3 Premium Loaded Successfully");
