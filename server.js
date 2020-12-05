//server setup
const express = require("express");
const app = express();  //grab express function and save it as app, used later for using routes, middleware
const apiRoutes = require("./routes/apiRoutes");
const PORT = 5000; // open up at 5000, alternative 8080


// routes
// app.get("/api", (req, res) => {   // access app, access method get (put, delete, etc also options), set path to Home directory, 2 routes: request and response
//     console.log("This route has been hit");  //server side
//     // res.send("<h1>Hello world API- this works</h1>"); // send back to client
//     res.json({
//         msg:"Success", 
//         status: 200, 
//         data: {user:"Liz", title: "me"},
// });
// });

// app.get("/api/todos", (req, res) => {
//     console.log("hello");
//     res.json({
//         todos: ["thing", "anotherthing"]
//     });
// });

// set up to receive JSON and string data  --> ALL PROJECTS WILL NEED THIS CODE AT THE TOP
app.use(express.urlencoded({extended: true}));  // sets up for string, take url and parse as string
app.use(express.json()); // sets up for json, take in string as object, parse, and use as object

// routes as middleware, rather than above, moved above to apiRoutes.js to modularize
app.use("/api", apiRoutes);

// this line gets server listening
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));  
// now a server running on computer at port 5000