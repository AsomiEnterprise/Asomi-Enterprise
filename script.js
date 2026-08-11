/* ==========================================
   ASOMI ENTERPRISE
   INTERACTIVE JAVASCRIPT
========================================== */


/* ==========================================
   MOBILE NAVIGATION
========================================== */

const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("menu-open");

    });

}


/* Close mobile menu after clicking a link */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("menu-open");

    });

});


/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ==========================================
   STAGGER SERVICE CARDS
========================================== */

const serviceCards =
    document.querySelectorAll(".service-card");

serviceCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${(index % 4) * 70}ms`;

});


/* ==========================================
   MOUSE PARALLAX
========================================== */

const heroVisual =
    document.querySelector(".hero-visual");

const printCard =
    document.querySelector(".main-print-card");


if (
    heroVisual &&
    printCard &&
    window.innerWidth > 900
) {

    heroVisual.addEventListener(
        "mousemove",
        event => {

            const rect =
                heroVisual.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateY =
                (x - centerX) / 35;

            const rotateX =
                (centerY - y) / 35;

            printCard.style.transform =
                `perspective(1000px)
                 rotateY(${rotateY}deg)
                 rotateX(${rotateX}deg)
                 translateY(-5px)`;

        }
    );


    heroVisual.addEventListener(
        "mouseleave",
        () => {

            printCard.style.transform =
                "";

        }
    );

}


/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 40) {

            navbar.style.background =
                "rgba(7,9,13,.72)";

            navbar.style.backdropFilter =
                "blur(18px)";

            navbar.style.borderBottom =
                "1px solid rgba(255,255,255,.06)";

        } else {

            navbar.style.background =
                "transparent";

            navbar.style.backdropFilter =
                "none";

            navbar.style.borderBottom =
                "0";

        }

    }
);


/* ==========================================
   SERVICE CARD MAGNETIC EFFECT
========================================== */

serviceCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateX =
                (y - rect.height / 2) / 22;

            const rotateY =
                (rect.width / 2 - x) / 22;

            card.style.transform =
                `perspective(800px)
                 translateY(-15px)
                 scale(1.025)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});


/* ==========================================
   SMOOTH ANCHOR SCROLL
========================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function(event) {

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


/* ==========================================
   CURRENT YEAR
========================================== */

const footerYear =
    document.querySelector(".footer-bottom span");

if (footerYear) {

    footerYear.textContent =
        `© ${new Date().getFullYear()} Asomi Enterprise. All Rights Reserved.`;

}


/* ==========================================
   GOLD CURSOR GLOW
========================================== */

const cursorGlow =
    document.createElement("div");

cursorGlow.style.position = "fixed";
cursorGlow.style.width = "220px";
cursorGlow.style.height = "220px";
cursorGlow.style.borderRadius = "50%";
cursorGlow.style.pointerEvents = "none";
cursorGlow.style.zIndex = "0";
cursorGlow.style.background =
    "radial-gradient(circle, rgba(217,181,109,.045), transparent 70%)";
cursorGlow.style.transform =
    "translate(-50%, -50%)";
cursorGlow.style.transition =
    "left .15s ease-out, top .15s ease-out";

document.body.appendChild(cursorGlow);

window.addEventListener(
    "mousemove",
    event => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);


/* ==========================================
   PAGE LOADED
========================================== */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add("loaded");

    }
);
