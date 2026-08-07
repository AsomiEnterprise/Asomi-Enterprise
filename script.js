/*==================================================
  ASOMI ENTERPRISE - PREMIUM SCRIPT.JS
==================================================*/

"use strict";

/*==============================
  PRELOADER
==============================*/

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

/*==============================
  STICKY HEADER
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(15,23,42,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(15,23,42,.75)";
        header.style.boxShadow = "none";

    }

});

/*==============================
  MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav ul");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");
        menuBtn.classList.toggle("active");

    });

}

/*==============================
  ACTIVE NAVIGATION
==============================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*==============================
  SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*==============================
  FADE-UP ANIMATION
==============================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("fade-up");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".card,.feature-box,.contact-box,.hero-card")
.forEach(item=>{

    observer.observe(item);

});

/*==============================
  COUNTER ANIMATION
==============================*/

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

    counter.innerText="0";

    const update=()=>{

        const target=+counter.getAttribute("data-target");
        const count=+counter.innerText;

        const increment=target/100;

        if(count<target){

            counter.innerText=Math.ceil(count+increment);

            setTimeout(update,20);

        }else{

            counter.innerText=target;

        }

    };

    update();

});

/*==============================
  BACK TO TOP BUTTON
==============================*/

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.className="top-btn";

document.body.appendChild(topBtn);

Object.assign(topBtn.style,{
    position:"fixed",
    bottom:"25px",
    right:"25px",
    width:"50px",
    height:"50px",
    border:"none",
    borderRadius:"50%",
    background:"#2563eb",
    color:"#fff",
    cursor:"pointer",
    display:"none",
    fontSize:"18px",
    zIndex:"999",
    transition:"0.3s"
});

window.addEventListener("scroll",()=>{

    topBtn.style.display=window.scrollY>300?"block":"none";

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*==============================
  BUTTON RIPPLE EFFECT
==============================*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const x=e.clientX-this.offsetLeft;
const y=e.clientY-this.offsetTop;

circle.style.left=x+"px";
circle.style.top=y+"px";
circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

/*==============================
  HERO FLOAT EFFECT
==============================*/

const hero=document.querySelector(".hero-card");

document.addEventListener("mousemove",(e)=>{

if(hero){

const x=(window.innerWidth/2-e.pageX)/40;
const y=(window.innerHeight/2-e.pageY)/40;

hero.style.transform=`rotateY(${x}deg) rotateX(${-y}deg)`;

}

});

/*==============================
  TYPING EFFECT
==============================*/

const typing=document.querySelector(".typing");

if(typing){

const words=[
"Digital Printing",
"Book Printing",
"Flex Printing",
"Photo Printing",
"Custom Printing"
];

let wordIndex=0;
let charIndex=0;
let deleting=false;

function type(){

const current=words[wordIndex];

if(!deleting){

typing.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(type,1200);

return;

}

}else{

typing.textContent=current.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

wordIndex=(wordIndex+1)%words.length;

}

}

setTimeout(type,deleting?50:120);

}

type();

}

/*==============================
  CURRENT YEAR
==============================*/

const year=document.querySelector(".year");

if(year){

year.textContent=new Date().getFullYear();

}

/*==============================
  CONSOLE MESSAGE
==============================*/

console.log("%cAsomi Enterprise","color:#2563eb;font-size:28px;font-weight:bold;");

console.log("Premium Printing Website Loaded Successfully.");
