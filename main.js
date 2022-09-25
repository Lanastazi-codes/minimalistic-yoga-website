const burger = document.querySelector('.burger');
const links = document.querySelectorAll('.list__link');

gsap.set("body", { overflowX: "hidden" });

//burger
burger.addEventListener('click', () => {

    burger.classList.toggle('active');
    if (burger.classList.contains('active')) {
        gsap.to(".nav__list", { x: "0%" });
        gsap.to(".burger__line", { stroke: "black" });
        gsap.fromTo(
            ".item__link",
            { opacity: 0, y: 0 },
            { opacity: 1, y: 20, delay: 0.25, stagger: 0.25 }//apearence from the top 
        );
        gsap.set("body", { overflow: "hidden" });

    } else {
        gsap.to(".nav__list", { x: "100%" });
        gsap.to(".burger__line", { stroke: "white" });//svg
        gsap.set("body", { overflow: "auto" });
        gsap.set("body", { overflowX: "hidden" });
    }
    
});

//link clicked
function linkClicked() {
    if (burger.classList.contains('active')) {
        gsap.set("body", { overflow: "visible" });
        gsap.to(".nav__list", { x: "100%" });
        gsap.set("body", { overflowX: "hidden" });
        gsap.to(".burger__line", { stroke: "white" });
    }
    
}

const videos = gsap.utils.toArray(".video");
gsap.set(videos, { opacity: 0 });

videos.forEach((video) => {
    ScrollTrigger.create({
    trigger: video,
    start: "top center",
    end: "bottom center",

    onEnter: () => {
        gsap.to(video, { opacity: 1 });
        video.play();
    },
    onEnterBack: () => video.play(),
    onLeave: () => video.pause(),
    onLeaveBack: () => video.pause(),
    });
});
