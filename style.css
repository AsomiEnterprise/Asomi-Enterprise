/* ==========================================
   ASOMI ENTERPRISE
   PREMIUM WEBSITE
========================================== */

:root {

    --bg: #07090d;
    --bg-soft: #0c1017;
    --card: rgba(18, 23, 32, 0.78);

    --gold: #d9b56d;
    --gold-light: #f2d79b;
    --gold-dark: #8f6c32;

    --white: #f7f4ed;
    --muted: #9299a6;
    --line: rgba(255,255,255,0.09);

    --shadow:
        0 30px 80px rgba(0,0,0,0.5);

    --transition:
        all 0.45s cubic-bezier(.2,.8,.2,1);
}


/* ==========================================
   RESET
========================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {

    background: var(--bg);
    color: var(--white);

    font-family: "DM Sans", sans-serif;

    overflow-x: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    font: inherit;
}


/* ==========================================
   BACKGROUND
========================================== */

.background {

    position: fixed;

    inset: 0;

    pointer-events: none;

    overflow: hidden;

    z-index: -1;
}

.grid {

    position: absolute;

    inset: 0;

    background-image:
        linear-gradient(
            rgba(255,255,255,0.025) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255,255,255,0.025) 1px,
            transparent 1px
        );

    background-size: 80px 80px;

    mask-image:
        linear-gradient(
            to bottom,
            black,
            transparent 90%
        );
}

.glow {

    position: absolute;

    width: 650px;
    height: 650px;

    border-radius: 50%;

    filter: blur(120px);

    opacity: .12;

    animation: glowMove 12s ease-in-out infinite alternate;
}

.glow-one {

    background: var(--gold);

    top: -350px;
    left: -250px;
}

.glow-two {

    background: #31506d;

    right: -350px;
    bottom: -250px;

    animation-delay: -5s;
}

@keyframes glowMove {

    from {
        transform: translate(0,0) scale(1);
    }

    to {
        transform: translate(120px,80px) scale(1.2);
    }
}


.floating-line {

    position: absolute;

    width: 500px;
    height: 1px;

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(217,181,109,.5),
            transparent
        );

    transform: rotate(-30deg);

    opacity: .35;

    animation: lineFloat 12s linear infinite;
}

.line-one {
    top: 20%;
    left: -200px;
}

.line-two {
    top: 55%;
    right: -250px;
    animation-delay: -5s;
}

.line-three {
    top: 80%;
    left: 20%;
    animation-delay: -8s;
}

@keyframes lineFloat {

    0% {
        transform: translateX(-150px) rotate(-30deg);
    }

    50% {
        transform: translateX(300px) rotate(-30deg);
    }

    100% {
        transform: translateX(-150px) rotate(-30deg);
    }
}


/* ==========================================
   NAVBAR
========================================== */

.navbar {

    width: min(1240px, 92%);

    margin: 0 auto;

    height: 92px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    position: relative;

    z-index: 20;
}

.logo {

    display: flex;

    align-items: center;

    gap: 12px;
}

.logo-mark {

    width: 42px;
    height: 42px;

    border: 1px solid rgba(217,181,109,.55);

    display: grid;

    place-items: center;

    color: var(--gold-light);

    font-family: "Playfair Display";

    font-size: 14px;

    box-shadow:
        0 0 25px rgba(217,181,109,.08);

    transition: var(--transition);
}

.logo:hover .logo-mark {

    transform: rotate(8deg) scale(1.08);

    box-shadow:
        0 0 35px rgba(217,181,109,.25);
}

.logo-text {

    display: flex;

    flex-direction: column;

    line-height: 1;
}

.logo-text strong {

    font-size: 15px;

    letter-spacing: 4px;
}

.logo-text small {

    color: var(--gold);

    font-size: 7px;

    letter-spacing: 3px;

    margin-top: 5px;
}

nav {

    display: flex;

    gap: 38px;
}

nav a {

    color: #b4b9c3;

    font-size: 13px;

    transition: var(--transition);

    position: relative;
}

nav a::after {

    content: "";

    position: absolute;

    bottom: -7px;

    left: 0;

    width: 0;

    height: 1px;

    background: var(--gold);

    transition: .35s;
}

nav a:hover {

    color: var(--white);
}

nav a:hover::after {

    width: 100%;
}

