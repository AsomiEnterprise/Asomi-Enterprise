/* =========================================================
   ASOMI ENTERPRISE
   MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   YEAR
   ========================================================= */

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

      }

    });

  },
  {
    threshold: 0.12
  }
);


document
  .querySelectorAll(".reveal")
  .forEach((element) => {

    observer.observe(element);

  });


/* =========================================================
   CURSOR GOLD GLOW
   ========================================================= */

const glow = document.querySelector(".cursor-glow");

if (glow) {

  window.addEventListener("pointermove", (event) => {

    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";

  });

}


/* =========================================================
   3D CARD TILT
   ========================================================= */

const tiltCards = document.querySelectorAll(
  ".service-card, .mini-card"
);


tiltCards.forEach((card) => {

  card.addEventListener("pointermove", (event) => {

    if (window.innerWidth < 800) {
      return;
    }

    const rect = card.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
      rect.width -
      0.5;

    const y =
      (event.clientY - rect.top) /
      rect.height -
      0.5;


    card.style.transform = `
      perspective(1000px)
      rotateX(${-y * 4}deg)
      rotateY(${x * 4}deg)
      translateY(-8px)
      scale(1.01)
    `;

  });


  card.addEventListener("pointerleave", () => {

    card.style.transform = "";

  });

});


/* =========================================================
   SERVICE CARD 1–14
   CLICK TO LIGHT
   ========================================================= */

const allServiceCards = document.querySelectorAll(
  ".service-card, .mini-card"
);


allServiceCards.forEach((card) => {

  card.addEventListener("click", (event) => {

    /*
      Gallery button ko card active logic se alag rakho.
    */

    if (event.target.closest(".gallery-btn")) {
      return;
    }


    /*
      Sab cards se active remove
    */

    allServiceCards.forEach((item) => {

      item.classList.remove("active");

    });


    /*
      Sirf clicked card light
    */

    card.classList.add("active");

  });

});

/* =========================================
   SERVICE PHOTO GALLERY
   FINAL PHOTO ARRANGEMENT
   ========================================= */

const galleryData = {

  /* ================================
     DIGITAL PRINTING
     4 PHOTOS
     ================================ */
  digital: {
    title: "Digital Printing",
    subtitle: "Our digital printing facility & production work",

    photos: [
      ["images/digital-1.jpg", "Digital Printing — 01"],
      ["images/digital-2.jpg", "Digital Printing — 02"],
      ["images/digital-3.jpg", "Digital Printing — 03"],
      ["images/digital-4.jpg", "Digital Printing — 04"]
    ]
  },


  /* ================================
     FLEX & BANNER PRINTING
     ONLY 2 PHOTOS
     ================================ */
  flex: {
    title: "Flex & Banner Printing",
    subtitle: "Our large-format printing & banner production work",

    photos: [
      ["images/flex-1.jpg", "Flex & Banner Printing — 01"],
      ["images/flex-2.jpg", "Flex & Banner Printing — 02"]
    ]
  }

};


/* =========================================
   GALLERY ELEMENTS
   ========================================= */

const galleryModal = document.getElementById("galleryModal");
const galleryGrid = document.getElementById("galleryGrid");
const galleryTitle = document.getElementById("galleryTitle");
const gallerySubtitle = document.getElementById("gallerySubtitle");


/* =========================================
   OPEN GALLERY — SECURE VERSION
   ========================================= */

function openGallery(type) {

  const data = galleryData[type];

  if (!data) {
    console.warn("Invalid gallery request blocked.");
    return;
  }

  if (!galleryModal || !galleryGrid) {
    console.warn("Gallery elements not found.");
    return;
  }

  /* Safe text insertion */
  galleryTitle.textContent = data.title;
  gallerySubtitle.textContent = data.subtitle;

  /* Clear existing gallery safely */
  galleryGrid.replaceChildren();

  data.photos.forEach((photo, index) => {

    const figure = document.createElement("figure");
    figure.className = "gallery-item";

    const image = document.createElement("img");

    /*
      Only allow local images.
      This prevents unexpected external image URLs.
    */
    if (
      typeof photo[0] !== "string" ||
      !photo[0].startsWith("images/") ||
      !/\.(jpg|jpeg|png|webp|gif)$/i.test(photo[0])
    ) {
      console.warn("Blocked invalid image path:", photo[0]);
      return;
    }

    image.src = photo[0];

    image.alt =
      typeof photo[1] === "string"
        ? photo[1]
        : "Asomi Enterprise printing work";

    image.loading =
      index === 0
        ? "eager"
        : "lazy";

    image.decoding = "async";

    const caption = document.createElement("figcaption");

    const star = document.createElement("span");
    star.className = "gallery-star";
    star.textContent = "✦";

    caption.appendChild(star);
    caption.appendChild(
      document.createTextNode(
        " " + image.alt
      )
    );

    figure.appendChild(image);
    figure.appendChild(caption);

    galleryGrid.appendChild(figure);

  });

  galleryModal.classList.add("open");

  galleryModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add("gallery-open");
}
/* =========================================
   CLOSE BUTTON / BACKDROP
   ========================================= */

document.querySelectorAll("[data-close-gallery]").forEach(element => {

  element.addEventListener("click", closeGallery);

});


/* =========================================
   ESCAPE KEY
   ========================================= */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closeGallery();
  }

});

/* =========================================================
   MOBILE SAFETY
   ========================================================= */

window.addEventListener(
  "resize",
  () => {

    if (window.innerWidth < 800) {

      tiltCards.forEach((card) => {

        card.style.transform = "";

      });

    }

  }
);
/* =========================================
   ASOMI — UNIQUE TOUCH INTERACTION
   ========================================= */

document.querySelectorAll(".services-grid .service-card").forEach(card => {

    card.addEventListener("pointermove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const px = (x / rect.width) * 100;
        const py = (y / rect.height) * 100;

        /* Golden light position */
        card.style.setProperty("--tx", `${px}%`);
        card.style.setProperty("--ty", `${py}%`);

        /* 3D movement */
        if (window.innerWidth > 800) {

            const rotateY = ((px - 50) / 50) * 2.5;
            const rotateX = ((50 - py) / 50) * 2.5;

            card.style.setProperty("--rx", `${rotateX}deg`);
            card.style.setProperty("--ry", `${rotateY}deg`);
        }

        card.classList.add("touching");

    });


    card.addEventListener("pointerdown", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty(
            "--tx",
            `${(x / rect.width) * 100}%`
        );

        card.style.setProperty(
            "--ty",
            `${(y / rect.height) * 100}%`
        );

        /* Restart ripple */
        card.classList.remove("touching");

        void card.offsetWidth;

        card.classList.add("touching");

    });


    card.addEventListener("pointerleave", () => {

        card.classList.remove("touching");

        card.style.setProperty("--tx", "50%");
        card.style.setProperty("--ty", "50%");
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");

    });


    card.addEventListener("pointerup", () => {

        setTimeout(() => {
            card.classList.remove("touching");
        }, 500);

    });

});
