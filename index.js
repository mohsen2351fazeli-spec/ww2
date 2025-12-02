// variables
const dayeres=document.querySelectorAll(".dayere");
const talafat=document.querySelector(".talafat");
const tanks=document.querySelector(".tanks")
const earplane=document.querySelector(".earplane")
const res=document.querySelector(".res")
const panel=document.querySelector(".panel")
const hidebtn=document.querySelector(".hide-panel")
const panelbtn=document.querySelector(".panel-btn")
const Chractersmein=document.querySelector(".Chracters-main")
const Chractersbtn=document.querySelector(".Chracters-main-btn")

// const battelsmein=document.querySelector(".battels-main")
// const battelsbtn=document.querySelector(".battels-main-btn")

const darkmein=document.querySelector(".dark-main")
const darkbtn=document.querySelector(".darkk-main-btn")

const languagemein=document.querySelector(".language-main")
const languagebtn=document.querySelector(".language-main-btn")

const wipenmein=document.querySelector(".wipen-main")
const wipenbtn=document.querySelector(".wipen-main-btn")

const dark=document.querySelector(".d-btn")
const light=document.querySelector(".l-btn")
const html=document.querySelector(".htmml");
// lets
let i=0;
let theme=JSON.parse(localStorage.getItem("theme"))||"light";

// const islg=window.matchMedia("(min-width: 1025px)").matches;


// functions
const panelHandler=()=>{
    panel.classList.toggle("w-0")
    panel.classList.toggle("w-[50vw]")
}
const ChractersHandler=()=>{
    Chractersbtn.classList.toggle("-rotate-[135deg]")
    Chractersbtn.classList.toggle("rotate-45")
    Chractersmein.classList.toggle("h-0")
    Chractersmein.classList.toggle("p-2")
    Chractersmein.classList.toggle("overflow-y-hidden")
}
// const battelsHandler=()=>{
//     battelsbtn.classList.toggle("-rotate-[135deg]")
//     battelsbtn.classList.toggle("rotate-45")
//     battelsmein.classList.toggle("h-0")
//     battelsmein.classList.toggle("p-2")
//     battelsmein.classList.toggle("overflow-y-hidden")
// }
const wipenHandler=()=>{
    wipenbtn.classList.toggle("-rotate-[135deg]")
    wipenbtn.classList.toggle("rotate-45")
    wipenmein.classList.toggle("h-0")
    wipenmein.classList.toggle("p-2")
    wipenmein.classList.toggle("overflow-y-hidden")
}
const darkHandler=()=>{
   darkbtn.classList.toggle("-rotate-[135deg]")
   darkbtn.classList.toggle("rotate-45")
   darkmein.classList.toggle("h-0")
   darkmein.classList.toggle("p-2")
   darkmein.classList.toggle("overflow-y-hidden")
}
const languageHandler=()=>{
   languagebtn.classList.toggle("-rotate-[135deg]")
   languagebtn.classList.toggle("rotate-45")
   languagemein.classList.toggle("h-0")
   languagemein.classList.toggle("p-2")
   languagemein.classList.toggle("overflow-y-hidden")
}
const talafatNav=()=>{
    const section = talafat;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll(".progress-bar").forEach(bar => {
                    const finalWidth = bar.getAttribute("data-width");
                    bar.style.width="0%"
                    bar.classList.remove("animate-load")
                    void bar.offsetWidth
                    bar.style.setProperty("--final-width",finalWidth);
                    bar.classList.add("animate-load");
                });

                // observer.unobserve(section);
            }else{
                document.querySelectorAll(".progress-bar").forEach(bar => {
                    bar.style.width="0%"
                    bar.classList.remove("animate-load")
                });
            }
        });
    }, {
        threshold: 0.25 
});

observer.observe(section);
}
const dayereHandler=()=>{
    setInterval(() => {
        if(i==0){
            dayeres[dayeres.length-1]?.classList.add("bg-neutral-700")
            dayeres[dayeres.length-1]?.classList.remove("bg-teal-800")
            dayeres[dayeres.length-1]?.classList.remove("animate-ping")
        }
        dayeres[i-1]?.classList.add("bg-neutral-700")
        dayeres[i-1]?.classList.remove("bg-teal-800")
        dayeres[i-1]?.classList.remove("animate-ping")
        
        dayeres[i].classList.remove("bg-neutral-700")
        dayeres[i].classList.add("bg-teal-800")
        dayeres[i].classList.add("animate-ping")

        if(i!=dayeres.length-1)
            i++
        else{
            i=0
        }
    }, 1000);
}
const tanksNav=()=>{
    const section = tanks;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll(".progress-bart").forEach(bar => {
                    const finalWidth = bar.getAttribute("data-width");
                    bar.style.width="0%"
                    bar.classList.remove("animate-load")
                    void bar.offsetWidth
                    bar.style.setProperty("--final-width",finalWidth);
                    bar.classList.add("animate-load");
                });

                // observer.unobserve(section);
            }else{
                document.querySelectorAll(".progress-bart").forEach(bar => {
                    bar.style.width="0%"
                    bar.classList.remove("animate-load")
                });
            }
        });
    }, {
        threshold: 0.25 
});

observer.observe(section);
}
const earplaneNav=()=>{
    const section = earplane;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll(".progress-barte").forEach(bar => {
                    const finalWidth = bar.getAttribute("data-width");
                    bar.style.width="0%"
                    bar.classList.remove("animate-load")
                    void bar.offsetWidth
                    bar.style.setProperty("--final-width",finalWidth);
                    bar.classList.add("animate-load");
                });

                // observer.unobserve(section);
            }else{
                document.querySelectorAll(".progress-barte").forEach(bar => {
                    bar.style.width="0%"
                    bar.classList.remove("animate-load")
                });
            }
        });
    }, {
        threshold: 0.25 
});

observer.observe(section);
}
const resNav=()=>{
    const section = res;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll(".progress-barter").forEach(bar => {
                    const finalWidth = bar.getAttribute("data-width");
                    bar.style.width="0%"
                    bar.classList.remove("animate-load")
                    void bar.offsetWidth
                    bar.style.setProperty("--final-width",finalWidth);
                    bar.classList.add("animate-load");
                });

                // observer.unobserve(section);
            }else{
                document.querySelectorAll(".progress-barter").forEach(bar => {
                    bar.style.width="0%"
                    bar.classList.remove("animate-load")
                });
            }
        });
    }, {
        threshold: 0.25 
});

observer.observe(section);
}
//DOM
panelbtn.addEventListener("click",panelHandler)
hidebtn.addEventListener("click",panelHandler)
Chractersbtn.addEventListener("click",ChractersHandler)
// battelsbtn.addEventListener("click",battelsHandler)
wipenbtn.addEventListener("click",wipenHandler)
darkbtn.addEventListener("click",darkHandler)
languagebtn.addEventListener("click",languageHandler)
dark.addEventListener("click",()=>{
    html.classList.add("dark")
})
light
.addEventListener("click",()=>{
    html.classList.remove("dark")
})




dayereHandler();
talafatNav();
tanksNav();
earplaneNav();
resNav();