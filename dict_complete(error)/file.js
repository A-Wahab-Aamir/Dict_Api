var url="https://api.dictionaryapi.dev/api/v2/entries/en/"


let dict = () => {
    var inpword=document.getElementById('inpword').value;

    fetch(`${url}${inpword}`)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        document.getElementById('word').innerHTML = data[0].word
        document.getElementById('def').innerHTML = data[0].meanings[0].definitions[0].definition;
        document.getElementById('pro').innerHTML = data[0].phonetic
        document.getElementById('part').innerHTML= data[0].meanings[0].partOfSpeech
    })
    .catch((error) => {
        document.getElementById('word').innerHTML = "no word found! "
        document.getElementById('def').innerHTML = "no word found! "
        document.getElementById('pro').innerHTML = "no word found! "
        document.getElementById('part').innerHTML= "no word found! "
    })

}


dict()


