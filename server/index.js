const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

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



app.get("/api/fortuneButton", (req, res) => {
  const fortunes = ["You are bound for glory!",
					 "Get on the bus, you'll be glad you did!",
					 "You will encounter many great blessings in the days to come",
  ];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get("/api/jokeButton", (req, res) => {
  const jokes = [" I went to buy some camo pants but couldn’t find any.",
					 "The problem with kleptomaniacs is that they always take things literally.",
					 ". I used to think I was indecisive. But now I’m not so sure.",
           "The easiest time to add insult to injury is when you’re signing someone’s cast.",
  ];

  let randomIndex = Math.floor(Math.random() * jokes.length);
  let randomJoke = jokes[randomIndex];

  res.status(200).send(randomJoke);
  
});

//Whenever I uncomment these my buttons do not show a response. 
// const {
//   getHappiness,
//   happinessLog,
// } = require

// app.get(`/api/houses`, getHappiness)
// app.post(`/api/houses/`, happinessLog)





app.listen(4000, () => console.log("Server running on 4000"));