// @ts-nocheck

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

export function rollingText(){

    let event = document.querySelector("[data-rolling-text]") 

        let iteration = 0
        clearInterval(interval)
        
        interval = setInterval(() => {
            event.innerText = event.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration) { return event.dataset.rollingText[index] }
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("")
            
            if(iteration >= event.dataset.rollingText.length){ clearInterval(interval) }
          
            iteration += 1 / 3
        }, 30)

    

}