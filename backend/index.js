const express = require('express')
const app = express()
const cors = require("cors");
const {router}=require('./routes')

const port = 8080
app.use(cors())
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})