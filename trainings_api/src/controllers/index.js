// exports.index = (req, res) => {
//   res.send("Say Hello");
// };
const user = require("./user");
const business = require("./business");

module.exports = {
  ...user, // cerateUser, userList
  ...business
};
