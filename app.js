const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const minions = require("./routes/api/minions");
const User = require('./models/User');
const bodyParser = require('body-parser');
const passport = require("passport");


mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));


app.get('/', (req,res) => {
    res.send('hello')
})



app.use(passport.initialize());
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.use("/api/users", users);
app.use("/api/minions", minions);



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
