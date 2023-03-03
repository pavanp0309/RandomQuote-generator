const Quotes=[
    {
        quote:'The greatest glory in living lies not in never falling, but in rising every time we fall',
        author:'Nelson Mandela',
      
    },
    {
        quote:'The way to get started is to quit talking and begin doing',
        author:'Walt Disney',
    },
    {
        quote:'If life were predictable it would cease to be life, and be without flavor',
        author:'Eleanor Roosevelt',
    },
    {
        quote:`If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success`,
        author:'James Cameron',
    },
    {
        quote:`Life is what happens when you're busy making other plans.`,
        author:'John Lennon',
    },
    {
        quote:'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
        author:' -Mother Teresa',
    },
    {
        quote:'When you reach the end of your rope, tie a knot in it and hang on.',
        author:'Franklin D. Roosevelt',
    },
    {
        quote:'The future belongs to those who believe in the beauty of their dreams. ',
        author:'-Eleanor Roosevelt',
    },
    {
        quote:'Whoever is happy will make others happy too.',
        author:' -Anne Frank',
    },
]

//accessing  the elements 
const displayEle=document.getElementById('display')
const AuthorEle=document.getElementById('author')
const btnEle=document.getElementById('getQuote')


//function to generate the random quotes
function RandomQuote(){
    let i=Math.floor(Math.random()*(Quotes.length))
    displayEle.innerHTML=Quotes[i].quote;
    AuthorEle.innerHTML= '--'+ Quotes[i].author
}

//button to generate the random quotes
btnEle.addEventListener('click',RandomQuote)
