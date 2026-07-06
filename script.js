// ===== BRODAY1 Website =====

document.addEventListener("DOMContentLoaded", () => {

    // تأثير دخول الصفحة
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "1s ease";
        document.body.style.opacity = "1";
    }, 100);

    // تغيير عنوان الصفحة
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

    // تأثير الأزرار
    const links = document.querySelectorAll(".links a");

    links.forEach(link => {

        link.addEventListener("mouseenter", () => {

            link.style.transform = "translateY(-6px) scale(1.03)";
            link.style.boxShadow = "0 0 25px #00aaff";

        });

        link.addEventListener("mouseleave", () => {

            link.style.transform = "translateY(0)";
            link.style.boxShadow = "none";

        });

    });

    // تأثير الصورة
    const profile = document.querySelector(".profile");

    profile.addEventListener("mousemove", () => {

        profile.style.boxShadow = "0 0 60px #00aaff";

    });

    profile.addEventListener("mouseleave", () => {

        profile.style.boxShadow = "0 0 30px #00aaff";

    });

    // رسالة في Console
    console.log("BRODAY1 Website Loaded Successfully");

});
const music = document.getElementById("music");
const playBtn = document.getElementById("playMusic");

let playing = false;

playBtn.addEventListener("click", () => {

    if(!playing){

        music.play();

        playBtn.innerHTML='<i class="fas fa-pause"></i>';

        playing=true;

    }else{

        music.pause();

        playBtn.innerHTML='<i class="fas fa-play"></i>';

        playing=false;

    }

});
