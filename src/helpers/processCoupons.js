const PROMOTION_TYPES = {
  PERCENT_OFF: 'percent-off',
  BUY_ONE_GET_ONE: 'buy-one-get-one',
  FREE_GIFT: 'free-gift',
  FREE_SHIPPING: 'free-shipping',
  DOLLAR_OFF: 'dollar-off',
};

const countCouponsOfEachType = (coupons) => {
  return coupons.reduce((acc, current) => {
    if (!current.promotion_type) {
      current.promotion_type = 'coupon-without-promotion-type';
    }
    acc[current.promotion_type]
      ? acc[current.promotion_type]++
      : (acc[current.promotion_type] = 1);
    return acc;
  }, {});
};

const getCouponsWithDiscountByFilter = (coupons, filter) => {
  return coupons.filter((coupon) => {
    return coupon.value && coupon.promotion_type === filter;
  });
};

const getMinMaxAverageTotal = (coupons) => {
  const couponValues = coupons.map((coupon) => coupon.value);
  const minMax = {
    min: Math.min(...couponValues),
    max: Math.max(...couponValues),
    average: calculateAverage(couponValues),
    total: coupons.length,
  };
  return minMax;
};

const calculateAverage = (numbers) => {
  return numbers.reduce((a, b) => a + b) / numbers.length;
};

const groupCouponsByRetailer = (coupons) => {
  return coupons.reduce((acc, current) => {
    if (!acc[current.webshop_id]) {
      acc[current.webshop_id] = [current];
    } else {
      acc[current.webshop_id].push(current);
    }
    return acc;
  }, {});
};

module.exports = {
  countCouponsOfEachType,
  getMinMaxAverageTotal,
  getCouponsWithDiscountByFilter,
  groupCouponsByRetailer,
  PROMOTION_TYPES,
};
