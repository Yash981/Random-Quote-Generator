const quotesGenerate = () =>{
    var author = document.getElementById('authorId')
    var tagsContainer = document.getElementById('tags')
    var quote = document.getElementById('quote')
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        quote.textContent = data.content;
        author.textContent = data.author;
        tagsContainer.innerHTML = ''

        data.tags.forEach(tag=>{
            const tagElement = document.createElement('div')
            tagElement.textContent = tag
            tagElement.style.border = '1px solid #6466E9'
            tagElement.style.borderRadius = '20px'
            tagElement.style.padding = '4px'
            tagElement.style.fontFamily = "'Outfit',sans-serif";
            tagElement.style.fontSize = '10px';
            tagElement.style.color = '#6466E9';
            tagElement.style.paddingLeft = '6px';
            tagElement.style.paddingRight = '6px';
            tagsContainer.appendChild(tagElement)
        })

        // console.log(tagggs)
        // console.log(`${data.content} —${data.author},->${data.tags}`)
    })
    .catch(error => {
        console.log(error)
    })
}
quotesGenerate()

const GenerateRandomQuote = () =>{
    quotesGenerate()
}

const CopyToClipboard = () =>{
    const text = document.getElementById('quote')
    navigator.clipboard.writeText(text.textContent)
}
