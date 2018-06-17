const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const stripeService = {
  chargeCard: (chargeInfo, callback) => {
    console.log(chargeInfo);
    stripe.charges.create(
      {
        amount: chargeInfo.price * 100,
        currency: 'MXN',
        source: chargeInfo.tokenId,
        description: 'Charge for yummy taco',
      },
      callback,
    );
  },
};

module.exports = stripeService;
