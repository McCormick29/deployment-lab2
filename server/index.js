const express = require('express')
const app = express()
const cors = require('cors')

const path = require('path')
app.use(express.static("public"))
app.use( cors())
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'public'));
});

const port = process.env.PORT || 4005

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})