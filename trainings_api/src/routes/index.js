const user = require("./user.router");
const business = require("./business.router");
module.exports = (app) => {
  user(app)
  business(app)
};
