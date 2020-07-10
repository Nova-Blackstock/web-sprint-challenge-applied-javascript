// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const entryPointTabs = document.querySelector('.topics')


function Tabtastic(data){
    const tab = document.createElement('div')
    tab.className = 'tab'
    
    data.forEach(top => {
        debugger
        entryPointTabs.appendChild(tab)
        tab.textContent = top
        return tab
    })

    tab.className = 'tab'
    return tab
}

function getTopics(){
    const gotTopics = 'https://lambda-times-backend.herokuapp.com/topics'

    axios.get(gotTopics)
    .then(function (value) {
        const gotTopicsAxios = value.data.topics
        console.log(gotTopicsAxios)
        Tabtastic(gotTopicsAxios)
        console.log('success')
        })
    .catch(function (error) {
        debugger
        console.log('ERROR')
    })
}

getTopics()

