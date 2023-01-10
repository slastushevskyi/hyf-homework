const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function getShortestWord(danishWords) {
    console.log(
        danishWords.reduce(function(a, b) {
          return a.length <= b.length ? a : b;
        })
      )
};
getShortestWord(danishWords);


const danishString = "Jegø harå enå blå bilæÆ";


function findDanishLetters(danishString) {
    const danishLetterØ = [];
    const danishLetterÅ = [];
    const danishLetterÆ = [];
    danishString = danishString.split("");
    for (i=0; i<danishString.length; i++) {
        if (danishString[i] === "å") {
            danishLetterÅ.push(danishString[i]);
        }
        else if (danishString[i] === "Å") {
            danishLetterÅ.push(danishString[i]);
        }
        else if (danishString[i] === "ø") {
            danishLetterØ.push(danishString[i]);
        }
        else if (danishString[i] === "Ø") {
            danishLetterØ.push(danishString[i]);
        }
        else if (danishString[i] === "æ") {
            danishLetterÆ.push(danishString[i]);
        }
        else if (danishString[i] === "Æ") {
            danishLetterÆ.push(danishString[i]);
        }
    }
    console.log(`total: ${danishLetterØ.length+danishLetterÅ.length+danishLetterÆ.length}, å : ${danishLetterÅ.length}, ø : ${danishLetterØ.length}, æ : ${danishLetterÆ.length}`);
};
findDanishLetters(danishString);
const danishString2 = "Blå grød med røde bær";
findDanishLetters(danishString2);