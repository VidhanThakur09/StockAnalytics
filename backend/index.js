const data = require('./data.js');

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute.js");

const holdingsModel = require('./model/HoldingsModel.js');
const positionsModel = require('./model/PositionsModel.js');
const ordersModel = require('./model/OrdersModel.js');
const WatchListModel = require('./model/WatchListModel.js');
const UserModel = require('./model/UserModel.js');


const { userVerification } = require('./middlewares/AuthMiddleware.js');

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;
const app = express();

// It's recommended to configure CORS once. The second app.use(cors()) is redundant.
app.use(cors({
    origin: [process.env.DASHBOARD_PORT, process.env.FRONTEND_PORT], // Allow requests only from your frontend origin
    credentials: true, // Allow cookies to be sent with the request
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed request headers
}));

app.use(bodyParser.json());
app.use(cookieParser());

main()
    .then(() => {
        console.log("connection successfully established")
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

const HoldingInitDB = async () => {
    await holdingsModel.deleteMany({});
    await holdingsModel.insertMany(data.holdings);
    // console.log("Holdings initialized in DB");
}
const PositionsInitDB = async () => {
    await positionsModel.deleteMany({});
    await positionsModel.insertMany(data.positions);
    // console.log("Positions initialized in DB");
}
const WatchListInitDB = async () => {
    await WatchListModel.deleteMany({});
    await WatchListModel.insertMany(data.watchlist);
}

app.get('/', (req, res) => {
    res.send('Welcome to the Express.js');
});

app.post('/', userVerification, (req, res) => {
    res.json({ status: true });
});

app.get('/allholdings', async (req, res) => {
    let allHoldings = await holdingsModel.find({});
    res.json(allHoldings);
});
app.get('/allorders', async (req, res) => {
    let allOrders = await ordersModel.find({});
    res.json(allOrders);
});
app.get('/allpositions', async (req, res) => {
    let allPositions = await positionsModel.find({});
    res.json(allPositions);
})
app.get('/allwatchlist', async (req, res) => {
    let allWatchList = await WatchListModel.find({});
    res.json(allWatchList);
})
app.post('/stock/:id', async (req, res) => {
    let stockData = await WatchListModel.findById(req.params.id);
    res.json(stockData);
})

app.post("/newOrder", async (req, res) => {
    let newOrder = new ordersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    await newOrder.save(); // It's good practice to await the save operation

    res.send("Order saved!");
});

// Corrected route setup for authentication
app.use("/", authRoute); // FIX: Use a base path that allows /signup and /login to be accessed directly.

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});