require('dotenv').config()

const express = require('express')
const jwt = require('jsonwebtoken');

const app = express()
app.use(express.json())

const posts = [
    {
        username: 'Mayank',
        title: 'Post 1'
    },
    {
        username: 'Shekar',
        title: 'Post 2'
    },
    {
        username: 'XYZ',
        title: 'How to make Veg Soup'
    }
]

app.get('/', (req, res) => {
    res.end('<h1>JWT DEMO1</h1>')
})

app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name))
})


// function to authenticate user
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null || token == undefined) {
        return res.sendStatus(401) //null or invalid token - NO ACCESS
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403) //token ok but no longer valid - NO ACCESS
        req.user = user
        next()
    })
}





app.listen(3000, function (req, res) {
    console.log("Server listening on port 3000")
})

