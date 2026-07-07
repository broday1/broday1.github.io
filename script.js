// ======================================
// BRODAY1 V6.5 Premium Script
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // =============================
    // Fade In
    // =============================

    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "1s ease";
        document.body.style.opacity = "1";
    }, 100);

    // =============================
    // Dynamic Title
    // =============================

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

        if (titleIndex >= titles.length) {

            titleIndex = 0;

        }

    }, 2500);

    // =============================
    // Profile Glow
    // =============================

    const profile = document.querySelector(".profile");

    if (profile) {

        profile.addEventListener("mouseenter", () => {

            profile.style.boxShadow = "0 0 60px #00aaff";

        });

        profile.addEventListener("mouseleave", () => {

            profile.style.boxShadow = "";

        });

    }

    // =============================
    // Social Hover
    // =============================

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

    // =============================
    // Music Player
    // =============================

    const music = document.getElementById("music");
    const playBtn = document.getElementById("playMusic");

    const progress = document.getElementById("progress");
    const volume = document.getElementById("volume");

    const currentTime = document.getElementById("currentTime");
    const duration = document.getElementById("duration");

    if (
        music &&
        playBtn &&
        progress &&
        volume &&
        currentTime &&
        duration
    ) {

        music.volume = 0.4;

        volume.value = 40;

        playBtn.addEventListener("click", () => {

            if (music.paused) {

                music.play().catch(err => console.log(err));

                playBtn.innerHTML =
                    '<i class="fas fa-pause"></i>';

            } else {

                music.pause();

                playBtn.innerHTML =
                    '<i class="fas fa-play"></i>';

            }

        });

        music.addEventListener("loadedmetadata", () => {

            progress.max = Math.floor(music.duration);

            duration.textContent =
                formatTime(music.duration);

        });

        music.addEventListener("timeupdate", () => {

            progress.value = music.currentTime;

            currentTime.textContent =
                formatTime(music.currentTime);

        });

        progress.addEventListener("input", () => {

            music.currentTime = progress.value;

        });

        volume.addEventListener("input", () => {

            music.volume = volume.value / 100;

        });

        music.addEventListener("ended", () => {

            playBtn.innerHTML =
                '<i class="fas fa-play"></i>';

            progress.value = 0;

        });

    }

    // =============================
    // Mouse Light
    // =============================

    const mouseLight = document.querySelector(".mouse-light");

    if (mouseLight) {

        document.addEventListener("mousemove", e => {

            mouseLight.style.left = e.clientX + "px";
            mouseLight.style.top = e.clientY + "px";

        });

    }

    // =============================
    // Cursor
    // =============================

    const cursor = document.querySelector(".cursor");

    if (cursor) {

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

    }

    // =============================
    // Back To Top
    // =============================

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

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

    }

});

// ======================================
// Time Format
// ======================================

function formatTime(time) {

    const minutes = Math.floor(time / 60);

    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

}

// ======================================
// tsParticles
// ======================================

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

            value: 0.6

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

                    opacity: 1

                }

            }

        }

    }

});

console.log("BRODAY1 V6.5 Loaded Successfully 🚀");
