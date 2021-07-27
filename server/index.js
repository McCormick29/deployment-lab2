const express = require('express')
const app = express()
const cors = require('cors')

const path = require('path')
const { default: axios } = require('axios')
const { response } = require('express')
app.use(express.static("public"))
app.use(cors())
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'public'));
});
// yelp code
require('dotenv').config();
const yelp = require('yelp-fusion');
const apiKey = process.env.YELP_API_KEY;
const searchRequest = {
  term: 'restaurants',
  location: 'Los Angeles',
};

const client = yelp.client(apiKey);

// client.search(searchRequest)
//   .then((response) => {
//     console.log(response.jsonBody);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


app.get("/api.yelp.com/v3/businesses/north-india-restaurant-san-francisco/reviews", (req, res) => {
    console.log(res)

  res.status(200).send(res)
})

const port = process.env.PORT || 4005

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})





