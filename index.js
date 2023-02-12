const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");


const app = express();
app.use(express.json());
app.use(cors());

app.get("/outfit", (req, res) => {
  const tops = ["Black", "White", "Orange", "Navy"];
  const jeans = ["Levys", "Dickies", "Calvin Klein", "Wrangler"];
  const shoes = ["AirMax", "Converse", "Under Armour", "Hugo Boss"];

  res.json({
    top: _.sample(tops),
    jeans: _.sample(jeans),
    shoes: _.sample(shoes),
  });
});



app.listen(3000, () => console.log("API server is running"));
