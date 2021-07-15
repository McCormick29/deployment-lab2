const express = require('express')
const app = express()

const path = require('path')
app.use(express.static("public"))

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, 'public'));
});

const port = process.env.PORT || 4005

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})