const express = require('express');
const cors = require('cors');
const { couponRoutes } = require('./routes/coupon.routes.js');
const app = express();

app.set('port', 4000);

app.use(cors());

app.use(express.json());
app.use('/api/coupons', couponRoutes);

module.exports = app;
