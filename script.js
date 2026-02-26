// 🎶 Music Fade Start
const music=document.getElementById("bgMusic");

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


// ⏳ Countdown
const date=new Date("Feb 28, 2026 20:00:00").getTime();

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
const text = "🎂 Happy Birthday Princess Sanjana 👑";
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
});