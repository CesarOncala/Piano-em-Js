
document.querySelectorAll("audio").forEach(o=>{ // para retirar o erro de cross ao executar os arquivos de audio
    o.setAttribute("crossOrigin","anonymous");
})

 document.querySelectorAll(".keys").forEach(o=>{
    o.addEventListener("click",(e)=>{ //Play event
        e.target.classList.add('playing')
        let targetSound = e.target.getAttribute("data-key");
        let audio =   document.querySelector(`.audios [data-key="${targetSound}"]`);
        audio.currentTime = 0;
        audio.play();
    })

    o.addEventListener("transitionend", (e)=>{ 
        e.target.classList.remove('playing')
    })
})


window.addEventListener("keydown",(e)=>{
 document.querySelector(`.key[data-key='${e.keyCode}']`).click(); // click in equivalent keycode in data-key
})

