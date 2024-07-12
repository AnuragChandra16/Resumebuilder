require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/loginRouter');
const errorHandler = require('./middleware/errorhandler');
const isAuthenticated = require('./middleware/isAuth');
const cors = require('cors');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("connected to mongodb"))
  .catch(err => console.log(err));

  const corsOptions = {
    origin: ["https://resumebuilder-u7xz.vercel.app/", "*"],
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify the methods you want to allow
    credentials: true // Allow cookies to be sent with requests
};
app.use(cors(corsOptions));
  
// Middlewares
app.use(express.json());

// Routes
app.use("/", userRouter);


// Error handling
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on this port ${PORT}`));