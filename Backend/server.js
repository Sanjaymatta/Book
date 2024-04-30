// // server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const bookRoutes = require('./routes/books');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 3000;


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/api/books', bookRoutes);

// app.use(express.static(path.join(__dirname, 'frontend', 'public')));

// // app.use(express.static('./Frontend/public'));


// mongoose.connect("mongodb+srv://sanjay:sanjay s3@cluster0.i8pcstx.mongodb.net/books1")
//     .then(() => {
//         console.log('Connected to MongoDB');
//         app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
//     })
//     .catch(err => console.error('Error connecting to MongoDB:', err));


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/books');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Add CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Replace with the origin of your web page
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/books', bookRoutes);

app.use(express.static(path.join(__dirname, 'frontend', 'public')));

mongoose.connect("mongodb+srv://sanjay:sanjay s3@cluster0.i8pcstx.mongodb.net/books1")
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));