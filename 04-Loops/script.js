let sentence = ["Hie", "My", "Name", "is", "Rajvir"];
let greetingEl = document.getElementById('greetingEl');


for(let i = 0; i < sentence.length; i++){
    greetingEl.textContent += sentence[i] + " ";
    
}