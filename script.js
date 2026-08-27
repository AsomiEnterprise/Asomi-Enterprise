/* =========================================================
   ASOMI ENTERPRISE
   WEBSITE JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("open");

    const icon = menuButton.querySelector("i");

    if (nav.classList.contains("open")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* CLOSE MOBILE MENU AFTER CLICK */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

});


/* =========================================================
   SERVICE GALLERY DATA
=========================================================

   IMPORTANT:
   Replace these image URLs with your own photos later.

========================================================= */

const galleryData = {

    "Digital Printing": [
    "images/digital-1.jpg",
    "images/digital-2.jpg",
    "images/digital-3.jpg",
    "images/digital-4.jpg",
    "images/digital-5.jpg",
    "images/digital-6.jpg"
],

    "Flex & Banner Printing": [
     "images/flex-1.jpg",
     "images/flex-2.jpg",
     "images/flex-3.jpg",
     "images/flex-4.jpg"
    ],

    "Visiting Cards": [
        "images/visiting-card-1.jpg",
        "images/visiting-card-2.jpg",
        "images/visiting-card-3.jpg",
        "images/visiting-card-4.jpg"
    ],

    "Pamphlets & Flyers": [
        "images/pamphlet-1.jpg",
        "images/pamphlet-2.jpg",
        "images/pamphlet-3.jpg",
        "images/pamphlet-4.jpg"
    ],

    "Brochures": [
        "images/brochure-1.jpg",
        "images/brochure-2.jpg",
        "images/brochure-3.jpg",
        "images/brochure-4.jpg"
    ],

    "Letterheads": [
        "images/letterhead-1.jpg",
        "images/letterhead-2.jpg",
        "images/letterhead-3.jpg",
        "images/letterhead-4.jpg"
    ],

    "Bill Books": [
        "images/bill-book-1.jpg",
        "images/bill-book-2.jpg",
        "images/bill-book-3.jpg",
        "images/bill-book-4.jpg"
    ],

    "ID Cards": [
        "images/id-card-1.jpg",
        "images/id-card-2.jpg",
        "images/id-card-3.jpg",
        "images/id-card-4.jpg"
    ],

    "Certificates": [
        "images/certificate-1.jpg",
        "images/certificate-2.jpg",
        "images/certificate-3.jpg",
        "images/certificate-4.jpg"
    ],

    "Stickers & Labels": [
        {
            type: "image",
            src: "images/sticker-1.jpg"
        },
        {
         type: "image",
            src: "images/sticker-2.jpg"
        },
        {
            type: "image",
            src: "images/sticker-3.jpg"
        },
        {
            type: "image",
            src: "images/sticker-4.jpg"
        },
        {
            type: "video",
            src: "images/videos/sticker-5.mp4"
        }
    ],

    "Photo Printing": [
        "images/photo-1.jpg",
        "images/photo-2.jpg",
        "images/photo-3.jpg",
        "images/photo-4.jpg"
    ],

    "Custom Printing Services": [
        "images/custom-1.jpg",
        "images/custom-2.jpg",
        "images/custom-3.jpg",
        "images/custom-4.jpg"
    ],

    "Book Printing": [
        "images/book-1.jpg",
        "images/book-2.jpg",
        "images/book-3.jpg",
        "images/book-4.jpg"
    ]

};


/* =========================================================
   GALLERY ELEMENTS
========================================================= */

const galleryModal = document.getElementById("galleryModal");
const galleryClose = document.getElementById("galleryClose");
const galleryOverlay = document.getElementById("galleryOverlay");

const galleryTitle = document.getElementById("galleryTitle");
const galleryCounter = document.getElementById("galleryCounter");

const galleryMainImage = document.getElementById("galleryMainImage");
const galleryThumbnails = document.getElementById("galleryThumbnails");

const galleryPrev = document.getElementById("galleryPrev");
const galleryNext = document.getElementById("galleryNext");


let currentGallery = [];
let currentIndex = 0;


/* =========================================================
   OPEN GALLERY
========================================================= */

document.querySelectorAll(".service-card").forEach(card => {

    card.addEventListener("click", () => {

        const serviceName = card.dataset.service;

        openGallery(serviceName);

    });

});


function openGallery(serviceName) {

    currentGallery = galleryData[serviceName] || [];

    currentIndex = 0;

    galleryTitle.textContent = serviceName;

    renderGallery();

    galleryModal.classList.add("active");

    document.body.classList.add("modal-open");

}


/* =========================================================
   RENDER GALLERY
========================================================= */

