/**
 * Created by sstienface on 16/10/2018.
 */

var monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

//Completer le code suivant pour afficher la longueur de la variable monTexte

alert(monTexte.length);


//Ajouter du code ci dessous pour réaliser la suite de l'exercice

var position = monTexte.indexOf('i');

document.getElementById('position').innerHTML = position;

var Majuscule = monTexte.toUpperCase();

document.getElementById('chaineMaj').innerHTML = Majuscule;

for (var x = 0; x < monTexte.length; x++) {

   var lettrea = 'a';

   if (monTexte[x] === lettrea) {

       alert('lettre a trouvé au caractère n°' + x);

   }

   console.log(lettrea);
}





