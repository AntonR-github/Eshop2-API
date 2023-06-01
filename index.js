const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const productsRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const stripeRoute = require('./routes/stripe');
const orderRoute = require('./routes/order');

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => { console.log(err) });


app.use(express.json());
app.use(cors());
app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/products', productsRoute);
app.use('/carts', cartRoute);
app.use('/orders', orderRoute);
app.use('/checkout', stripeRoute);





app.listen(process.env.PORT || 5000, () => {
    console.log('Server on port 5000');
});