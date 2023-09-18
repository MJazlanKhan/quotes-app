const btn = document.getElementById('btn');
const quote = document.getElementById('quote');
const author = document.getElementById('author');

async function api() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    console.log(data);
    author.innerHTML = data.author
    quote.innerHTML = '"' + data.content + '"'
}
btn.addEventListener('click', ()=>{
    api()
})