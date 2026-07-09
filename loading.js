// =====================================================
// BRODAY1 V9 Galaxy Loader Pro
// =====================================================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");
    const progress = document.querySelector(".loader-progress");
    const percentText = document.getElementById("loadingPercent");
    const loadingText = document.querySelector(".loader p");

    document.body.style.overflow = "hidden";

    const messages = [
        "Initializing Galaxy...",
        "Loading Videos...",
        "Loading Music...",
        "Creating Particles...",
        "Preparing Experience...",
        "Welcome BRODAY1"
    ];

    let progressValue = 0;
    let messageIndex = 0;

    const timer = setInterval(() => {

        progressValue++;

        if(progress){
            progress.style.width = progressValue + "%";
        }

        if(percentText){
            percentText.textContent = progressValue + "%";
        }

        if(progressValue % 20 === 0 && loadingText){

            loadingText.textContent =
                messages[Math.min(messageIndex, messages.length - 1)];

            messageIndex++;
        }

        if(progressValue >= 100){

            clearInterval(timer);

            loader.animate([
                {
                    opacity:1,
                    transform:"scale(1)"
                },
                {
                    opacity:0,
                    transform:"scale(1.15)"
                }
            ],{
                duration:900,
                easing:"ease"
            });

            setTimeout(()=>{

                loader.remove();

                document.body.style.overflow="auto";

            },850);

        }

    },18);

});