.nav-button {

    border: 1px solid rgba(217,181,109,.4);

    padding: 12px 20px;

    font-size: 12px;

    letter-spacing: 1px;

    color: var(--gold-light);

    transition: var(--transition);
}

.nav-button:hover {

    background: var(--gold);

    color: #101010;

    box-shadow:
        0 10px 30px rgba(217,181,109,.18);
}

.menu-toggle {
    display: none;
}


/* ==========================================
   HERO
========================================== */

.hero {

    width: min(1240px, 92%);

    min-height: calc(100vh - 92px);

    margin: auto;

    display: grid;

    grid-template-columns: 1fr 1fr;

    align-items: center;

    gap: 70px;

    padding: 80px 0 120px;
}

.eyebrow {

    display: flex;

    align-items: center;

    gap: 12px;

    color: var(--gold);

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 3px;

    margin-bottom: 24px;
}

.eyebrow span {

    width: 28px;
    height: 1px;

    background: var(--gold);
}

.hero h1 {

    font-family: "Playfair Display", serif;

    font-size: clamp(55px, 6vw, 92px);

    line-height: .98;

    font-weight: 500;

    letter-spacing: -4px;

    margin-bottom: 30px;
}

.hero h1 span {

    display: block;

    color: var(--white);
}

.hero h1 strong {

    display: block;

    color: transparent;

    background:
        linear-gradient(
            110deg,
            var(--gold-dark),
            var(--gold-light),
            #fff1c9,
            var(--gold)
        );

    background-clip: text;
    -webkit-background-clip: text;

    animation: goldText 5s ease-in-out infinite alternate;
}

@keyframes goldText {

    from {
        filter: brightness(.8);
    }

    to {
        filter: brightness(1.3);
    }
}

.hero-content > p {

    max-width: 570px;

    color: var(--muted);

    line-height: 1.9;

    font-size: 15px;

    margin-bottom: 38px;
}

.hero-content > p b {

    color: var(--white);
}

.hero-buttons {

    display: flex;

    gap: 14px;

    flex-wrap: wrap;
}

.btn {

    display: inline-flex;

    align-items: center;

    gap: 15px;

    padding: 15px 23px;

    font-size: 12px;

    letter-spacing: 1px;

    transition: var(--transition);
}

.btn-primary {

    background:
        linear-gradient(
            110deg,
            var(--gold-dark),
            var(--gold-light)
        );

    color: #111;

    box-shadow:
        0 12px 35px rgba(217,181,109,.12);
}

.btn-primary:hover {

    transform: translateY(-4px);

    box-shadow:
        0 20px 45px rgba(217,181,109,.25);
}

.btn-outline {

    border: 1px solid var(--line);

    color: #c5cad3;

    background: rgba(255,255,255,.02);
}

.btn-outline:hover {

    border-color: rgba(217,181,109,.5);

    color: var(--gold-light);

    transform: translateY(-4px);
}

.hero-stats {

    display: flex;

    gap: 45px;

    margin-top: 70px;

    padding-top: 28px;

    border-top: 1px solid var(--line);

    max-width: 560px;
}

.hero-stats div {

    display: flex;

    flex-direction: column;

    gap: 6px;
}

.hero-stats strong {

    font-family: "Playfair Display";

    font-size: 25px;

    color: var(--gold-light);
}

.hero-stats span {

    font-size: 9px;

    letter-spacing: 1.5px;

    text-transform: uppercase;

    color: var(--muted);
}


/* ==========================================
   HERO VISUAL
========================================== */

.hero-visual {

    height: 620px;

    position: relative;

    display: grid;

    place-items: center;
}

.print-card {

    width: 330px;

    height: 450px;

    position: relative;

    z-index: 5;

    padding: 25px;

    background:
        linear-gradient(
            145deg,
            #1d222c,
            #0b0e14
        );

    border: 1px solid rgba(217,181,109,.22);

    box-shadow:
        35px 40px 100px rgba(0,0,0,.65),
        inset 0 0 60px rgba(217,181,109,.025);

    transform:
        perspective(1000px)
        rotateY(-10deg)
        rotateX(4deg);

    animation: cardFloat 6s ease-in-out infinite;
}

