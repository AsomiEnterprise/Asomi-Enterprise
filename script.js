const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

document.querySelectorAll(".tilt-card").forEach(card => {
  card.addEventListener("pointermove", e => {
    if (window.innerWidth < 800) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    card.style.transform = `perspective(1000px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg) translateY(-6px)`;
  });
  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

/* Service photo galleries: photos stay hidden until the service is clicked */
const galleryData = {
  digital: {
    title: "Digital Printing",
    subtitle: "Our digital printing facility & production work",
    photos: [
      ["images/digital-1.jpg", "Digital Printing Facility — 01"],
      ["images/digital-2.jpg", "Digital Printing Facility — 02"],
      ["images/digital-3.jpg", "Digital Printing Production — 03"],
      ["images/digital-4.jpg", "Digital Printing Production — 04"]
    ]
  },
  flex: {
    title: "Flex & Banner Printing",
    subtitle: "Our large-format printing & banner production work",
    photos: [
      ["images/flex-1.jpg", "Flex & Banner Printing — 01"],
      ["images/flex-2.jpg", "Flex & Banner Printing — 02"]
    ]
  }
};

const galleryModal = document.getElementById("galleryModal");
const galleryGrid = document.getElementById("galleryGrid");
const galleryTitle = document.getElementById("galleryTitle");
const gallerySubtitle = document.getElementById("gallerySubtitle");

function openGallery(type){
  const data = galleryData[type];
  if(!data) return;
  galleryTitle.textContent = data.title;
  gallerySubtitle.textContent = data.subtitle;
  galleryGrid.innerHTML = data.photos.map((photo, i) => `
    <figure class="gallery-item">
      <img src="${photo[0]}" alt="${photo[1]}" loading="${i === 0 ? "eager" : "lazy"}">
      <figcaption>${photo[1]}</figcaption>
    </figure>
  `).join("");
  galleryModal.classList.add("open");
  galleryModal.setAttribute("aria-hidden","false");
  document.body.classList.add("gallery-open");
}

function closeGallery(){
  galleryModal.classList.remove("open");
  galleryModal.setAttribute("aria-hidden","true");
  document.body.classList.remove("gallery-open");
}

document.querySelectorAll(".service-trigger").forEach(card => {
  card.addEventListener("click", e => {
    if(e.target.closest("a")) return;
    openGallery(card.dataset.gallery);
  });
});

document.querySelectorAll("[data-close-gallery]").forEach(el => {
  el.addEventListener("click", closeGallery);
});

document.addEventListener("keydown", e => {
  if(e.key === "Escape") closeGallery();
});
/* =========================================
   SERVICE CARDS 1–14
   CLICK TO LIGHT
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const serviceCards = document.querySelectorAll(
        ".services-grid .service-card"
    );

    serviceCards.forEach(function (card) {

        card.addEventListener("click", function () {

            // Remove light effect from every card
            serviceCards.forEach(function (item) {
                item.classList.remove("active");
            });

            // Add light effect to clicked card
            card.classList.add("active");

        });

    });

});
