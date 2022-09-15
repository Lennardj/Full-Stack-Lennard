
function convertWordCase(sentence){

    
   // THis nested function turns good to Good
    function capitilise(word){
        return word[0].toUpperCase() + word.slice(1);
    }

    const lowercaseString = sentence.toLowerCase();
    const splitString = lowercaseString.split(" ");

    const capitlisedString = splitString.map(function (word) {
        return capitilise(word);
    })

    const finalString = capitlisedString.join(" ");
    return finalString
  
   
}

console.log(convertWordCase("lennard JOHN"))