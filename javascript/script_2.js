console.log("Bonjour, je calcul le factorielle")
function request() {
	number_given = prompt('De quel nombre veut tu calculer la factorielle ?');
}
request()


function factorielle_calculator(number)
{
if (number<0) {
alert ("Veuillez Saisir Un Entier Positif ou null");
return "### Erreur ###, insérer un nombre Positif";
}
else {
if (number == 0) {
return 1;
}
else {
return number * factorielle_calculator (number-1);
}
}
} 
console.log(`le factorielle de ${number_given} est:`)
console.log(factorielle_calculator(number_given))