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

    if(profile){

        profile.addEventListener("mouseenter",()=>{
            profile.style.boxShadow="0 0 60px #00aaff";
        });

        profile.addEventListener("mouseleave",()=>{
            profile.style.boxShadow="0 0 30px #00aaff";
        });

    }

    // ===== Music Player =====

    const music=document.getElementById("music");
    const playBtn=document.getElementById("playMusic");

    if(music && playBtn){

        music.volume=0.4;

        playBtn.addEventListener("click",()=>{

            if(music.paused){

                music.play();
                playBtn.innerHTML='<i class="fas fa-pause"></i>';
                playBtn.classList.add("playing");

            }else{

                music.pause();
                playBtn.innerHTML='<i class="fas fa-play"></i>';
                playBtn.classList.remove("playing");

            }

        });

        music.addEventListener("ended",()=>{

            music.currentTime=0;

            playBtn.innerHTML='<i class="fas fa-play"></i>';
            playBtn.classList.remove("playing");

        });

    }

    console.log("BRODAY1 Website Loaded Successfully");

});
