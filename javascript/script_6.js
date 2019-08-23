let x = ["cont1", "2", "cont3", 4]
console.log(x.length)
console.log(typeof x);





var couleurs = ['rouge', 'vert', 'bleu'];
for (var i = 0; i < couleurs.length; i++) {
  console.log(couleurs[i]);
}


var factorielle = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) };

console.log(factorielle(5));

function map(f, a) {
  var resultat = []; // Créer un nouveau tableau Array
  for (var i = 0; i != a.length; i++)
    resultat[i] = f(a[i]);
  return resultat;
}
console.log(map(factorielle, couleurs))