(() => {
    let letter = [
            "b",
            "o",
            "n",
            "j",
            "o",
            "u",
            "r",
        ];
    let guess = [
        "_",
        "_",
        "_",
        "_",
        "_",
        "_",
        "_",
    ];
    let mistake = [

    ]
    console.log(guess);
    let i = 0
    document.getElementById("run").addEventListener("click", () => {
        
        // variables
        let txt = document.getElementById("input");
        
        // conditions
        if (letter.includes(txt.value) == true && guess.includes(txt.value) == true) {
            
        } //fin du if
        else if (letter.includes(txt.value) == true) {
            for (let index = 0; index < letter.length; index++) {
                if (letter[index] == txt.value ) {
                     guess[index] = letter[index];  
                }   
            }
            console.log(guess)
            let letterString = letter.toString()
            let guessString = guess.toString()
            if (letterString == guessString) {
                alert("you win!")
                document.location.reload(true);
            }
        }
         else {
             mistake.unshift(txt.value)
             console.log("ces lettres ne sont pas dans le mot : " + mistake)
            i++
            if(i == 1){
            console.log("déja " + i + " erreur")
            }
            else{
                console.log("déja " + i + " erreurs")
            }
        } //fin du else
    
    }); //fin du click
})();