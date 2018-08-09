// var pigLatin = prompt("Enter a word and not a number and a word that doesn't of a number");
// var latin = pigLatin.split("");
// var result = translate(latin);
//
// function translate(latin){
//   var newWord = "";
//      if (latin == 'a' || latin == 'e' || latin == 'i' ||latin == 'o'|| latin == 'u')
//       {
//         newWord = newWord + "ay";
//        return newWord;
//       }
//       else {
//         alert("Enter a Number");
//       }
// }



var piglatin = prompt("Enter a word")
var result = translate(piglatin)
var translate = function(word) {
    var array = word.split('');
    var vowels = ['a','e','i','o','u'];
    var newWord = ('');
    for(var i = 0; i < vowels.length-1; i++) {
        for(var y = 0; y < word.length-1; y++) {
            if(word[y] === vowels[i]) {
                for(var x = y; x < word.length; x++){
                    newWord = newWord + word[x];
                }
                for(var n = 0; n < y; n++){
                    newWord = newWord + word[n];
                }
                return newWord + "ay";
            }
        }
    }
}
alert(result)















var vowel = ["a", "e", "i", "o", "u"];

for(var index =0; index<vowel.length-1; index+=1){
  if
}
