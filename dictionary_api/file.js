var url="https://api.dictionaryapi.dev/api/v2/entries/en/"



let Dict = () => {
    var inpword=document.getElementById('inpword').value;
    fetch(`${url}${inpword}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById('res').innerHTML=" Word : " + data[0].word
        document.getElementById('def').innerHTML=" Defination : " + data[0].meanings[0].definitions[0].definition
        document.getElementById('example').innerHTML=" Example : " + data[0].meanings[0].definitions[0].example
        document.getElementById('phon').innerHTML=" Phonetic : " + data[0].phonetic
        document.getElementById('exm').innerHTML=" Synonyms : " + data[0].meanings[0].synonyms
    })

}






Dict()