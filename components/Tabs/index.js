// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
lkajsdfkj
laskfjdlkjasdflkjlal
aslfkjlasjf

let topics = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((axiosData) => {
    let tabData = axiosData.data.topics;
    tabData.forEach((item) => {
        topics.appendChild(tab(item));
    })
     })
.catch((err) => {
    console.log('error: ', err )
})


function tab(array){

let tab = document.createElement('div');

tab.classList.add('tab');

tab.textContent = array;

return tab;
}