function renderGallery() {

    if (!currentGallery.length) {
        return;
    }

    /* =========================================
       SUPPORT BOTH FORMATS

       OLD:
       "images/photo-1.jpg"

       NEW:
       {
           type: "image",
           src: "images/photo-1.jpg"
       }
    ========================================= */

    const rawItem = currentGallery[currentIndex];

    const item =
        typeof rawItem === "string"
            ? {
                type: "image",
                src: rawItem
            }
            : rawItem;


    const galleryImage =
        document.getElementById("galleryMainImage");

    const galleryVideo =
        document.getElementById("galleryMainVideo");


    /* SAFETY */

    if (!galleryImage || !galleryVideo) {

        console.error(
            "Gallery image/video element missing."
        );

        return;
    }


    /* =========================================
       HIDE BOTH MEDIA
    ========================================= */

    galleryImage.style.display = "none";

    galleryVideo.style.display = "none";

    galleryVideo.pause();

    galleryVideo.removeAttribute("src");

    galleryVideo.load();


    /* =========================================
       IMAGE
    ========================================= */

    if (item.type === "image") {

        galleryImage.style.display = "block";

        galleryImage.classList.remove(
            "gallery-enter"
        );

        galleryImage.style.opacity = "0";


        setTimeout(() => {

            galleryImage.src = item.src;

            galleryImage.style.opacity = "1";

            void galleryImage.offsetWidth;

            galleryImage.classList.add(
                "gallery-enter"
            );

        }, 180);

    }


    /* =========================================
       VIDEO
    ========================================= */

    else if (item.type === "video") {

        galleryVideo.style.display = "block";

        galleryVideo.src = item.src;

        galleryVideo.load();

        galleryVideo.classList.remove(
            "gallery-enter"
        );

        void galleryVideo.offsetWidth;

        galleryVideo.classList.add(
            "gallery-enter"
        );

        galleryVideo.play().catch(() => {

            console.log(
                "Video requires user interaction."
            );

        });

    }


    /* =========================================
       COUNTER
    ========================================= */

    galleryCounter.textContent =
        `${String(currentIndex + 1).padStart(2, "0")} / ${String(currentGallery.length).padStart(2, "0")}`;


    /* =========================================
       THUMBNAILS
    ========================================= */

    galleryThumbnails.innerHTML = "";


    currentGallery.forEach(
        (galleryItem, index) => {

            const thumbnail =
                document.createElement("button");


            thumbnail.className =
                "gallery-thumb";


            if (index === currentIndex) {

                thumbnail.classList.add(
                    "active"
                );

            }


            /* =================================
               OLD IMAGE FORMAT
            ================================= */

            if (typeof galleryItem === "string") {

                thumbnail.innerHTML = `
                    <img
                        src="${galleryItem}"
                        alt="Gallery image ${index + 1}"
                        loading="lazy"
                    >
                `;

            }


            /* =================================
               NEW IMAGE FORMAT
            ================================= */

            else if (
                galleryItem.type === "image"
            ) {

                thumbnail.innerHTML = `
                    <img
                        src="${galleryItem.src}"
                        alt="Gallery image ${index + 1}"
                        loading="lazy"
                    >
                `;

            }


            /* =================================
               VIDEO FORMAT
            ================================= */

            else if (
                galleryItem.type === "video"
            ) {

                thumbnail.innerHTML = `
                    <div class="video-thumbnail">
                        <i class="fa-solid fa-play"></i>
                        <span>VIDEO</span>
                    </div>
                `;

            }


            /* =================================
               THUMBNAIL CLICK
            ================================= */

            thumbnail.addEventListener(
                "click",
                () => {

                    currentIndex = index;

                    renderGallery();

                }
            );


            galleryThumbnails.appendChild(
                thumbnail
            );

        }
    );

}

/* =========================================================
   NEXT IMAGE
========================================================= */

function nextImage() {

    if (!currentGallery.length) return;

    currentIndex++;

    if (currentIndex >= currentGallery.length) {
        currentIndex = 0;
    }

    renderGallery();

}


/* =========================================================
   PREVIOUS IMAGE
========================================================= */

function previousImage() {

    if (!currentGallery.length) return;

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = currentGallery.length - 1;
    }

    renderGallery();

}


galleryNext.addEventListener("click", nextImage);
galleryPrev.addEventListener("click", previousImage);


/* =========================================================
   CLOSE GALLERY
========================================================= */

