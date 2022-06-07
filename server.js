const express = require ('express')
const app = express()
const cors = require('cors')
let PORT = 8000

app.use(express(cors))

//number of dogs names and then put back that number of names
let dogNames =[ 
   {
      "name" : "Rover",
      "sex" : "male"
},

 {
    "name" : "Sweetie",
    "sex"  : "female"
},
{
    "name" : "Sugar",
    "sex"  : "female"
},

{
     "name" : "Rex",
     "sex" : "male"
}

]

app.get('/', (req,res) => {
   res.sendFile(__dirname + '/index.html')
})

app.get('/api/:sex', (req,res) => {
    const dogSex = req.params.sex.toLowerCase()
    const entry = dogNames.filter(entry => entry.sex==dogSex)
    console.log(entry[0])

     res.json(entry)
   
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}. Go catch it!`)
})