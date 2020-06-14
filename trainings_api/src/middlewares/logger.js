const { API_KEY } = require("../config");

exports.logger = (req, res, next) => {
  //res.send("Hello from logger");
  // statement
  req.appId = API_KEY;
  next();
};
