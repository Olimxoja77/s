let btn =document.querySelector("button")

function speak (){

    let inp =document.querySelector("input")



    let speech = new SpeechSynthesisUtterance(inp.value)
    speech.lang ="en-US"
    speech.rate= 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
btn.addEventListener("click",speak);
