import express from 'express';
import { join } from 'path';
const app = express()
import axios from 'axios';
const port = 8080

app.get('/', (req, res) => {
  res.sendFile("index.html", { root: join(__dirname) })
})

// app.get('/api', async (req, res) => {
//     let url = "https://newsapi.org/v2/everything?" + req._parsedUrl.query
//     let r = await axios(url)
//     let a = r.data

//     res.json(a)
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})