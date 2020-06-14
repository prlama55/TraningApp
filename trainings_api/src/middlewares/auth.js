const { verify } = require("jsonwebtoken");
const { JWT_ACCESS_TOKEN_SECRET } = require("../config");
const { User } = require("../models");
exports.auth = (req, res, next) => {
  const authorization = req.headers.authorization;
  console.log("===========", req.path);
  if (!authorization) {
    throw new Error("Unathorized");
  }
  const accessToken = authorization.split(" ")[1];
  console.log("accessToken==========", accessToken);
  const payload = verify(accessToken, JWT_ACCESS_TOKEN_SECRET);
  console.log("payload=====", payload);
  if (!payload) {
    throw new Error("Unathorized");
  }
  if (payload.type !== "accessToken") {
    throw new Error("Unathorized");
  }
  User.findById(payload.userId).then((user) => {
    if (!user) {
      throw new Error("Unathorized");
    }
  });

  next();
};

// exports.roleChecker = (roles) => (req, res, next) => {
//   console.log("============", roles);
// };

exports.roleChecker = (req, res, next) => {
  console.log("Role checker====");
  next();
};
