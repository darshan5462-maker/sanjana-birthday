/* ==========================================
   👑 FINAL COMPACT CINEMATIC SCRIPT
========================================== */

// 🎶 Elements
const music = document.getElementById("bgMusic");
const typingEl = document.getElementById("typingText");
const title = document.querySelector(".reveal-title");
const ring = document.getElementById("ring3d");
const confetti = document.getElementById("confetti");
const card = document.querySelector(".card");

// ✨ Typing Wishes Text (includes SANJANA)
const text = "👑 Happy Birthday Princess Sanjana 🎂✨";
let i = 0;

// ⏳ Countdown Date
const date = new Date("Feb 28, 2026 20:00:00").getTime();


/* ==========================================
   🎉 CONFETTI INTRO + START TYPING
========================================== */

window.addEventListener("load", () => {

  if(confetti){
    for(let i=0;i<80;i++){
      const piece=document.createElement("div");
      piece.className="confetti-piece";

      piece.style.left=Math.random()*100+"vw";
      piece.style.background=
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
   ✨ TYPING + MUSIC SYNC + TITLE REVEAL
========================================== */

// start muted autoplay (browser allows muted)


// start muted autoplay safely
 if (music) {
  music.muted = true;   // IMPORTANT for browser autoplay
  music.volume = 0;
  music.play().catch(()=>{});
 }

function typeEffect(){

  if(!typingEl) return;

  if(i < text.length){

    typingEl.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect,60);

  }else{

    // 🎶 Cinematic Music Fade (SAFE VERSION)
    if(music){

      music.muted = false;
      let v = 0;

      const fade = setInterval(()=>{

        v += 0.05;

        // 👑 SAFE LIMIT
        if(v >= 1){
          v = 1;
          clearInterval(fade);
        }

        music.volume = v;

      },120);
    }

    // 👑 Reveal SANJANA Title
    if(title){
      setTimeout(()=>{
        title.classList.add("show");
      },200);
    }



    // ❤️ Start Heartbeat Animation
    if(card){
      card.style.animationPlayState="running";
    }
  }
}

// 👑 ULTRA INVISIBLE AUTO START (WORKS ON LIVE SERVER)




// 🎶 LIVE SERVER SAFE AUTO AUDIO



// allow muted autoplay



/* ==========================================
   ⏳ COUNTDOWN WITH GLOW
========================================== */

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

    if(el && el.innerText!=values[i]){
      el.innerText=values[i];
      el.classList.add("glowPulse");
      setTimeout(()=>el.classList.remove("glowPulse"),600);
    }
  });

},1000);


/* ==========================================
   🎥 INTERACTIVE 3D RING TILT
========================================== */

document.addEventListener("mousemove",(e)=>{

  if(!ring) return;

  const x=(window.innerWidth/2 - e.clientX)/40;
  const y=(window.innerHeight/2 - e.clientY)/40;

  ring.style.transform=`rotateX(${y}deg) rotateY(${x}deg)`;
});



document.body.addEventListener("click",()=>{
  music.volume=0;
  music.play();

  let v = 0;

  const fade = setInterval(()=>{

    v += 0.05;

  // 👑 CLAMP VALUE BETWEEN 0 AND 1
    if(v >= 1){
      v = 1;
      clearInterval(fade);
  }

  music.volume = Math.min(Math.max(v,0),1);

},200);
},{once:true});
