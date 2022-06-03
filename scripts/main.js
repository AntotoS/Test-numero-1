/*let myHeading = document.querySelector('p');
myHeading.textContent = 'Hello, world !';*/ 

/*pareil commentaires comme ça*/

//ou comme ça

let myImage = document.getElementById('affiche-hulk') ;

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/affiche-hulk.jpg') {
      myImage.setAttribute('src', 'images/affiche-pirates-des-caraïbes.jpg');
    } else {
      myImage.setAttribute('src', 'images/affiche-hulk.jpg');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = myName;
  }
if (!localStorage.getItem('nom')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = storedName;
}
myButton.addEventListener('click', function() {
    setUserName();
  });
     
  
  