// ===== BRODAY1 Website =====

document.addEventListener("DOMContentLoaded", () => {

    // Fade In
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "1s ease";
        document.body.style.opacity = "1";
    }, 100);

    // Dynamic Title
    const titles = [
        "BRODAY1",
        "Gaming",
        "Content Creator",
        "Welcome To BRODAY1"
    ];

    let i = 0;

    setInterval(() => {
        document.title = titles[i];
        i = (i + 1) % titles.length;
    }, 2500);

    // Hover Links
    document.querySelectorAll(".links a").forEach(link => {

        link.addEventListener("mouseenter", () => {
            link.style.transform = "translateY(-6px) scale(1.03)";
            link.style.boxShadow = "0 0 25px #00aaff";
        });

        link.addEventListener("mouseleave", () => {
            link.style.transform = "";
            link.style.boxShadow = "";
        });

    });

    // Profile Glow
    const profile = document.querySelector(".profile");

    if (profile) {

        profile.addEventListener("mouseenter", () => {
            profile.style.boxShadow = "0 0 60px #00aaff";
        });

        profile.addEventListener("mouseleave", () => {
            profile.style.boxShadow = "0 0 30px #00aaff";
        });

    }

    // ===== Music Player =====

    const music = document.getElementById("music");
    const playBtn = document.getElementById("playMusic");

    if (music && playBtn) {

        music.volume = 0.4;

        playBtn.addEventListener("click", () => {

            if (music.paused) {

                music.play();
                playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                playBtn.classList.add("playing");

            } else {

                music.pause();
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
                playBtn.classList.remove("playing");

            }

        });

        music.addEventListener("ended", () => {

            music.currentTime = 0;
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
            playBtn.classList.remove("playing");

        });

    }

    // ===== Mouse Light =====

    const mouseLight = document.querySelector(".mouse-light");

    if (mouseLight) {

        document.addEventListener("mousemove", (e) => {

            mouseLight.style.left = e.clientX + "px";
            mouseLight.style.top = e.clientY + "px";

        });

    }

    console.log("BRODAY1 Website Loaded Successfully");

});

// ===== Particles Background =====

tsParticles.load("particles-js", {

    fullScreen: {
        enable: false
    },

    background: {
        color: "transparent"
    },

    fpsLimit: 60,

    particles: {

        number: {
            value: 80,
            density: {
                enable: true,
                area: 800
            }
        },

        color: {
            value: "#00aaff"
        },

        links: {
            enable: true,
            color: "#00aaff",
            distance: 150,
            opacity: 0.3,
            width: 1
        },

        move: {
            enable: true,
            speed: 1.5
        },

        size: {
            value: {
                min: 1,
                max: 4
            }
        },

        opacity: {
            value: 0.7
        }

    },

    interactivity: {

        events: {

            onHover: {
                enable: true,
                mode: "grab"
            },

            resize: true

        },

        modes: {

            grab: {
                distance: 180,

                links: {
                    opacity: 0.8
                }

            }

        }

    }

});
// ===== Cursor =====

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
   BRODAY1 V6 Premium Music Player
===================================== */

const music = document.getElementById("music");
const playBtn = document.getElementById("playMusic");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

if (music && playBtn) {

    music.volume = 0.4;

    playBtn.onclick = () => {

        if (music.paused) {

            music.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';

        } else {

            music.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';

        }

    };

    music.addEventListener("loadedmetadata", () => {

        progress.max = Math.floor(music.duration);

        duration.textContent = formatTime(music.duration);

    });

    music.addEventListener("timeupdate", () => {

        progress.value = music.currentTime;

        currentTime.textContent = formatTime(music.currentTime);

    });

    progress.addEventListener("input", () => {

        music.currentTime = progress.value;

    });

    volume.addEventListener("input", () => {

        music.volume = volume.value / 100;

    });

    music.addEventListener("ended", () => {

        playBtn.innerHTML = '<i class="fas fa-play"></i>';

    });

}

function formatTime(time) {

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

}

/* =====================================
   Back To Top
===================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 250) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});
