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

//we can use route parameters just like query parameters to send data back in the form a get request
//the is the REST way to do it along with query parameters
//route parameters are url/users/1 would go to the first user in the database
// the : indicates part of the url can be changed (dynamic) and it is the route parameter
//you can use the params method to grab a parameter along with the parameters name

app.get("/users/:username", function(req, res) {
   const username = req.params.username;
   res.send(`<h1> Profile for ${username} </h1>`);
});

app.listen(3000, function(){
    console.log("Server running on port 3000")
})


