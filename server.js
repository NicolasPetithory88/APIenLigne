const express = require('express');
const app = express();
const port = 3000;
const db = require('./db/users');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/users', async (req, res) => {
    const results = await db.createUser(req.body);
    res.status(201).json({id: results[0]});
});

app.get('/users', async (req, res) => {
    const users = await db.getAllUsers();
    res.status(200).json({users});
});

app.get('/users/:id', async (req, res) => {
    const user = await db.getUser();
    res.status(200).json({user});
});

app.patch('/users/:id', async (req, res) => {
    const id = await db.updateUser(req.params.id, req.body);
    res.status(200).json({id});
});

app.delete('/users/:id', async (req, res) => {
    await db.deleteUser(req.params.id);
    res.status(200).json({success: true});
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})