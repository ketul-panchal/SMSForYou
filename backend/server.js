const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Initialize Express
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*", 
        methods: ["GET", "POST"]
    }
});

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Chat Message Schema
const ChatSchema = new mongoose.Schema({
    username: String,
    message: String,
    timestamp: { type: Date, default: Date.now }
});
const Chat = mongoose.model('Chat', ChatSchema);

// WebSocket Connection
io.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} connected`);

    // Load previous messages
    socket.on("getMessages", async () => {
        const messages = await Chat.find().sort({ timestamp: 1 }).limit(50);
        socket.emit("previousMessages", messages);
    });

    // Send & Save message
    socket.on('sendMessage', async (data) => {
        const chatMessage = new Chat({ username: data.username, message: data.message });
        await chatMessage.save();

        io.emit('receiveMessage', chatMessage); 
    });

    socket.on('disconnect', () => {
        console.log(`⚡: ${socket.id} disconnected`);
    });
});


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
