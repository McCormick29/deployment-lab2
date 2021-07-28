const express = require('express')
const app = express()
const cors = require('cors')

const path = require('path')
const axios = require('axios')
// const { response } = require('express')
app.use(express.static("public"))
app.use(cors())
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'public'));
});

app.get("/api/yelp/:zip", (req, res) => {
 const { zip } = req.params
  axios.get(`https://api.yelp.com/v3/businesses/search?location=${zip}`, {headers: {"Authorization": "Bearer QXsqX9cGozZNLknIdM4Xp4jtegeigFDv6q6GY9IMyquKuflUvTPUyXgI-he-w7sQIF5NI8RXJnfuRlrw_IhPoNFVpUZVSSgRxMZlSvIMdg6c5KEOyLQHODE67RwAYXYx"} })
.then(response => {
  res.status(200).send(response.data)
  // console.log(res.data)
})
.catch(function(err) {
  console.log(err)
})
})

const port = process.env.PORT || 4005

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})





