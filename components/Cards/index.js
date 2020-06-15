// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


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