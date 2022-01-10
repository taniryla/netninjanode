const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log('we got a new request');
//     // res.send('hello, we got your request. This is our response');
//     res.send('<h1>This is my webpage!</h1>');
// })

app.get('/', (req, res) => {
    res.send('This is the home page!!!')
})

app.get('/cats', (req, res) => {
    res.send('Meow')
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`<h1>Search results for: ${q} </h1>`);
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    if (!q) {
        res.send('nothing sound if nothing searched');
    }
    res.send(`<h1> This is a ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1> Viewing Post ID: ${postId} This is a ${subreddit} subreddit</h1>`)
})


app.get('/cats', (req, res) => {
        res.send('POST request to /cats!! This is a ..')
    })
    // cats => "meow"

app.get('/dogs', (req, res) => {
    res.send('Woof!')
})

// dogs => "woof"
// '/'

app.listen(3000, () => {
    console.log('Listening')
})