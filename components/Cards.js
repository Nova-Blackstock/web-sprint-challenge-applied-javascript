// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
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
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const entryPointCard = document.querySelector('.cards-container')

function cardMaker(data){
    const card = document.createElement('div')
        const cardHeadline = document.createElement('div')
        const cardAuthor = document.createElement('div')
            const cardImgContainer = document.createElement('div')
                const cardImg = document.createElement('img')
            const cardAuthorName = document.createElement('span')
    
            card.className = 'card'
            cardHeadline.className = 'headline'
            cardAuthor.className = 'author'
            cardImgContainer.className = 'img-container'

    entryPointCard.appendChild(card)
    card.appendChild(cardHeadline)
    card.appendChild(cardAuthor)
    cardAuthor.appendChild(cardImgContainer)
    cardAuthor.appendChild(cardAuthorName)
    cardImgContainer.appendChild(cardImg)


    cardHeadline.textContent = data.headline
    cardImg.src = data.authorPhoto
    cardAuthorName.textContent = data.authorName

    card.addEventListener('click',
    console.log(cardHeadline.textContent))

    return card
}

function getCard(){
    const gotCard = 'https://lambda-times-backend.herokuapp.com/articles'
    axios.get(gotCard)
    .then(function (value) {
        
        const gotCardAxiosTest = value.data.articles
        for(let key in gotCardAxiosTest){
            gotCardAxiosTest[key].forEach(object =>{
                cardMaker(object)
            })
        }  
    }) 
    .catch(function (error) {
        console.log('ERROR')
    })
} 

getCard()