@keyframes cardFloat {

    0%,100% {
        transform:
            perspective(1000px)
            rotateY(-10deg)
            rotateX(4deg)
            translateY(0);
    }

    50% {
        transform:
            perspective(1000px)
            rotateY(-5deg)
            rotateX(6deg)
            translateY(-18px);
    }
}

.card-top,
.print-footer {

    display: flex;

    justify-content: space-between;

    font-size: 8px;

    letter-spacing: 2px;

    color: var(--gold);
}

.print-logo {

    width: 90px;
    height: 90px;

    border: 1px solid rgba(217,181,109,.5);

    display: grid;

    place-items: center;

    margin: 85px auto 35px;

    font-family: "Playfair Display";

    font-size: 30px;

    color: var(--gold-light);

    box-shadow:
        0 0 50px rgba(217,181,109,.08);
}

.print-title {

    text-align: center;

    display: flex;

    flex-direction: column;

    font-family: "Playfair Display";

    font-size: 25px;

    letter-spacing: 5px;
}

.print-title strong {

    color: var(--gold);
}

.print-footer {

    position: absolute;

    bottom: 25px;

    left: 25px;

    right: 25px;
}

.orbit {

    position: absolute;

    border: 1px solid rgba(217,181,109,.13);

    border-radius: 50%;

    animation: orbitSpin 20s linear infinite;
}

.orbit-one {

    width: 560px;
    height: 560px;
}

.orbit-two {

    width: 440px;
    height: 440px;

    animation-duration: 14s;

    animation-direction: reverse;
}

@keyframes orbitSpin {

    to {
        transform: rotate(360deg);
    }
}

.mini-card {

    position: absolute;

    z-index: 10;

    padding: 16px 20px;

    background: rgba(15,18,25,.85);

    border: 1px solid var(--line);

    backdrop-filter: blur(15px);

    box-shadow:
        0 20px 50px rgba(0,0,0,.35);

    display: flex;

    flex-direction: column;

    gap: 7px;

    animation: miniFloat 5s ease-in-out infinite;
}

.mini-card span {

    font-size: 8px;

    color: var(--muted);

    letter-spacing: 2px;
}

.mini-card strong {

    color: var(--gold-light);

    font-family: "Playfair Display";

    font-size: 20px;
}

.card-a {
    top: 90px;
    left: 5%;
}

.card-b {
    right: 3%;
    top: 250px;
    animation-delay: -1.5s;
}

.card-c {
    left: 8%;
    bottom: 80px;
    animation-delay: -3s;
}

@keyframes miniFloat {

    0%,100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-12px);
    }
}


/* ==========================================
   SECTIONS
========================================== */

.services-section,
.about-section,
.contact-section {

    width: min(1240px, 92%);

    margin: auto;
}

.services-section {

    padding: 130px 0;
}

.section-heading {

    max-width: 750px;

    margin-bottom: 65px;
}

.section-heading h2,
.about-content h2,
.contact-heading h2 {

    font-family: "Playfair Display";

    font-size: clamp(45px, 5vw, 70px);

    font-weight: 500;

    line-height: 1;

    letter-spacing: -2px;

    margin-bottom: 25px;
}

.section-heading h2 em,
.about-content h2 em,
.contact-heading h2 em {

    color: var(--gold);

    font-style: normal;
}

.section-heading p {

    color: var(--muted);

    line-height: 1.8;

    font-size: 14px;

    max-width: 600px;
}


/* ==========================================
   SERVICE CARDS
========================================== */

.services-grid {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 18px;
}

.service-card {

    position: relative;

    min-height: 280px;

    padding: 28px;

    overflow: hidden;

    background:
        linear-gradient(
            145deg,
            rgba(26,31,42,.75),
            rgba(11,14,20,.85)
        );

    border: 1px solid rgba(255,255,255,.065);

    transition:
        transform .55s cubic-bezier(.2,.8,.2,1),
        border-color .4s,
        box-shadow .5s;

    cursor: pointer;
}

.service-card::before {

    content: "";

    position: absolute;

    width: 180px;
    height: 180px;

    border-radius: 50%;

    top: -100px;
    right: -100px;

    background: var(--gold);

    filter: blur(80px);

    opacity: 0;

    transition: .5s;
}

.service-card:hover {

    transform:
        translateY(-15px)
        scale(1.025);

    border-color:
        rgba(217,181,109,.35);

    box-shadow:
        0 30px 70px rgba(0,0,0,.45),
        0 0 35px rgba(217,181,109,.08);
}

