const express = require('express')
const app = express()
const cors = require('cors')

const path = require('path')
app.use(express.static("public"))
app.use( cors())
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'public'));
});

app.get("/api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972", (req, res) => {
  console.log(res.data)
})

const port = process.env.PORT || 4005

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

