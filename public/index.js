

const zCode = document.querySelector('#submitHandler')

function createCallImage(char) {
    let charCard = document.createElement('div')
    charCard.innerHTML = `<h3>${char.firstName} ${char.lastName}</h3>
    <p>gender: ${char.gender} | age: ${char.age}</p>
    <h4>Likes</h4>
    <ul>
      <li>${char.likes[0]}</li>
      <li>${char.likes[1]}</li>
      <li>${char.likes[2]}</li>
    </ul>`
  
    charContainer.appendChild(charCard)
  }


const createCall = (e) => {
e.preventDefault()
axios.get('https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972', {headers: {
    "Authorization": "Bearer QXsqX9cGozZNLknIdM4Xp4jtegeigFDv6q6GY9IMyquKuflUvTPUyXgI-he-w7sQIF5NI8RXJnfuRlrw_IhPoNFVpUZVSSgRxMZlSvIMdg6c5KEOyLQHODE67RwAYXYx" 
}})
.then(response => {
    console.log(response.data)
})
.catch(function(err) {
    console.log(err)
})
}

zCode.addEventListener('submit', createCall);