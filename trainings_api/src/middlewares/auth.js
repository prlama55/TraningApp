const { verify } = require("jsonwebtoken");
const { JWT_ACCESS_TOKEN_SECRET } = require("../config");
const { User } = require("../models");
exports.auth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    throw new Error("Unauthorized");
  }
  const accessToken = authorization.split(" ")[1];
  const payload = verify(accessToken, JWT_ACCESS_TOKEN_SECRET);
  if (!payload) {
    throw new Error("Unauthorized");
  }
  if (payload.type !== "accessToken") {
    throw new Error("Unauthorized");
  }
  User.findById(payload.userId).then((user) => {
    if (!user) {
      throw new Error("Unauthorized");
    }
  });
  req.body.userId=payload.userId
  req.params.userId=payload.userId
  next();
};

// exports.roleChecker = (roles) => (req, res, next) => {
//   console.log("============", roles);
// };

exports.roleChecker = (req, res, next) => {
  next();
};