function closeGallery() {

    galleryModal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


galleryClose.addEventListener("click", closeGallery);
galleryOverlay.addEventListener("click", closeGallery);


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener("keydown", event => {

    if (!galleryModal.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        closeGallery();
    }

    if (event.key === "ArrowRight") {
        nextImage();
    }

    if (event.key === "ArrowLeft") {
        previousImage();
    }

});


/* =========================================================
   TOUCH / SWIPE SUPPORT
========================================================= */

let touchStartX = 0;
let touchEndX = 0;


galleryMainImage.addEventListener("touchstart", event => {

    touchStartX = event.changedTouches[0].screenX;

});


galleryMainImage.addEventListener("touchend", event => {

    touchEndX = event.changedTouches[0].screenX;

    handleSwipe();

});


function handleSwipe() {

    const distance = touchEndX - touchStartX;

    if (Math.abs(distance) < 50) {
        return;
    }

    if (distance < 0) {
        nextImage();
    } else {
        previousImage();
    }

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".service-card, .why-card, .contact-card, .about-content, .about-image"
);


const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.08
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});


/* =========================================================
   PREVENT BROKEN IMAGE DISPLAY
========================================================= */

galleryMainImage.addEventListener("error", () => {

    galleryMainImage.alt = "Gallery image unavailable";

});


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "%cASOMI ENTERPRISE",
    "font-size:24px;font-weight:bold;"
);

console.log(
    "Premium Printing Services • Guwahati"
);
/* =========================================================
   ASOMI ENTERPRISE
   PREMIUM MOUSE + SPACE + GALLERY ANIMATIONS
========================================================= */


/* =========================================================
   1. MOUSE FOLLOW BACKGROUND
========================================================= */

const root = document.documentElement;

let mouseTargetX = window.innerWidth / 2;
let mouseTargetY = window.innerHeight / 2;

let mouseCurrentX = mouseTargetX;
let mouseCurrentY = mouseTargetY;


document.addEventListener("mousemove", (event) => {

    mouseTargetX = event.clientX;
    mouseTargetY = event.clientY;

});


function animateMouseBackground() {

    mouseCurrentX +=
        (mouseTargetX - mouseCurrentX) * 0.08;

    mouseCurrentY +=
        (mouseTargetY - mouseCurrentY) * 0.08;


    root.style.setProperty(
        "--mouse-x",
        `${mouseCurrentX}px`
    );

    root.style.setProperty(
        "--mouse-y",
        `${mouseCurrentY}px`
    );


    requestAnimationFrame(
        animateMouseBackground
    );
}


animateMouseBackground();



/* =========================================================
   2. SPACE PARTICLES
========================================================= */

const particleContainer =
    document.querySelector(".space-particles");


if (particleContainer) {

    const particleCount =
        window.innerWidth <= 768 ? 18 : 35;


    for (let i = 0; i < particleCount; i++) {

        const particle =
            document.createElement("span");


        particle.className =
            "space-particle";


        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.top =
            `${Math.random() * 100}%`;


        particle.style.setProperty(
            "--particle-x",
            `${(Math.random() - 0.5) * 100}px`
        );

        particle.style.setProperty(
            "--particle-y",
            `${(Math.random() - 0.5) * 100}px`
        );


        particle.style.setProperty(
            "--particle-duration",
            `${5 + Math.random() * 8}s`
        );


        particle.style.setProperty(
            "--particle-opacity",
            `${0.25 + Math.random() * 0.5}`
        );


        particle.style.animationDelay =
            `${Math.random() * 6}s`;


        particleContainer.appendChild(
            particle
        );
    }
}



/* =========================================================
   3. GALLERY IMAGE ANIMATION
========================================================= */

function animateGalleryImage() {

    if (!galleryMainImage) {
        return;
    }


    galleryMainImage.classList.remove(
        "gallery-enter"
    );


    /*
       Force browser reflow so the animation
       can restart every time the image changes.
    */
    void galleryMainImage.offsetWidth;


    galleryMainImage.classList.add(
        "gallery-enter"
    );
}


/* =========================================================
   UPDATE YOUR EXISTING renderGallery()
========================================================= */

const originalRenderGallery =
    renderGallery;


/*
   We don't replace the gallery system.
   We simply add animation after rendering.
*/

window.renderGalleryWithAnimation =
    function () {

        originalRenderGallery();

        setTimeout(() => {

            animateGalleryImage();

        }, 120);

};
/* =========================================================
   ASOMI ENTERPRISE
   SPARKLE / PARTICLE CURSOR
========================================================= */

