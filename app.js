require('dotenv').config();
require('./config/instrument.js')
const Sentry = require("@sentry/node");
const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const AuthRoutes = require('./routes/authRoutes');
const { Server } = require("socket.io");

const app = express();
const port = 3000;
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', AuthRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(errorHandler);

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const io = new Server(server);

io.on('connection', (socket) => {
    socket.on('notification', (data) => {
        io.emit('notification', data);
    });
})