// JavaScript de base

// Affiche un message dans la console du navigateur
console.log("Bienvenue sur ma page web!");

// Une fonction simple
function showMessage() {
    alert("Vous avez cliqué sur le titre!");
}

// Sélectionne l'élément avec l'ID "titre" et ajoute un gestionnaire d'événements
document.getElementById("titre").addEventListener("click", showMessage);
