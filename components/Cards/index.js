

let cardsContainer = document.querySelector('.cards-container');

let articleData = 
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((axiosDataCards) => {
        console.log(axiosDataCards.data)
        cardMaker(axiosDataCards.data.articles)
})
.catch((err) => {
    console.log('error', err)
})

function cardMaker(obj) {
    for(let key in obj) {
        obj[key].forEach((article) => {
            cardsContainer.appendChild(createArticle(article))
        })
    }
}



function createArticle(data){
    
    let cardDiv = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imageDiv = document.createElement('div');
    let image = document.createElement('div');
    let span = document.createElement('span');

    cardDiv.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageDiv.classList.add('img-container');

    headline.textContent = data.headline;
    image.src = data.authorPhoto;
    span.textContent = "By " + data.authorName;

    cardDiv.appendChild(headline);
    cardDiv.appendChild(author);
    author.appendChild(imageDiv);
    imageDiv.appendChild(image);
    author.appendChild(span);

    return cardDiv;

};