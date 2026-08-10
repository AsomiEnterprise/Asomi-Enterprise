/* =========================================================
   ASOMI ENTERPRISE
   PREMIUM WEBSITE JAVASCRIPT
========================================================= */

"use strict";


/* =========================================================
   HEADER SCROLL
========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

});


/* Close mobile menu */

document.querySelectorAll(
    ".mobile-menu a"
).forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

    });

});


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener("click", function(e) {

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 180;

        const height =
            section.offsetHeight;

        if (
            window.scrollY >= top &&
            window.scrollY < top + height
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


document.querySelectorAll(
    ".reveal"
).forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   COUNTERS
========================================================= */

const counters =
    document.querySelectorAll(".counter");


const counterObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting)
                    return;

                const counter =
                    entry.target;

                const target =
                    Number(
                        counter.dataset.target
                    );

                let current = 0;

                const duration = 1600;

                const start =
                    performance.now();


                function animate(time) {

                    const progress =
                        Math.min(
                            (time - start) /
                            duration,
                            1
                        );


                    const eased =
                        1 -
                        Math.pow(
                            1 - progress,
                            3
                        );


                    current =
                        Math.floor(
                            eased * target
                        );


                    counter.textContent =
                        current;


                    if (progress < 1) {

                        requestAnimationFrame(
                            animate
                        );

                    } else {

                        counter.textContent =
                            target;

                    }

                }


                requestAnimationFrame(
                    animate
                );

                counterObserver.unobserve(
                    counter
                );

            });

        },
        {
            threshold: .6
        }
    );


counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* =========================================================
   GALLERY MODAL
========================================================= */

const modal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const modalClose =
    document.getElementById("modalClose");


document.querySelectorAll(
    ".view-image"
).forEach(button => {

    button.addEventListener(
        "click",
        e => {

            e.stopPropagation();

            const image =
                button.dataset.image;

            modalImage.src = image;

            modal.classList.add("open");

            document.body.style.overflow =
                "hidden";

        }
    );

});


function closeModal() {

    modal.classList.remove("open");

    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


modal.addEventListener(
    "click",
    e => {

        if (e.target === modal) {

            closeModal();

        }

    }
);


document.addEventListener(
    "keydown",
    e => {

        if (e.key === "Escape") {

            closeModal();

        }

    }
);


/* =========================================================
   BACK TO TOP
========================================================= */

const topButton =
    document.getElementById("topButton");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


topButton.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =========================================================
   HERO MOUSE PARALLAX
========================================================= */

const heroVisual =
    document.querySelector(".hero-visual");


if (heroVisual) {

    document.addEventListener(
        "mousemove",
        e => {

            if (window.innerWidth < 900)
                return;


            const x =
                (window.innerWidth / 2 -
                    e.clientX) / 80;

            const y =
                (window.innerHeight / 2 -
                    e.clientY) / 80;


            heroVisual.style.transform =
                `translate(${x}px, ${y}px)`;

        }
    );

}


/* =========================================================
   MOVING PARTICLES
========================================================= */

const canvas =
    document.getElementById("particles");

const ctx =
    canvas.getContext("2d");


let particles = [];

let mouse = {
    x: null,
    y: null
};


function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}


resizeCanvas();


window.addEventListener(
    "resize",
    () => {

        resizeCanvas();

        createParticles();

    }
);


window.addEventListener(
    "mousemove",
    e => {

        mouse.x =
            e.clientX;

        mouse.y =
            e.clientY;

    }
);


window.addEventListener(
    "mouseout",
    () => {

        mouse.x = null;

        mouse.y = null;

    }
);


/* Create particles */

function createParticles() {

    particles = [];

    const amount =
        window.innerWidth < 700
            ? 35
            : 70;


    for (let i = 0; i < amount; i++) {

        particles.push({

            x:
                Math.random() *
                canvas.width,

            y:
                Math.random() *
                canvas.height,

            size:
                Math.random() * 2 + .5,

            speedX:
                (Math.random() - .5) * .35,

            speedY:
                (Math.random() - .5) * .35,

            opacity:
                Math.random() * .6 + .2

        });

    }

}


createParticles();


/* Draw particles */

function drawParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(p => {

        p.x += p.speedX;

        p.y += p.speedY;


        if (p.x < 0)
            p.x = canvas.width;

        if (p.x > canvas.width)
            p.x = 0;

        if (p.y < 0)
            p.y = canvas.height;

        if (p.y > canvas.height)
            p.y = 0;


        /* Mouse interaction */

        if (mouse.x !== null) {

            const dx =
                p.x - mouse.x;

            const dy =
                p.y - mouse.y;

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (distance < 120) {

                p.x +=
                    dx / distance * .5;

                p.y +=
                    dy / distance * .5;

            }

        }


        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
            `rgba(56,189,248,${p.opacity})`;


        ctx.shadowBlur = 12;

        ctx.shadowColor =
            "rgba(6,182,212,.8)";


        ctx.fill();

    });


    requestAnimationFrame(
        drawParticles
    );

}


drawParticles();


/* =========================================================
   SERVICE CARD 3D TILT
========================================================= */

document.querySelectorAll(
    ".service-card"
).forEach(card => {

    card.addEventListener(
        "mousemove",
        e => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX -
                rect.left;

            const y =
                e.clientY -
                rect.top;


            const rotateX =
                ((y - rect.height / 2) /
                    rect.height) *
                -5;


            const rotateY =
                ((x - rect.width / 2) /
                    rect.width) *
                5;


            card.style.transform =
                `perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const year =
    document.querySelector(".year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   PAGE LOAD
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

        console.log(
            "%cASOMI ENTERPRISE",
            "color:#06b6d4;font-size:25px;font-weight:800;"
        );

        console.log(
            "Premium website loaded successfully."
        );

    }
);
