module.exports = ({ env }) => ({  
  auth: {
    secret: env('JWT_SECRET', '514965f4c1e06b74cc124cdf979c226b'),
  },
});
 