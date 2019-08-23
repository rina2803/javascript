console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
function request() {
	number_given = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
}
request()

function pyramid(n) {
  for(let i=1; i<= n; i++){
    let space_number = ' '.repeat(n-i);
    let character_number = '#'.repeat(i)
    console.log(space_number + character_number);
  }
}
pyramid(number_given);