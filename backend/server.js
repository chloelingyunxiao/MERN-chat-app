const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messageRoutes");
const {
  notFound,
  errorHandler,
} = require("../backend/middleware/errorMiddleware");
const chatRoutes = require("./routes/chatRoutes");
const { sendMessage } = require("./models/messageModel");
const app = express();
app.use(express.json()); // to access the json data
dotenv.config();
connectDB();

// app.get("/", (request, respond) => {
//   respond.send("API is running automatically!");
// });

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;

app.listen(8000, console.log(`Server started on port ${PORT}`.yellow.bold));
