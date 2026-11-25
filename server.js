//we are going to create a song api to perform CRUD functionality - create, read, update, and delete a song
//we will first start with a route that will allow us to grab all the songs that we have stored in a map/array/object
//we will replace this with db calls next week.
const express = require('express')
const app = express()
const router = express.Router()

//grab a song...the song will be in the form on an object for now...we will make a db model for it next week
//since we are working with api data remember - we will now start using json
app.use(express.json())

router.get('/songs', function(req,res){
    const song = {
        title: "Uptown Funk",
        artist: "Bruno Mars",
        popularity: 10,
        releaseDate: new Date(2014, 10, 10),
        genre: ["funk", "boogie"]
    }
    res.json(song)
})

router.post('/songs', function(req,res){
    console.log(req.body)
    //send a status of ok that this was processed
    res.sendStatus(201)
})

//all routes need to go to /api before going to the route.  that is what the route is doing and this will be middleware
app.use("/api", router)
//to get request from post data in the form of JSON


app.listen(3000)