function qs(selector){
    return document.body.querySelector(selector)
}

function ce(element){
    return document.createElement(element)
}

const enter = qs("button#enter")
const mainDiv = qs("div#main") 
const newCanvas = ce("canvas")
const officeHBD = new Audio("theOffice_S4E7_HBD.mp3");
const officelong = new Audio("long.mp4");
const officeShort = new Audio("short.mp4");

enter.addEventListener("click", () =>{
    console.log("user has 'entered' main page")
    mainDiv.innerHTML= "" //not best practice but not sure what else to do
   
    newCanvas.id = "my-canvas"
    mainDiv.appendChild(newCanvas)
    const h1 = ce("h1")
    h1.innerText = "❤️❤️ HAPPY BIRTHDAY ❤️❤️"
    mainDiv.appendChild(h1)

   
    officeHBD.play() 

    officeHBD.addEventListener("ended", () => {
        officelong.play();
    });

    officelong.addEventListener("ended", () => {
        officeShort.play();
        newCanvas.id = "my-canvas"
    mainDiv.appendChild(newCanvas)
    const h1 = ce("h1")
    h1.innerText = "❤️❤️ HAPPY BIRTHDAY ❤️❤️"
    h1.style.textAlign = "center";
    mainDiv.appendChild(h1)
    });

    const confettiSettings = {
        target: 'my-canvas',
        max: 150,
        clock: 50,
        rotate: true
    }
    const confetti = new ConfettiGenerator(confettiSettings)
    confetti.render()
    console.log("now rendering confetti")

    // user indication to stop confetti
    const headerDiv = qs("div#header")
    const pInfo = ce("p")
    pInfo.id = "user-info"
    pInfo.style = "color:white"
    pInfo.innerText = "Happy Birthday Baaaa"
    headerDiv.append(pInfo)
    
});