.service-card:hover::before {

    opacity: .12;
}

.service-number {

    position: absolute;

    top: 20px;
    right: 22px;

    color: rgba(255,255,255,.18);

    font-size: 10px;

    letter-spacing: 2px;
}

.service-icon {

    width: 48px;
    height: 48px;

    display: grid;

    place-items: center;

    border: 1px solid rgba(217,181,109,.3);

    color: var(--gold-light);

    font-size: 20px;

    margin-bottom: 45px;

    transition: var(--transition);
}

.service-card:hover .service-icon {

    transform:
        rotate(8deg)
        scale(1.12);

    background:
        rgba(217,181,109,.08);

    box-shadow:
        0 0 30px rgba(217,181,109,.15);
}

.service-card h3 {

    font-family: "Playfair Display";

    font-size: 22px;

    font-weight: 500;

    margin-bottom: 12px;
}

.service-card p {

    color: var(--muted);

    font-size: 12px;

    line-height: 1.7;
}

.service-link {

    display: block;

    margin-top: 25px;

    color: var(--gold);

    font-size: 10px;

    letter-spacing: 1px;
}


/* ==========================================
   ABOUT
========================================== */

.about-section {

    padding: 100px 0 150px;

    display: grid;

    grid-template-columns: .9fr 1.1fr;

    gap: 100px;

    align-items: center;
}

.about-visual {

    display: grid;

    place-items: center;
}

.about-box {

    width: 390px;
    height: 470px;

    padding: 40px;

    background:
        linear-gradient(
            145deg,
            #171c25,
            #090c12
        );

    border: 1px solid rgba(217,181,109,.2);

    box-shadow:
        30px 35px 80px rgba(0,0,0,.5);

    position: relative;

    display: flex;

    flex-direction: column;

    justify-content: space-between;

    animation: aboutFloat 7s ease-in-out infinite;
}

@keyframes aboutFloat {

    0%,100% {
        transform: rotate(-2deg) translateY(0);
    }

    50% {
        transform: rotate(2deg) translateY(-15px);
    }
}

.box-small {

    font-size: 9px;

    color: var(--gold);

    letter-spacing: 4px;
}

.about-box h3 {

    font-family: "Playfair Display";

    font-size: 53px;

    line-height: .95;

    letter-spacing: -2px;
}

.about-box h3 span {

    color: var(--gold);
}

.box-line {

    width: 100%;

    height: 1px;

    background:
        linear-gradient(
            90deg,
            var(--gold),
            transparent
        );
}

.box-bottom {

    font-size: 8px;

    letter-spacing: 3px;

    color: var(--muted);
}

.about-content > p {

    max-width: 570px;

    color: var(--muted);

    line-height: 1.9;

    font-size: 14px;

    margin-bottom: 40px;
}

.benefits {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 25px;
}

.benefit {

    display: flex;

    gap: 14px;
}

.benefit-icon {

    min-width: 32px;
    height: 32px;

    display: grid;

    place-items: center;

    border: 1px solid rgba(217,181,109,.35);

    color: var(--gold);

    font-size: 12px;
}

.benefit h4 {

    font-size: 13px;

    margin-bottom: 5px;
}

.benefit p {

    color: var(--muted);

    font-size: 11px;

    line-height: 1.5;
}


/* ==========================================
   CTA
========================================== */

.cta-section {

    width: min(1240px, 92%);

    margin: 0 auto 140px;

    padding: 70px;

    border: 1px solid rgba(217,181,109,.18);

    background:
        radial-gradient(
            circle at 90% 50%,
            rgba(217,181,109,.1),
            transparent 40%
        ),
        #0c1017;

    box-shadow:
        0 40px 100px rgba(0,0,0,.35);
}

.cta-inner {

    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 40px;
}

.cta-label {

    font-size: 9px;

    color: var(--gold);

    letter-spacing: 3px;
}

.cta-section h2 {

    font-family: "Playfair Display";

    font-size: clamp(40px, 4vw, 60px);

    font-weight: 500;

    line-height: 1;

    margin: 18px 0;
}

.cta-section h2 em {

    color: var(--gold);

    font-style: normal;
}

.cta-section p {

    color: var(--muted);

    font-size: 13px;
}

