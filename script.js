// 🎶 Music Fade Start


document.body.addEventListener("click",()=>{
  music.volume=0;
  music.play();

  let v=0;
  const fade=setInterval(()=>{
    if(v<1){
      v+=0.05;
      music.volume=v;
    }else clearInterval(fade);
  },200);
},{once:true});

// 🎶 SMART AUTO PLAY MUSIC (No Button Needed)

// 👑 INVISIBLE AUTO-START ILLUSION



// music starts muted automatically
/*music.play().catch(()=>{});

// first tiny interaction = unmute + cinematic fade
function activateSound(){

  music.muted = false;
  music.volume = 0;

  let v = 0;
  const fade = setInterval(()=>{
    if(v < 1){
      v += 0.05;
      music.volume = v;
    }else{
      clearInterval(fade);
    }
  },150);

  document.removeEventListener("touchstart", activateSound);
  document.removeEventListener("scroll", activateSound);
  document.removeEventListener("click", activateSound);
}

// very natural triggers
document.addEventListener("touchstart", activateSound);
document.addEventListener("scroll", activateSound);
document.addEventListener("click", activateSound);*/


// ⏳ Countdown
/*const date=new Date("Feb 28, 2026 20:00:00").getTime();

setInterval(()=>{

  const now=new Date().getTime();
  const d=date-now;

  const ids=["days","hours","minutes","seconds"];

  const values=[
    Math.floor(d/(1000*60*60*24)),
    Math.floor((d%(1000*60*60*24))/(1000*60*60)),
    Math.floor((d%(1000*60*60))/(1000*60)),
    Math.floor((d%(1000*60))/1000)
  ];

  ids.forEach((id,i)=>{
    const el=document.getElementById(id);

    if(el.innerText != values[i]){

      el.innerText=values[i];

      // 👑 trigger glow animation
      el.classList.add("glowPulse");
      setTimeout(()=>el.classList.remove("glowPulse"),600);

    }
  });

},1000);


// 🎥 Interactive tilt
const ring=document.getElementById("ring3d");

document.addEventListener("mousemove",(e)=>{
  const x=(window.innerWidth/2 - e.clientX)/40;
  const y=(window.innerHeight/2 - e.clientY)/40;
  ring.style.transform=`rotateX(${y}deg) rotateY(${x}deg)`;
});

// ❤️ activate heartbeat after music start
document.body.addEventListener("click",()=>{
  document.querySelector(".card").style.animationPlayState="running";
},{once:true});


// 🎉 Confetti Celebration Intro
const confetti = document.getElementById("confetti");

window.addEventListener("load",()=>{

  for(let i=0;i<80;i++){
    const piece=document.createElement("div");
    piece.className="confetti-piece";

    piece.style.left=Math.random()*100+"vw";
    piece.style.background=
      ["#FFD700","#FF69B4","#FFC0CB","#FFFFFF"]
      [Math.floor(Math.random()*4)];

    piece.style.animationDuration=(1+Math.random()*1)+"s";

    confetti.appendChild(piece);

    setTimeout(()=>piece.remove(),1500);
  }

});

// ✨ Typing Intro Animation
/*const text = "🎂 Happy Birthday Princess Sanjana 👑";
const typingEl = document.getElementById("typingText");

let i = 0;

function typeEffect(){
  if(i < text.length){
    typingEl.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect,60); // typing speed
  }
}

window.addEventListener("load",()=>{
  setTimeout(typeEffect,600); // start after confetti
});*/

// ✨ Typing Intro + Music Sync

/*const text = "🎂 Happy Birthday Princess Sanjana 👑";
const typingEl = document.getElementById("typingText");
const music = document.getElementById("bgMusic");

let i = 0;

// start muted autoplay
music.play().catch(()=>{});

function typeEffect(){

  if(i < text.length){

    typingEl.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect,60);

  }else{

    // 👑 typing finished → start cinematic music fade
    music.muted = false;
    music.volume = 0;

    let v = 0;
    const fade = setInterval(()=>{
      if(v < 1){
        v += 0.05;
        music.volume = v;
      }else{
        clearInterval(fade);
      }
    },150);

  }
}

// start typing after page load
window.addEventListener("load",()=>{
  setTimeout(typeEffect,600);
});
// 👑 title reveal + music sync after typing
const title = document.querySelector(".reveal-title");

music.muted = false;
music.volume = 0;

let v = 0;
const fade = setInterval(()=>{
  if(v < 1){
    v += 0.05;
    music.volume = v;
  }else{
    clearInterval(fade);
  }
},150);

// ✨ cinematic title reveal
setTimeout(()=>{
  title.classList.add("show");
},200);*/


/* ===================================================
   👑 FINAL COMPACT CINEMATIC SCRIPT
=================================================== */

