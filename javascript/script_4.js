const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("---------------(1)--------------")
  console.log("les entrepreneurs qui sont nés dans les années 70 :")
  function ageVerification(element) {
    if (element.year > 1969) {      
      if (element.year < 1980) {
        return "affirmative";} 
      else {
        return "better";}  } 
    else {return "less";}
  }

  var entreprenors_name = [];

  function InsertInList (item){
    if (ageVerification(item) == "affirmative"){
        entreprenors_name.push(item.first);}
  }
  for (var i = 0; i < entrepreneurs.length; i++) {InsertInList(entrepreneurs[i]);}
    console.log(`les entrepreneurs qui sont nés dans les années 70 sont: ${entreprenors_name}`)

console.log("---------------(2)--------------")
  console.log("une array qui contient le prénom et le nom des entrepreneurs")
    var entreprenors_name = [];
    for (var i = 0; i < entrepreneurs.length; i++){
      entreprenors_name.push(entrepreneurs[i].last + " " +entrepreneurs[i].first);
    }
    console.log(entreprenors_name)

console.log("---------------(3)--------------")
  console.log("âge de chaque inventeur aujourd'hui ?")
    for (var i = 0; i < entrepreneurs.length; i++){
    console.log(entreprenors_name[i] + " " + "a" + " " + (2019 - entrepreneurs[i].year) + " " + "ans");
    }

console.log("---------------(4)--------------")
  console.log("Trillage des entrepreneurs par ordre alphabétique du nom de famille.")
    entreprenors_name.sort();
    entreprenors_name.forEach(sort_list => {
      console.log("-" + " " +sort_list)
    });