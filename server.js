const express = require('express')
const app = express()


//shortcut to serve static files (aka html and css files) using a public directory

app.use(express.static("public"))

//middleware a  function that examine or modifies requests before then moving on to the rest of the application
//it is often software that runs between the request from the client, and the server processing the request
//create middleware that will log a req http method and the path/url they are going
const logRequest = function(req,res,next){
    console.log(`Request ${req.method} for ${req.path}`)
    next()
}

//to use something as middleware we use the app.use function/method because it means it is always activated and then will forward the traffic after its done the the correct url

app.use(logRequest)

app.get("/hello2", function(req,res){
    res.send("<h1>Hello From the Server </h1>")
})


app.listen(3000, function(){
    console.log("Server running on port 3000")
})

//routes can tie function calls to urls...there are several built in express functions that allow us to manipulate routes
//remember that all routes are based on HTTP method calls - GET POST PUT DELETE
// syntax is app.HTTPMETHOD(url,function(req,res){block of code})