/*// 🎶 Elements
const music = document.getElementById("bgMusic");
const typingEl = document.getElementById("typingText");
const title = document.querySelector(".reveal-title");
const ring = document.getElementById("ring3d");
const confetti = document.getElementById("confetti");

// ⏳ Countdown Setup
const date = new Date("Feb 28, 2026 20:00:00").getTime();

// ✨ Typing Text
const text = "🎂 Happy Birthday Princess Sanjana 👑";
let i = 0;


===================================================
   🎉 CONFETTI INTRO
=================================================== 
window.addEventListener("load", () => {

  for (let i = 0; i < 80; i++) {

    const piece = document.createElement("div");
    piece.className = "confetti-piece";

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background =
      ["#FFD700", "#FF69B4", "#FFC0CB", "#FFFFFF"]
      [Math.floor(Math.random() * 4)];

    piece.style.animationDuration = (1 + Math.random()) + "s";

    confetti.appendChild(piece);

    setTimeout(() => piece.remove(), 1500);
  }

  // start typing after confetti
  setTimeout(typeEffect, 600);
});


/* ===================================================
   ✨ TYPING INTRO + MUSIC SYNC + TITLE REVEAL
=================================================== 

// start muted autoplay (allowed by browser)
music.play().catch(()=>{});

function typeEffect(){

  if(i < text.length){

    typingEl.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 60);

  } else {

    // 🎶 Cinematic Music Fade In
    music.muted = false;
    music.volume = 0;

    let v = 0;
    const fade = setInterval(()=>{
      if(v < 1){
        v += 0.05;
        music.volume = v;
      }else{
        clearInterval(fade);
      }
    },150);

    // 👑 Reveal Title
    setTimeout(()=>{
      title.classList.add("show");
    },200);

    // ❤️ Start Heartbeat Animation
    document.querySelector(".card").style.animationPlayState="running";
  }
}


/* ===================================================
   ⏳ COUNTDOWN WITH GLOW
=================================================== 

setInterval(()=>{

  const now = new Date().getTime();
  const d = date - now;

  const ids = ["days","hours","minutes","seconds"];

  const values = [
    Math.floor(d/(1000*60*60*24)),
    Math.floor((d%(1000*60*60*24))/(1000*60*60)),
    Math.floor((d%(1000*60*60))/(1000*60)),
    Math.floor((d%(1000*60))/1000)
  ];

  ids.forEach((id,i)=>{
    const el = document.getElementById(id);

    if(el && el.innerText != values[i]){

      el.innerText = values[i];

      el.classList.add("glowPulse");
      setTimeout(()=>el.classList.remove("glowPulse"),600);
    }
  });

},1000);


/* ===================================================
   🎥 INTERACTIVE 3D RING TILT
=================================================== 

document.addEventListener("mousemove",(e)=>{

  if(!ring) return;

  const x = (window.innerWidth/2 - e.clientX)/40;
  const y = (window.innerHeight/2 - e.clientY)/40;

  ring.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;


});*/


/* ==========================================
   👑 FINAL SAFE CINEMATIC SCRIPT
========================================== */

// 🎶 Elements (safe checks)
const music = document.getElementById("bgMusic");
const typingEl = document.getElementById("typingText");
const title = document.querySelector(".reveal-title");
const ring = document.getElementById("ring3d");
const confetti = document.getElementById("confetti");
const card = document.querySelector(".card");

// ⏳ Countdown Date
const date = new Date("Feb 28, 2026 20:00:00").getTime();

// ✨ Typing Text
const text = "🎂 Happy Birthday Princess Sanjana 👑";
let i = 0;


/* ==========================================
   🎉 CONFETTI INTRO
========================================== */

window.addEventListener("load", () => {

  if(confetti){
    for (let i = 0; i < 80; i++) {

      const piece = document.createElement("div");
      piece.className = "confetti-piece";

      piece.style.left = Math.random()*100+"vw";
      piece.style.background =
        ["#FFD700","#FF69B4","#FFC0CB","#FFFFFF"]
        [Math.floor(Math.random()*4)];

      piece.style.animationDuration=(1+Math.random())+"s";

      confetti.appendChild(piece);

      setTimeout(()=>piece.remove(),1500);
    }
  }

  // start typing after confetti
  setTimeout(typeEffect,600);
});


/* ==========================================
   ✨ TYPING + MUSIC + TITLE REVEAL
========================================== */
// 🎶 REAL WORKING AUTO MUSIC SYSTEM



// start muted autoplay (browser allows this)
if(music){
  music.play().catch(()=>{});
}

// after typing finishes OR first interaction → unmute
function enableSound(){

  if(!music) return;

  music.muted = false;
  music.volume = 0;

  let v = 0;
  const fade = setInterval(()=>{
    if(v < 1){
      v += 0.05;
      music.volume = v;
    }else{
      clearInterval(fade);
    }
  },150);

  document.removeEventListener("click", enableSound);
  document.removeEventListener("touchstart", enableSound);
}

// invisible trigger
document.addEventListener("click", enableSound);
document.addEventListener("touchstart", enableSound);


/* ==========================================
   ⏳ COUNTDOWN WITH GLOW
========================================== */

setInterval(()=>{

  const now = new Date().getTime();
  const d = date - now;

  const ids=["days","hours","minutes","seconds"];

  const values=[
    Math.floor(d/(1000*60*60*24)),
    Math.floor((d%(1000*60*60*24))/(1000*60*60)),
    Math.floor((d%(1000*60*60))/(1000*60)),
    Math.floor((d%(1000*60))/1000)
  ];

  ids.forEach((id,i)=>{
    const el=document.getElementById(id);

    if(el && el.innerText!=values[i]){
      el.innerText=values[i];
      el.classList.add("glowPulse");
      setTimeout(()=>el.classList.remove("glowPulse"),600);
    }
  });

},1000);


/* ==========================================
   🎥 INTERACTIVE RING TILT
========================================== */

document.addEventListener("mousemove",(e)=>{

  if(!ring) return;

  const x=(window.innerWidth/2 - e.clientX)/40;
  const y=(window.innerHeight/2 - e.clientY)/40;

  ring.style.transform=`rotateX(${y}deg) rotateY(${x}deg)`;
});