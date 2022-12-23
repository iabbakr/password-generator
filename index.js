const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwd11 = document.getElementById("pwd1");
let pwd22 = document.getElementById("pwd2");

function passwordGenerator(){
    for(let i=0; i<characters.length; i++){
        let pwdI1 = Math.floor(Math.random() * characters.length);
        let pwdI2 = Math.floor(Math.random() * characters.length);
    
        pwd11.textContent += characters[pwdI1]+15;
        pwd22.textContent += characters[pwdI2];
    };
};




