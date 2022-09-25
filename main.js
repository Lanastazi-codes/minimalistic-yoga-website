const burger = document.querySelector('.burger');

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
        gsap.set("body", { overflow: "hidden" });//disable scrolling down while burger is active
    } else {
        gsap.to(".nav__list", { x: "100%" });
        gsap.to(".burger__line", { stroke: "white" });//svg
        gsap.set("body", { overflow: "auto" });
        gsap.set("body", { overflowX: "hidden" });
    }
    

});