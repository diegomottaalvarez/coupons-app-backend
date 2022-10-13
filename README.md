# pet-or-leave

Coupon statistics backend in node

This is a nice statistics provider that works with retail data from different brands.

You have different endpoints to ask info:

### API Endpoints

| HTTP | Endpoints                                    | Action                                         | Params                                                                                      |
| ---- | -------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------- |
| GET  | /api/coupons/                                | Return all existing coupons                    | ---                                                                                         |
| GET  | /api/coupons/count-coupons-by-type           | Return existing coupons grouped by coupon type | ----                                                                                        |
| GET  | /api/coupons/discount-statistics             | Return discount stadistics                     | promotion_type: 'percent-off', 'buy-one-get-one', 'free-gift', 'free-shipping','dollar-off' |
| GET  | /api/coupons/discount-statistics-by-retailer | Return discount stadistics grouped by retailer | promotion_type: 'percent-off', 'buy-one-get-one', 'free-gift', 'free-shipping','dollar-off' |

## Project setup

```
npm install
```

### Compiles for development. App will be listening on PORT=4000

```
npm start
```

### Compiles and minifies for production

```
npm run build
```
