import express from 'express'

const app = express() // creates a http server
const port = 3000

app.get('/',  (req, res) => {
  res.send('Hello World')
})

app.get('/input', (req, res)=>{
    res.send('input for input')
})

app.post('/input', (req, res) =>{
    console.log(req.body);
})

app.get('/output', (req, res)=>{
    res.send('output')
})

app.listen(port, () =>{
    console.log(`Server is running on ${port}`)
})