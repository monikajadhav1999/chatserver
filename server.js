const express = require('express');
const dotenv = require("dotenv");
const {chats} = require('./data/data');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes')
// const chatRoutes = require("./routes/chatRoutes")
const { notFound, errorHandler } = require('./middlewares/errorMiddleware')


dotenv.config();
connectDB();
const app = express();

app.use(express.json());   //accept json data
app.get('/',(req,res) => {
    res.send("running")
})

app.use("/api/user",userRoutes)
// app.use("/api/chat",chatRoutes)
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(4000, console.log(`server running ${PORT}`));