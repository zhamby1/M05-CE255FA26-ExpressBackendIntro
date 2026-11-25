const express = require('express')
const app = express()


//shortcut to serve static files (aka html and css files) using a public directory

app.use(express.static("public"))
//to get post requests that are not encoded we will have to use this middleware..later on we will just use JSON
app.use(express.urlencoded({extended: false}))


//in express we can take in data from a request...in other word if data is sent from an client, we can process that data for things like POST/PUT requests, searching, querying databases, etc...

//for instance we can grab query parameters (? in urls that give use variables) as a way to process some data
//lets start simply by displaying some query parameters on a url when someone visits

app.get("/hello", function(req,res){
    //we are going to use the req built in method called query which can grab query parameters from a url in a get request
    const html = 
    `<h1>Hello, ${req.query.name}!</h1>
     <p>You are ${req.query.age} years old</p>
    `
    res.send(html)
})

//we can not only consume get request and data, but we can also get data from forms
app.post("/form-process", function(req,res){
    //when we are talking about processing data from a post request, it often comes from the 'body' of a post request
    //body is the object/placholder for data that we send to a server from a post request and is the default
    //we can grab the requests body by using req.body method
    const html = 
    `<h1>Hello, ${req.body.name}!</h1>
     <p>You are ${req.body.age} years old</p>
    `
    res.send(html)

})

app.listen(3000, function(){
    console.log("Server running on port 3000")
})


