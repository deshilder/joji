
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "imagens/Slifer The Sky Dragon Alternate.png") {
    myImage.setAttribute("src", "imagens/dragao rá.png");
  } else if (mySrc === "imagens/dragao rá.png") {
    myImage.setAttribute("src", "imagens/meu amor.png"); 
  } else if (mySrc === "imagens/meu amor.png") {
    myImage.setAttribute("src", "imagens/Slifer The Sky Dragon Alternate.png"); 
}
}
  


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Por favor digite o seu nome.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Slifer é a melhor carta, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Slifer é a melhor carta, ${storedName}`;
}
myButton.onclick = () => {
  setUserName();
};