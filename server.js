
/*
    Let's create our Express server!
    Please remember to add comments to help you understand what is happening!
*/

// Bringing in the express module in my server file in order for me to use.
const express = require('express')

// Creating express app for server
const app = express()

// Creating a variable that will set the port of my server to 5000
const PORT = process.env.PORT || 5000

const userdata = require('./public/userdata.json')
//Telling express app to use express.static() method in order to stage my client folder
app.use(express.static("public"))

//API that will be getting all of my users in my userdata.json
app.get("/api/users", (req, res) => {
    if (!userdata) {
        return res.status(404).send("Resource is not found. Please try again")
    }
        
    res.send(userdata)
})

// app.get("/", (req, res) => {
//     res.send('Welcome to website')
// })

// App is running on port 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})