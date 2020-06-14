// exports.index = (req, res) => {
//   res.send("Say Hello");
// };
const user = require("./user");

module.exports = {
  ...user, // cerateUser, userList
};
