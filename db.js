const requelize = require('sequelize');
const models = require('./models');

models.sequelize.sync().then(() => {
  console.log('connected to database'); // eslint-disable-line no-console
}).catch((err) => {
  console.log(err); // eslint-disable-line no-console
});
