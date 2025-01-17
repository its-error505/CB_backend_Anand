require('dotenv').config(); 
const express = require("express"); 
const connectDB = require('./config/db'); 
const app = express(); 

// IMPORTING ROUTES
// users
const userRoutes = require("./routes/userRoutes"); 

// middleware
const bodyParser = require('body-parser');


app.get("/", (req, res) => { 
    res.send("server is running on PORT"+ process.env.PORT); 
});


app.use(bodyParser.json()); 



// establishing connection with the data base
connectDB(); 


// defining the routes
// user routes
app.use("/api/users", userRoutes); 


app.get("/testing", (req, res)=> { 
    res.send("<h1>Hello Subhankar</h1>"); 
})
app.get("/server", (req, res)=> { 
    res.send("<h2>Server is active</h2>"); 
})

app.listen(process.env.PORT, ()=>{
    console.log(":server is listening in port", process.env.PORT); 
})