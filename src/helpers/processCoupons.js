const _ = require('lodash');

const PROMOTION_TYPES = {
  PERCENT_OFF: 'percent-off',
  BUY_ONE_GET_ONE: 'buy-one-get-one',
  FREE_GIFT: 'free-gift',
  FREE_SHIPPING: 'free-shipping',
  DOLLAR_OFF: 'dollar-off',
};

const countCouponsOfEachType = (coupons) => {
  return coupons.reduce((acc, current) => {
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
    min: _.min(couponValues),
    max: _.max(couponValues),
    average: _.mean(couponValues),
    total: coupons.length,
  };
  return minMax;
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

const coupons = [
  {
    country_code: 'us',
    coupon_id: 259887,
    coupon_webshop_name: "Macy's  & Promo Codes",
    description:
      '25% OFF Sale Save 25% Off Petite Tops 50 uses today Get Deal See Details Details Add a Comment Ends:  Today Details:  Get 25% Off Petite Tops! Find your perfect sleeve length without worrying about hemming. Include nearby city with my comment to help other users. Post Comment Comment Posted Post Another Comment',
    first_seen: '2017-09-06',
    last_seen: '2017-09-06',
    promotion_type: 'percent-off',
    title: '25% Off Petite Tops',
    value: 25,
    webshop_id: 'macys',
  },
  {
    country_code: 'us',
    coupon_id: 259886,
    coupon_webshop_name: "Macy's  & Promo Codes",
    description:
      "50% OFF Sale Save 50% Off Select Men's Patterned Suits Verified today 5 uses today Get Deal See Details Details Add a Comment Details:  Get 50% Off Select Men's Patterned Suits. Include nearby city with my comment to help other users. Post Comment Comment Posted Post Another Comment",
    first_seen: '2017-09-06',
    last_seen: '2017-09-07',
    promotion_type: 'percent-off',
    title: "50% Off Select Men's Patterned Suits",
    value: 50,
    webshop_id: 'macys',
  },
  {
    country_code: 'us',
    coupon_id: 258643,
    coupon_webshop_name: "Macy's  & Promo Codes",
    description:
      'BOGO Sale Save Buy 2, Get 1 Free Select Desk Accessories Verified today 2 uses today Get Deal See Details Details Add a Comment Ends:  09/04/17 Details:  Buy two, get one free select desk accessories Include nearby city with my comment to help other users. Post Comment Comment Posted Post Another Comment',
    first_seen: '2017-09-01',
    last_seen: '2017-09-04',
    promotion_type: 'buy-one-get-one',
    title: 'Buy 2, Get 1 Free Select Desk Accessories',
    value: null,
    webshop_id: 'macys',
  },
  {
    country_code: 'us',
    coupon_id: 252399,
    coupon_webshop_name: 'Nordstrom  & Promo Codes',
    description:
      'FREE GIFT Sale Save Free Pouch & Deluxe Samples & Body Creme With $100 Jo Malone London Orders Get Deal See Details Details Add a Comment Details:  Receive a drawstring pouch and deluxe samples of Basil & Neroli Cologne (0.3 oz.), Wood Sage & Sea Salt Body & Hand Wash (0.5 oz.) and English Pear & Freesia Body Crème (0.5 oz.) with your $100 Jo Malone London purchase. Online only. Include nearby city with my comment to help other users. Post Comment Comment Posted Post Another Comment',
    first_seen: '2017-08-10',
    last_seen: '2017-09-07',
    promotion_type: null,
    title:
      'Free Pouch & Deluxe Samples & Body Creme With $100 Jo Malone London Orders',
    value: null,
    webshop_id: 'nordstrom',
  },
  {
    country_code: 'us',
    coupon_id: 258647,
    coupon_webshop_name: "Macy's  & Promo Codes",
    description:
      '$20 OFF Sale Save $20 Off Your Next Purchase of $50+ When You Shop Couple’s Registry 11 uses today Get Deal See Details Details Add a Comment Ends:  10/01/17 Details:  Give a gift, get a gift! Shop a couple’s registry and take $20 off your next purchase of $50 or more. Include nearby city with my comment to help other users. Post Comment Comment Posted Post Another Comment',
    first_seen: '2017-09-01',
    last_seen: '2017-09-07',
    promotion_type: 'dollar-off',
    title: '$20 Off Your Next Purchase of $50+ When You Shop Couple’s Registry',
    value: 20,
    webshop_id: 'macys',
  },
  {
    country_code: 'us',
    coupon_id: 215314,
    coupon_webshop_name: 'Nordstrom  & Promo Codes',
    description:
      'Free Gift Save Show Coupon Code 10 uses today Free 3 Piece Gifts With Your $75 Clarins Purchase Details: Get Free three-piece gifts with your $75 Clarins purchase. 100% Success 100% Success Add a Comment Include nearby city with my comment to help other users. Post Comment Comment Posted Post Another Comment',
    first_seen: '2017-05-04',
    last_seen: '2017-09-07',
    promotion_type: null,
    title: 'Free 3 Piece Gifts With Your $75 Clarins Purchase',
    value: null,
    webshop_id: 'nordstrom',
  },
  {
    country_code: 'us',
    coupon_id: 260310,
    coupon_webshop_name: "Macy's  & Promo Codes",
    description:
      "UP TO 20% OFF In Store Coupon Save $10 Off Select Sale Clothing & Home Items of $25+ & Up to an Extra 20% Off Select Sale & Clearance Items Added by   TrishAloha 1.2k uses today Show Coupon See Details Exclusions Details Add a Comment Ends:  09/11/17 Exclusions:  Deals of the Day. Doorbusters, Everyday Values (EDV), Last Act, Macy's Backstage, specials, Super Buys, athletic clothing/shoes/accessories, baby gear. reg.-price china/ crystal/silver, cosmetics/fragrances, designer handbags, designer jewelry/watches, uesigner sportswear, electrics/electronics furniture/mattresses, gift cards, jewelry trunk shows, select licensed depts., previous purchases, restaurants, rugs, services, smart watches/jewelry, special orders, special purchases, select tech accessories, toys, 3Doodler, American Rug Craftsmen, Apple Products, Avec Les Ales clothing, Barbour, Brahmin, Brevitle, Brooks Brothers Red Fleece, COACH, Demeyere, Destination Maternity, Dyson, Eileen Fisher SYSTEM, Fitbit, Frye, Hanky Panky, Jack Spade, Karastan, kate spade new york, Kenneth Cole shoes, KitchenAid Pro Line, Le Creuset, Levi's. littleBits, Locker Room by Lids, Marc Jacobs, select Michael Kors/Michael Michael Kors, Michele watches, Miyabi, Movado Bold, Natori, Nike swim, Original Penguin, Rimowa, Rudsak, Sam Edelman, Shun, Spanx, Staub, Stuart Weitzman, Tempur-Pedic mattresses, The North Face, Theory, Tommy John. Tory Burch, Tumi, UGG®, Vans, Vitamix, Wacoal, Wolford & Wusthof; PLUS, ONLINE ONLY: kids' shoes, Allen Edmonds, Birkenstock, Hurley, Johnston & Murphy, Merrell, RVCA & Tommy Bahama. Ends:  09/11/17 Details:  Get $10 Off your purchase of $25 or more On Select Sale Clothing & Home Items Valid from 9/7/2017 to 9/9/2017 till 2:00 Pm or on 9/10/2017 till 3:00 Pm or on 9/11/2017 till 2:00 Pm or Extra 20% Off Select Sale and Clearance on clothing and accessories + Extra 15% Off select sale and clearance on shoes, coats, suits, dresses, jewelry, Lingerie, swim for her, suit separates and sport coats for him and home items. Include nearby city with my comment to help other users. Post Comment Comment Posted Post Another Comment",
    first_seen: '2017-09-07',
    last_seen: '2017-09-07',
    promotion_type: 'dollar-off',
    title:
      '$10 Off Select Sale Clothing & Home Items of $25+ & Up to an Extra 20% Off Select Sale & Clearance Items',
    value: 10,
    webshop_id: 'macys',
  },
  {
    country_code: 'us',
    coupon_id: 257931,
    coupon_webshop_name: "Macy's  & Promo Codes",
    description:
      '70% OFF Sale Save 70% Off Sheets Sets 8 uses today Get Deal See Details Details Add a Comment Ends:  09/05/17 Details:  Get 70% Off Sheets Sets. Include nearby city with my comment to help other users. Post Comment Comment Posted Post Another Comment',
    first_seen: '2017-08-30',
    last_seen: '2017-09-04',
    promotion_type: 'percent-off',
    title: '70% Off Sheets Sets',
    value: 70,
    webshop_id: 'macys',
  },
  {
    country_code: 'us',
    coupon_id: 259338,
    coupon_webshop_name: "Macy's  & Promo Codes",
    description:
      'UP TO 80% OFF Sale Save Up to 80% Off Select INC Styles Verified today 7 uses today Get Deal See Details Details Add a Comment Ends:  09/09/17 Details:  LAST ACT! Get Up to 80% off Select INC Styles. Include nearby city with my comment to help other users. Post Comment Comment Posted Post Another Comment',
    first_seen: '2017-09-03',
    last_seen: '2017-09-06',
    promotion_type: 'percent-off',
    title: 'Up to 80% Off Select INC Styles',
    value: 80,
    webshop_id: 'macys',
  },
  {
    country_code: 'us',
    coupon_id: 207005,
    coupon_webshop_name: 'Nordstrom  & Promo Codes',
    description:
      'Free Gift Save Show Coupon Code 13 uses today Free Gift With $39.50 Lancome Purchase Submitted by   llsc Details: Get a Free gift with $39.50 Lancome purchase 100% Success 100% Success Add a Comment Include nearby city with my comment to help other users. Post Comment Comment Posted Post Another Comment',
    first_seen: '2017-04-08',
    last_seen: '2017-09-06',
    promotion_type: 'free-gift',
    title: 'Free Gift With $39.50 Lancome Purchase',
    value: null,
    webshop_id: 'nordstrom',
  },
  {
    country_code: 'us',
    coupon_id: 215688,
    coupon_webshop_name: 'Nordstrom  & Promo Codes',
    description:
      'Free Gift Save Show Coupon Code 8 uses today Free Gentle Foaming Cleanser & Cosmetics Bag With Clarins Purchase of $75 Details: Get Free Gentle Foaming Cleanser with cottonseed, Multi-Active Night Cream and Cosmetics Bag with Clarins purchase of $75. 100% Success 100% Success Add a Comment Include nearby city with my comment to help other users. Post Comment Comment Posted Post Another Comment',
    first_seen: '2017-05-05',
    last_seen: '2017-09-07',
    promotion_type: 'dollar-off',
    title:
      'Free Gentle Foaming Cleanser & Cosmetics Bag With Clarins Purchase of $75',
    value: 75,
    webshop_id: 'nordstrom',
  },
  {
    country_code: 'us',
    coupon_id: 260326,
    coupon_webshop_name: "Macy's  & Promo Codes",
    description:
      'PROMO CODE Code Save American Rag Shorts Starting From $11.99 5 uses today Show Coupon Code See Details Details Add a Comment Expires:  09/11/17 Details:  Time to Stock Up! Get American Rag Shorts starting from $11.99. Include nearby city with my comment to help other users. Post Comment Comment Posted Post Another Comment',
    first_seen: '2017-09-07',
    last_seen: '2017-09-07',
    promotion_type: null,
    title: 'American Rag Shorts Starting From $11.99',
    value: null,
    webshop_id: 'macys',
  },
];