(() => {

    /* =========================================
       DESKTOP ONLY
    ========================================= */

    if (window.innerWidth <= 768) {
        return;
    }


    const cursor =
        document.getElementById("customCursor");

    const sparkleContainer =
        document.getElementById(
            "cursorSparkleContainer"
        );


    if (!cursor || !sparkleContainer) {
        return;
    }


    /* =========================================
       MOUSE POSITION
    ========================================= */

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;


    let lastSparkX = mouseX;
    let lastSparkY = mouseY;


    let mouseMoving = false;


    /* =========================================
       MOUSE MOVE
    ========================================= */

    document.addEventListener(
        "mousemove",
        (event) => {

            mouseX = event.clientX;
            mouseY = event.clientY;

            mouseMoving = true;

        }
    );


    /* =========================================
       SMOOTH CURSOR
    ========================================= */

    function animateCursor() {

        currentX +=
            (mouseX - currentX) * 0.22;

        currentY +=
            (mouseY - currentY) * 0.22;

        /* =====================================
           CREATE SPARKLE
        ===================================== */

        const dx =
            currentX - lastSparkX;

        const dy =
            currentY - lastSparkY;

        const distance =
            Math.sqrt(
                dx * dx +
                dy * dy
            );


        if (
            mouseMoving &&
            distance > 7
        ) {

            createSpark(
                currentX,
                currentY,
                dx,
                dy
            );

            lastSparkX = currentX;
            lastSparkY = currentY;

        }


        mouseMoving = false;


        requestAnimationFrame(
            animateCursor
        );

    }


    animateCursor();


    /* =========================================
       CREATE SPARKLE
    ========================================= */

    function createSpark(
        x,
        y,
        directionX,
        directionY
    ) {

        const spark =
            document.createElement("span");


        spark.className =
            "cursor-spark";


        const size =
            2 + Math.random() * 4;


        const life =
            450 + Math.random() * 350;


        const spread =
            8 + Math.random() * 18;


        const randomX =
            (Math.random() - 0.5) *
            spread;


        const randomY =
            (Math.random() - 0.5) *
            spread;


        const driftX =
            -directionX * 0.45 +
            randomX;


        const driftY =
            -directionY * 0.45 +
            randomY;


        spark.style.setProperty(
            "--spark-x",
            `${x}px`
        );


        spark.style.setProperty(
            "--spark-y",
            `${y}px`
        );


        spark.style.setProperty(
            "--spark-size",
            `${size}px`
        );


        spark.style.setProperty(
            "--spark-life",
            `${life}ms`
        );


        spark.style.setProperty(
            "--spark-dx",
            `${driftX}px`
        );


        spark.style.setProperty(
            "--spark-dy",
            `${driftY}px`
        );


        sparkleContainer.appendChild(
            spark
        );


        setTimeout(
            () => {

                spark.remove();

            },
            life + 50
        );

    }


    /* =========================================
       HOVER ELEMENTS
    ========================================= */

    const hoverElements =
        document.querySelectorAll(
            "a, button, .service-card, .nav-link, .btn"
        );


    hoverElements.forEach(
        element => {

            element.addEventListener(
                "mouseenter",
                () => {

                    cursor.classList.add(
                        "cursor-hover"
                    );

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    cursor.classList.remove(
                        "cursor-hover"
                    );

                }
            );

        }
    );


    /* =========================================
       CLICK BURST
    ========================================= */

    document.addEventListener(
        "click",
        (event) => {

            createClickBurst(
                event.clientX,
                event.clientY
            );

        }
    );


    function createClickBurst(
        x,
        y
    ) {

        const particleCount = 12;


        for (
            let i = 0;
            i < particleCount;
            i++
        ) {

            const burst =
                document.createElement("span");


            burst.className =
                "cursor-burst";


            const angle =
                (
                    Math.PI * 2 /
                    particleCount
                ) * i;


            const distance =
                20 +
                Math.random() * 28;


            const burstX =
                Math.cos(angle) *
                distance;


            const burstY =
                Math.sin(angle) *
                distance;


            burst.style.left =
                `${x}px`;


            burst.style.top =
                `${y}px`;


            burst.style.setProperty(
                "--burst-x",
                `${burstX}px`
            );


            burst.style.setProperty(
                "--burst-y",
                `${burstY}px`
            );


            sparkleContainer.appendChild(
                burst
            );


            setTimeout(
                () => {

                    burst.remove();

                },
                700
            );

        }

    }

})();
