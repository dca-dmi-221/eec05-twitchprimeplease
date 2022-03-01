let testWord = "esternocleidomastoideo";
function wordCutter(word) {

    const indexs = [];
    for (let i = 0; i < word.length; i++) {
    let isHere = true

    while (isHere) {

        let indice = Math.random()*(word.length-1);
        let indiceRandom = Math.floor(indice);

        if (indexs.includes(indiceRandom)){

            indice = Math.random()*(word.length-1);
            indiceRandom = Math.floor(indice);

        } else {

            indexs.push(indiceRandom);
            isHere = false;
        }
    } 

    console.log(word[indexs[i]])
    
}
   // :)
}
wordCutter(testWord);