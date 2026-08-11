/* =====================================================
   ASOMI ENTERPRISE
   PREMIUM INTERACTIONS
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.querySelector(".menu-button");

const mobileMenu =
    document.querySelector(".mobile-menu");


if (menuButton) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });

}


/* Close mobile menu */

document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

        });

    });


/* =====================================================
   SCROLL REVEAL
===================================================== */

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


/* =====================================================
   SERVICE CARD STAGGER
===================================================== */

const cards =
    document.querySelectorAll(".service-card");


cards.forEach((card, index) => {

    card.style.transitionDelay =
        `${(index % 4) * 70}ms`;

});


/* =====================================================
   3D SERVICE CARD EFFECT
===================================================== */

cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        if (window.innerWidth < 900) return;


        const rect =
            card.getBoundingClientRect();


        const mouseX =
            event.clientX - rect.left;


        const mouseY =
            event.clientY - rect.top;


        const centerX =
            rect.width / 2;


        const centerY =
            rect.height / 2;


        const rotateX =
            (mouseY - centerY) / 25;


        const rotateY =
            (centerX - mouseX) / 25;


        card.style.transform =

            `perspective(900px)
             translateY(-16px)
             scale(1.025)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =====================================================
   HERO AE PARALLAX
===================================================== */

const heroVisual =
    document.querySelector(".hero-brand-visual");

const giantAE =
    document.querySelector(".giant-ae");


if (heroVisual && giantAE) {

    heroVisual.addEventListener(
        "mousemove",
        event => {

            if (window.innerWidth < 900) return;


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


            const moveX =
                (x - centerX) / 35;


            const moveY =
                (y - centerY) / 35;


            giantAE.style.transform =

                `translate(${moveX}px,${moveY}px)
                 rotate(-5deg)`;

        }
    );


    heroVisual.addEventListener(
        "mouseleave",
        () => {

            giantAE.style.transform = "";

        }
    );

}


/* =====================================================
   NAVBAR SCROLL
===================================================== */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(5,6,9,.75)";

            navbar.style.backdropFilter =
                "blur(20px)";

            navbar.style.borderBottom =
                "1px solid rgba(255,255,255,.05)";

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


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(
        ".desktop-nav a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;


            if (
                window.scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.style.color =
                "#9da2ac";


            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.style.color =
                    "#f1d89d";

            }

        });

    }
);


/* =====================================================
   SMOOTH SCROLL
===================================================== */

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


/* =====================================================
   MOUSE GOLD GLOW
===================================================== */

const mouseGlow =
    document.createElement("div");


mouseGlow.style.position =
    "fixed";

mouseGlow.style.width =
    "250px";

mouseGlow.style.height =
    "250px";

mouseGlow.style.borderRadius =
    "50%";

mouseGlow.style.pointerEvents =
    "none";

mouseGlow.style.zIndex =
    "-1";

mouseGlow.style.background =
    "radial-gradient(circle, rgba(201,164,93,.055), transparent 70%)";

mouseGlow.style.transform =
    "translate(-50%,-50%)";

mouseGlow.style.transition =
    "left .15s ease-out, top .15s ease-out";


document.body.appendChild(
    mouseGlow
);


window.addEventListener(
    "mousemove",
    event => {

        mouseGlow.style.left =
            `${event.clientX}px`;

        mouseGlow.style.top =
            `${event.clientY}px`;

    }
);


/* =====================================================
   BUTTON MAGNETIC EFFECT
===================================================== */

const buttons =
    document.querySelectorAll(
        ".primary-button, .secondary-button"
    );


buttons.forEach(button => {

    button.addEventListener(
        "mousemove",
        event => {

            if (window.innerWidth < 900) return;


            const rect =
                button.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const moveX =
                (x - rect.width / 2) / 7;


            const moveY =
                (y - rect.height / 2) / 7;


            button.style.transform =
                `translate(${moveX}px,${moveY}px)`;

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform = "";

        }
    );

});


/* =====================================================
   FOOTER YEAR
===================================================== */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =====================================================
   PAGE LOADED
===================================================== */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
