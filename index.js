const express = require('express');
const { resolve } = require('path');
const model=require("./model/database")


const app = express();
const port = 3010;
app.use(express.json());


app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.post('/menu',async(req,res)=>{
  let {Name,description,price}=req.body;
  let user=await model.create({
    Name,
    description,
    price
  })
  res.send(user);
});
app.get('/menu', async (req, res) => {
  
    let users = await model.find(); 
    res.json(users);
  
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
