const requelize = require('sequelize');
const models = require('./models');

models.sequelize.sync().then(() => {
  console.log('connected to database');
}).catch((err) => {
  console.log(err);
});