.cta-actions {

    display: flex;

    gap: 12px;

    flex-wrap: wrap;
}


/* ==========================================
   CONTACT
========================================== */

.contact-section {

    padding-bottom: 130px;
}

.contact-heading {

    margin-bottom: 60px;
}

.contact-layout {

    display: grid;

    grid-template-columns: .7fr 1.3fr;

    gap: 30px;
}

.contact-details {

    display: flex;

    flex-direction: column;

    gap: 15px;
}

.contact-item {

    padding: 30px;

    border: 1px solid var(--line);

    background: rgba(255,255,255,.015);

    display: flex;

    gap: 20px;

    transition: var(--transition);
}

.contact-item:hover {

    transform: translateX(6px);

    border-color:
        rgba(217,181,109,.3);

    box-shadow:
        0 20px 50px rgba(0,0,0,.3);
}

.contact-icon {

    min-width: 42px;
    height: 42px;

    display: grid;

    place-items: center;

    color: var(--gold);

    border: 1px solid rgba(217,181,109,.25);
}

.contact-item small {

    display: block;

    color: var(--gold);

    font-size: 8px;

    letter-spacing: 2px;

    margin-bottom: 8px;
}

.contact-item h3 {

    font-family: "Playfair Display";

    font-size: 18px;

    font-weight: 500;

    margin-bottom: 5px;
}

.contact-item p {

    color: var(--muted);

    font-size: 11px;

    line-height: 1.6;
}

.contact-item a {

    display: block;

    color: var(--white);

    font-size: 14px;

    margin: 4px 0;

    transition: .3s;
}

.contact-item a:hover {

    color: var(--gold);
}

.map-container {

    min-height: 530px;

    position: relative;

    overflow: hidden;

    border: 1px solid var(--line);

    box-shadow:
        0 30px 70px rgba(0,0,0,.4);
}

.map-container iframe {

    width: 100%;
    height: 100%;

    min-height: 530px;

    border: 0;

    filter:
        grayscale(.8)
        contrast(1.15)
        brightness(.65);
}

.map-overlay {

    position: absolute;

    left: 25px;
    bottom: 25px;

    padding: 16px 20px;

    display: flex;

    gap: 13px;

    align-items: center;

    background: rgba(7,9,13,.9);

    border: 1px solid rgba(217,181,109,.25);

    backdrop-filter: blur(12px);
}

.map-overlay > span {

    color: var(--gold);

    font-size: 20px;
}

.map-overlay strong {

    display: block;

    font-family: "Playfair Display";

    font-size: 15px;
}

.map-overlay small {

    color: var(--muted);

    font-size: 9px;
}


/* ==========================================
   FOOTER
========================================== */

footer {

    border-top: 1px solid var(--line);

    background: #05070a;
}

.footer-top {

    width: min(1240px, 92%);

    margin: auto;

    padding: 70px 0;

    display: grid;

    grid-template-columns: 2fr 1fr 1fr 1fr;

    gap: 50px;
}

.footer-brand p {

    color: var(--muted);

    font-size: 12px;

    line-height: 1.8;

    max-width: 320px;

    margin-top: 20px;
}

.footer-column {

    display: flex;

    flex-direction: column;

    gap: 12px;
}

.footer-column h4 {

    font-size: 10px;

    letter-spacing: 2px;

    color: var(--gold);

    margin-bottom: 10px;
}

.footer-column a,
.footer-column span {

    color: var(--muted);

    font-size: 11px;

    transition: .3s;
}

.footer-column a:hover {

    color: var(--gold-light);
}

.footer-bottom {

    width: min(1240px, 92%);

    margin: auto;

    padding: 22px 0;

    border-top: 1px solid var(--line);

    display: flex;

    justify-content: space-between;

    color: #555b65;

    font-size: 9px;

    letter-spacing: 1px;
}


/* ==========================================
   FLOATING CALL BUTTON
========================================== */

.floating-call {

    position: fixed;

    right: 25px;
    bottom: 25px;

    z-index: 50;

    width: 55px;
    height: 55px;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 50%;

    background:
        linear-gradient(
            135deg,
            var(--gold),
            var(--gold-light)
        );

    color: #111;

    box-shadow:
        0 12px 35px rgba(217,181,109,.25);

    transition: var(--transition);
}

