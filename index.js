const express = require("express");
var cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());

const port = 5000;




app.get("/", (req, res) => {
    res.send("mpm run start-dev --> commend is working");
});

const users = [
    { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '01788888888' },
    { id: 1, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Soniya', email: 'Soniya@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Susmita', email: 'Susmita@gmail.com', phone: '01788888888' },
]

app.get("/users", (req, res) => {
    res.send(users);
})

// dynamic api
app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

    // use search query paramiter;
app.get("/users", (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchResult);
    } else {
        res.send(users);
    }
    
})

  // app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
});


// app.get('/food', (req, res) => {
//     res.send(['mango', 'oranges', 'banana', 'apple']);
// })

// app.get("/food/rice/fish", (req, res) => {
//     res.send('hudai ami khai kala coffi');
// })



// -------------------------------------------
app.listen(port, () => {
    console.log("Listening to port", port);
});
