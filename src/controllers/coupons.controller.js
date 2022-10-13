const response = require('express');
const {
  countCouponsOfEachType,
  getMinMaxAverageTotal,
  getCouponsWithDiscountByFilter,
  groupCouponsByRetailer,
  PROMOTION_TYPES,
} = require('../helpers/processCoupons');

const coupons = require('../../coupons.json');

const getCoupons = async (req, res = response) => {
  try {
    console.table(
      'COUPONS OF EACH TYPE',
      countCouponsOfEachType(coupons.coupons)
    );
    const filter = PROMOTION_TYPES.DOLLAR_OFF;
    const discount = getCouponsWithDiscountByProcessType(
      coupons.coupons,
      filter
    );

    const process = getMinDiscountMaxDiscount(discount);
    console.log(filter, process);

    res.status(201).json(coupons);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error while getting coupons' });
  }
};

const getNumberOfCouponsByType = async (req, res = response) => {
  try {
    const response = countCouponsOfEachType(coupons.coupons);
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error while getting coupons by type' });
  }
};

const getDiscountStatistics = async (req, res = response) => {
  try {
    const { promotion_type } = req.query;
    if (!Object.values(PROMOTION_TYPES).includes(promotion_type)) {
      res
        .status(400)
        .json({ message: 'You have to choose a valid promotion type' });
      return;
    }
    const filteredCoupons = getCouponsWithDiscountByFilter(
      coupons.coupons,
      promotion_type
    );
    const response = getMinMaxAverageTotal(filteredCoupons);
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: 'Error while obtaining discount statistics' });
  }
};

const getDiscountStatisticsByRetailer = async (req, res = response) => {
  try {
    const { promotion_type } = req.query;
    if (!Object.values(PROMOTION_TYPES).includes(promotion_type)) {
      res
        .status(400)
        .json({ message: 'You have to choose a valid promotion type' });
      return;
    }

    const filteredCoupons = getCouponsWithDiscountByFilter(
      coupons.coupons,
      promotion_type
    );
    const couponsByRetailer = groupCouponsByRetailer(filteredCoupons);

    const response = Object.entries(couponsByRetailer).map(
      ([retailer, values]) => ({
        retailer,
        statistics: getMinMaxAverageTotal(values),
      })
    );

    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error while obtaining discount statistics by retailer',
    });
  }
};
module.exports = {
  getCoupons,
  getNumberOfCouponsByType,
  getDiscountStatistics,
  getDiscountStatisticsByRetailer,
};