.floating-call span {

    position: absolute;

    right: 68px;

    background: #11161e;

    color: var(--white);

    padding: 8px 12px;

    font-size: 9px;

    opacity: 0;

    transform: translateX(10px);

    transition: .3s;

    white-space: nowrap;
}

.floating-call:hover {

    transform: scale(1.08);

    box-shadow:
        0 15px 45px rgba(217,181,109,.4);
}

.floating-call:hover span {

    opacity: 1;

    transform: translateX(0);
}


/* ==========================================
   SCROLL REVEAL
========================================== */

.reveal {

    opacity: 0;

    transform: translateY(40px);

    transition:
        opacity .9s ease,
        transform .9s cubic-bezier(.2,.8,.2,1);
}

.reveal.visible {

    opacity: 1;

    transform: translateY(0);
}


/* ==========================================
   CUSTOM SCROLLBAR
========================================== */

::-webkit-scrollbar {

    width: 7px;
}

::-webkit-scrollbar-track {

    background: #05070a;
}

::-webkit-scrollbar-thumb {

    background: #37322a;

    border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {

    background: var(--gold-dark);
}


/* ==========================================
   RESPONSIVE
========================================== */

@media (max-width: 1000px) {

    nav,
    .nav-button {

        display: none;
    }

    .menu-toggle {

        display: flex;

        flex-direction: column;

        gap: 5px;

        border: 0;

        background: transparent;

        cursor: pointer;
    }

    .menu-toggle span {

        width: 25px;
        height: 1px;

        background: var(--gold);
    }

    .navbar.menu-open nav {

        display: flex;

        position: absolute;

        top: 80px;

        left: 0;
        right: 0;

        padding: 25px;

        flex-direction: column;

        background: rgba(8,10,14,.96);

        border: 1px solid var(--line);

        gap: 20px;

        backdrop-filter: blur(20px);
    }

    .hero {

        grid-template-columns: 1fr;

        padding-top: 50px;

        text-align: center;
    }

    .hero .eyebrow {

        justify-content: center;
    }

    .hero-content > p {

        margin-left: auto;
        margin-right: auto;
    }

    .hero-buttons,
    .hero-stats {

        justify-content: center;
    }

    .hero-visual {

        height: 540px;
    }

    .services-grid {

        grid-template-columns:
            repeat(2, 1fr);
    }

    .about-section {

        grid-template-columns: 1fr;

    }

    .about-visual {

        order: 2;
    }

    .about-content {

        order: 1;
    }

    .contact-layout {

        grid-template-columns: 1fr;
    }

    .cta-inner {

        flex-direction: column;

        align-items: flex-start;
    }

    .footer-top {

        grid-template-columns:
            repeat(2, 1fr);
    }
}


@media (max-width: 600px) {

    .navbar {

        height: 75px;
    }

    .hero {

        min-height: auto;

        padding:
            55px 0 80px;
    }

    .hero h1 {

        font-size: 52px;

        letter-spacing: -3px;
    }

    .hero-stats {

        gap: 20px;

        flex-wrap: wrap;
    }

    .hero-visual {

        height: 450px;

        transform: scale(.82);
    }

    .print-card {

        width: 280px;
        height: 390px;
    }

    .orbit-one {

        width: 450px;
        height: 450px;
    }

    .orbit-two {

        width: 350px;
        height: 350px;
    }

    .services-section {

        padding: 80px 0;
    }

    .services-grid {

        grid-template-columns: 1fr;
    }

    .service-card {

        min-height: 260px;
    }

    .about-section {

        padding:
            70px 0 100px;
    }

    .about-box {

        width: 100%;

        max-width: 390px;

        height: 430px;
    }

    .benefits {

        grid-template-columns: 1fr;
    }

    .cta-section {

        padding: 40px 25px;

        margin-bottom: 90px;
    }

    .cta-actions {

        width: 100%;

        flex-direction: column;
    }

    .cta-actions .btn {

        justify-content: center;
    }

    .footer-top {

        grid-template-columns: 1fr;

        gap: 35px;
    }

    .footer-bottom {

        flex-direction: column;

        gap: 10px;
    }

    .map-container,
    .map-container iframe {

        min-height: 400px;
    }

    .floating-call {

        right: 18px;
        bottom: 18px;
    }
}
