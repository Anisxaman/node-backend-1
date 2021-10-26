const express = require('express')
const app = express()

var cors= require('cors')
app.use(cors())

app.use(express.json());//post r kettre string data k json a convert

const port = 4000;
//------------------------(how start)-------------------------------------
//npm init
// npm install express
//npm nodemon
//package.json a gia folder change
// reun commad:  node index.js

//-------------cors(load data from another local host)---------------


//var cors = require('cors')
//app.use(cors())


// fetch api url:
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//------------------------------------------------------------------

const users=[{
    "id": 1,
    "name": "Sabnoor",
    "username": "sabnoor",
    "email": "Sincere@april.biz",
    "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
    "lat": "-37.3159",
    "lng": "81.1496"
    }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
    "name": "noor",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
    }
    },
    {
    "id": 2,
    "name": "Sabana",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
    "street": "Victor Plains",
    "suite": "Suite 879",
    "city": "Wisokyburgh",
    "zipcode": "90566-7771",
    "geo": {
    "lat": "-43.9509",
    "lng": "-34.4618"
    }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
    "name": "Deckow-Crist",
    "catchPhrase": "Proactive didactic contingency",
    "bs": "synergize scalable supply-chains"
    }
    },
    {
    "id": 3,
    "name": "Bobitha",
    "username": "bobita",
    "email": "Nathan@yesenia.net",
    "address": {
    "street": "Douglas Extension",
    "suite": "Suite 847",
    "city": "McKenziehaven",
    "zipcode": "59590-4157",
    "geo": {
    "lat": "-68.6102",
    "lng": "-47.0653"
    }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
    "name": "Romaguera-Jacobson",
    "catchPhrase": "Face to face bifurcated interface",
    "bs": "e-enable strategic applications"
    }
    }]




//------------------ display data---------------
app.get('/', (req, res) => {
    res.send(users)
  });

  // ----------------------------------youtube like search----------------------

app.get("/users",(req,res)=>{
  const search = req.query.search;
    console.log(req.query.search);

    if(search){
      const searchResult=users.filter(user=>user.username.toLocaleLowerCase().includes(search));
      res.send(searchResult);
    
    }
    
    else{
      res.send(users)
    }
    // res.send(users);
    // const search=req.
})


// 5:57









//------------------------------ post data--------------------

app.post("/users",(req,res)=>{

  const CreatenewUser=req.body;
  CreatenewUser.id=users.length;
  console.log(users.length)
  console.log("hitting the post",req.body) //req korbo body te data joma rakte
  // res.send("post got hitted")
  res.json(CreatenewUser)
})

//post kora name,email & id wala user k show korar jonno data pathabe app.js a.Oikhane data hisabe show korbe. jake input dissi ta abar backend gure output dekasse.


//res mane paoya req mane dea.














// -----------------------------load individual data-----------------

  app.get("/users/:id",(req,res)=>{
      const id=req.params.id;
      const user=users[id]; //user array te index number dore dhak dea hoise.
      console.log(req.params.id)
      res.send(user);//je user paoya gese take display kora hobe.
  })
 


app.get("/fruits/mangoes/fazli",(req,res)=>{
    res.send("yammy dfgdfgd dfsdfgsg yammy")
})






  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })