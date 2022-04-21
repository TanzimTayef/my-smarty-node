const express = require("express");
const cors = require("cors")
const app = express();

const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    res.send("hello workd")
});


const users = [
    {id: 1, name: "zara", email: "zara@gamil.com", phone: '0179876756'},
    {id: 2, name: "sara", email: "sara@gamil.com", phone: '0179766656'},
    {id: 3, name: "gara", email: "gara@gamil.com", phone: '0179876777'},
    {id: 4, name: "hara", email: "hara@gamil.com", phone: '01798767566'},
    {id: 5, name: "mara", email: "mara@gamil.com", phone: '0179876890'},
    {id: 6, name: "lara", email: "lara@gamil.com", phone: '0179876755'},
    {id: 7, name: "kara", email: "kara@gamil.com", phone: '0179876707'},
]



app.get("/users", (req, res) => {
    console.log("query", req.query)
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const metched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
       res.send(metched)
    } else {
        res.send(users)
    }
  
});
app.get("/user/:id", (req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id)
    res.send(user)
});

// post methond
app.post("/user", (req, res) => {
    console.log("request", req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})




app.get("/fruits", (req, res) => {
    res.send(["mango", "apple", "orange"]);
})

app.listen(port, () => {
    console.log("listating to prot " , port)
})