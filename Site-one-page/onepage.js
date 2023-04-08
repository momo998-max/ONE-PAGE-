document.getElementById("help").addEventListener("submit", function(e) {
    e.preventDefault();
    let erreur;
    let nom = document.getElementById("nameinput");
    let email = document.getElementById("emailinput");
    let telephone = document.getElementById("messageinput");

if (!nom.value) {
    erreur = "Veuillez saisir un nom";
}
if (!email.value) {
    erreur = "Veuillez saisir un email";
}
if (!telephone.value) {
    erreur = "Veuillez taper votre message";
}
if (erreur) {
    e.preventDefault();
    document.getElementById("erreur").innerHTML = erreur;
    return false;
} else{
    alert("Message envoyé. Merci pour votre visite!");
}
  
});