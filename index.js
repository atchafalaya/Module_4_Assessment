const express = require('express')
const  cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    getHouses, deleteHouse, createHouse, updateHouse
} = require('./controller.js')

app.get(`/api/houses`, getHouses)
app.delete(`/api/houses/:id`, deleteHouse)
app.post(`/api/houses`, createHouse)
app.put(`/api/houses/:id`, updateHouse)

app.get("/api/compliment", (req, res) => {
    const compliments = ["Gee, you're a smart cookie!",
                       "Cool shirt!",
                       "Your Javascript skills are stellar.",
    ];
  
    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
  
    res.status(200).send(randomCompliment);
  }); 
  
    app.get("/api/fortune", (req, res) => {
      const fortunes = ["All your hard work will soon pay off.",
               "An easing of tension is imminent.",
               "A good time to finish up old tasks.",
               "Determination is what you need now.",
               "JavaScript has destroyed more minds than bath salts.",
               "They who do not check the URL are soon Rickrolled.",
      ];
    
      // choose random fortune
      let randomIndex = Math.floor(Math.random() * fortunes.length);
      let randomFortune = fortunes[randomIndex];
    
      res.status(200).send(randomFortune);
      
  });


app.listen(4004, () => console.log(`Server running on 4004`))