// const { default: axios } = require("axios")

const zCode = document.querySelector('section')
const price = document.querySelector('#price')
const businessContainer = document.querySelector('#call-container')
const reset = document.querySelector('#reset')
console.log(businessContainer)


function businessCall(businesses) {
  let businessesDiv = document.createElement('div')
    businessesDiv.setAttribute("id", "createdDiv")
    console.log(businessesDiv)
    businessesDiv.innerHTML = `</h2> <br> <h3 class="business">${businesses.name} <br> Phone: ${businesses.phone} <br> ${businesses.price} <br> ${businesses.location.address1}, ${businesses.location.city}</h3>`
    if(`${businesses.price}` === undefined){
     `${businesses.price}` === ""
    }
    console.log(businessesDiv)
    businessContainer.appendChild(businessesDiv)
  }

  const createCall = (e) => {
    e.preventDefault()
    const textInput = document.querySelector('#zCode');
    console.log(textInput.value)
    axios.get(`http://localhost:4005/api/yelp/${textInput.value}`)
    .then(response => {
      console.log(response.data)
      for (i = 0; i < response.data.businesses.length; i++){
        businessCall(response.data.businesses[i])
      }
      console.log(response.data)
    })
    .catch(function(err) {
      console.log(err)
    })
}

function clearContainer() {
  businessContainer.innerHTML = ""
}
const inputText = document.querySelector('#zCode')

// function clearInputText() {
//   inputText.target.value=""
// }

// reset.addEventListener('click', clearInputText)
zCode.addEventListener('submit', createCall);
reset.addEventListener('click', clearContainer)