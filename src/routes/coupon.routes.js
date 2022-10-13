const Router = require('express');
const {
  getCoupons,
  getNumberOfCouponsByType,
  getDiscountStatistics,
  getDiscountStatisticsByRetailer,
} = require('../controllers/coupons.controller.js');
const couponRoutes = Router({ mergeParams: true });

couponRoutes.get('/', getCoupons);
couponRoutes.get('/count-coupons-by-type', getNumberOfCouponsByType);
couponRoutes.get('/discount-statistics', getDiscountStatistics);
couponRoutes.get(
  '/discount-statistics-by-retailer',
  getDiscountStatisticsByRetailer
);

module.exports = { couponRoutes };
