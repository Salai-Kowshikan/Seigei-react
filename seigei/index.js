const express = require("express");
const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");
const Registermodel = require("./models/registerdb");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const session = require('express-session');
const { Console } = require("console");
//openai

const openai = require('openai');

const saltRounds = 10;
//json parsers
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
//openai
const openaiConfig = new openai.OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
//sessions
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // set to true if your using https
}));
//session authentication
function isAuthenticated(req, res, next) {
  if (req.session.userId) {
    next();
  } else {
    res.json({ message: "Unauthorized" });
  }
}
//dbconnect
mongoose.connect("mongodb://localhost:27017/seigei", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("connected", () => {
  console.log("MongoDB connected successfully");
});
db.on("error", (err) => {
  console.log("MongoDB connection error:", err);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.post("/register", async (req, res) => {
  //password name email is to be sent
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const register = new Registermodel({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    const savedData = await register.save();
    console.log("Data inserted successfully:", savedData);
    res.json(savedData);
  } catch (err) {
    console.log("Error inserting data:", err);
    res.json({ message: err });
  }
});

app.post("/login", async (req, res) => {
  //email,password is to be sent
  try {
    const user = await Registermodel.findOne({ email: req.body.email });
    if (user) {
      const result = await bcrypt.compare(req.body.password, user.password);
      if (result) {
        console.log("Name:",user.name);
        req.session.userId = user.name;
        res.json({ message: "Login successful" });
      } else {
        res.json({ message: "Password does not match" });
      }
    } else {
      res.json({ message: "Email not found" });
    }
  } catch (err) {
    res.json({ message: err });
  }
});

app.get('/gpt', async (req, res) => {
  const words = "my school friend come home food drink";
  const messages = "Make a meaningful sentence out of the phrases: " + words;
  console.log(messages);
  const completion = await openaiConfig.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
          {"role": "user", "content": messages}
      ],
      max_tokens: 200
  })
  console.log(completion);
  res.send(completion.choices[0].message);

});

