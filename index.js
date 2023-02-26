const fs = require("fs/promises");
const fsR = require("fs");
const path = require("path");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");


const app = express();
app.use(express.json());
app.use(cors());

app.get("/outfit", (request, response) => {
  const tops = ["Black", "White", "Orange", "Navy"];
  const jeans = ["Levys", "Dickies", "Calvin Klein", "Wrangler"];
  const shoes = ["AirMax", "Converse", "Under Armour", "Hugo Boss"];

  response.json({
    top: _.sample(tops),
    jeans: _.sample(jeans),
    shoes: _.sample(shoes),
  });
});

app.get("/", (request, response) => {
  const filePath = path.join(__dirname, "public", "index.html")
  fsR.readFile(filePath, "utf-8", (err, html) => {
    if (err) {
      console.log(err);
      response.status(500).send("Error reading file");
    } else {
      response.send(html);
    }
  });
});


app.listen(3000, () => console.log("API server is running"));

