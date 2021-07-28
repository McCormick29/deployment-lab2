// const { default: axios } = require("axios")

const zCode = document.querySelector('section')
const price = document.querySelector('#price')
const businessContainer = document.querySelector('#call-container')
console.log(businessContainer)
  

function businessCall(businesses) {
    let businessesDiv = document.createElement('div')
    console.log(businessesDiv)
    businessesDiv.innerHTML = `<h3 class="business">${businesses.name} Phone# ${businesses.phone}</h3>`
    console.log(businessesDiv)
      businessContainer.appendChild(businessesDiv)
}

// function businessPriceCall(businesses) {
//     let priceDiv = document.createElement('div')
//     console.log(priceDiv)
//     priceDiv.innerHTML = `<h4 class="priceBusiness">${businesses.price}</h4>`
      
//     console.log(priceDiv)
//       businessContainer.appendChild(priceDiv)
// }
  
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
  // for (i = 0; i < response.data.businesses.length; i++){
  //   businessPriceCall(response.data.businesses[i])
  // } 
console.log(response.data)
})
.catch(function(err) {
    console.log(err)
})
}

zCode.addEventListener('submit', createCall);
// price.addEventListener('click', );