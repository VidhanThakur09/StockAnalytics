const data = require( './data.js');

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const holdingsModel = require('./model/HoldingsModel.js');
const positionsModel = require('./model/PositionsModel.js');
const ordersModel = require('./model/OrdersModel.js');

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;
const app = express();

app.use(cors());
app.use(bodyParser.json());

main()
.then(()=>{
    console.log("connection successfully established")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const HoldingInitDB = async()=>{
    await holdingsModel.deleteMany({});
    await holdingsModel.insertMany(data.holdings);
    // console.log("Holdings initialized in DB");
}
const PositionsInitDB = async()=>{
    await positionsModel.deleteMany({});
    await positionsModel.insertMany(data.positions);
    // console.log("Positions initialized in DB");
}

app.get('/', (req, res) => {
    res.send('Welcome to the Express.js');
});
app.get('/allholdings', async (req, res) => {
    let allHoldings = await holdingsModel.find({});
    res.json(allHoldings);
});
app.get('/allpositions', async (req, res) => {
    let allPositions = await positionsModel.find({});
    res.json(allPositions);
})
// app.get('/holdings', (req, res) => {
//     HoldingInitDB().then(()=>{
//         console.log("Holdings initialized in DB");
//         res.send("Holdings initialized in DB");
//     }).catch(err => console.log(err));
// })

// app.get('/positions', (req, res) => {
//     PositionsInitDB().then(()=>{
//         console.log("Positions initialized in DB");
//         res.send("Positions initialized in DB");
//     }).catch(err => console.log(err));
// })
 app.post("/newOrder", async (req, res) => {
  let newOrder = new ordersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
