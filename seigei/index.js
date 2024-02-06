const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const cors = require('cors');
const Registermodel = require('./models/registerdb');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/seigei', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('connected', () => {
    console.log('MongoDB connected successfully');
});
db.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

app.post('/register', async (req, res) => {
    //password name email is to be sent
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        const register = new Registermodel({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        const savedData = await register.save();
        console.log('Data inserted successfully:', savedData);
        res.json(savedData);
    } catch (err) {
        console.log('Error inserting data:', err);
        res.json({ message: err });
    }
});

app.post('/login', async (req, res) => {
    //email,password is to be sent
    try {
        const user = await Registermodel.findOne({ email: req.body.email });
        if (user) {
            const result = await bcrypt.compare(req.body.password, user.password);
            if (result) {
                res.json({ message: 'Login successful' });
            } else {
                res.json({ message: 'Password does not match' });
            }
        } else {
            res.json({ message: 'Email not found' });
        }
    } catch (err) {
        res.json({ message: err });
    }
});
