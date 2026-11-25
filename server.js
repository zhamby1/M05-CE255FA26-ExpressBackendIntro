const express = require('express')
const app = express()


//shortcut to serve static files (aka html and css files) using a public directory

app.use(express.static("public"))


app.listen(3000, function(){
    console.log("Server running on port 3000")
})

//routes can tie function calls to urls...there are several built in express functions that allow us to manipulate routes
//remember that all routes are based on HTTP method calls - GET POST PUT DELETE
// syntax is app.HTTPMETHOD(url,function(req,res){block of code})
app.get("/hello2", function(req,res){
    res.send("<h1>Hello From the Server </h1>")
})

app.post("/goodbye", function(req,res){
    res.send("<h1>Goodbye</h1>")
})