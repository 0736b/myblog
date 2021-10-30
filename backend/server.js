const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

//bring routes
const blogRoutes = require('./routes/blog');

// app
const app = express();

// database (MongoDB Atlas)
mongoose.connect(process.env.DATABASE).then(() => console.log('DB connected'));

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

// cors
if(process.env.NODE_ENV === 'development'){    
    app.use(cors({origin: `${process.env.CLIENT_URL}`}));
}

// routes middleware
// add prefix /api
app.use('/api', blogRoutes);


// routes
// app.get() takes two arguments first is the endpoint, second is the function we are using arrow function here
// app.get('/api', (req, res) => {
//     res.json({time: Date().toString()});
// })


// port
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});