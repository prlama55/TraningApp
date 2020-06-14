const { User } = require("../models");
const bcrypt = require("bcrypt");
const { sign, verify } = require("jsonwebtoken");
const {
  ACCESS_TOKEN_EXP,
  JWT_ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN,
  JWT_REFRESH_TOKEN_SECRET,
} = require("../config");
exports.userList = async (req, res) => {
  const list = await User.find();
  res.status(200).send({
    data: list,
  });
};

exports.createUser = (req, res) => {
  // new User(req.body).save((error, newUser) => {
  //   if (error) throw new Error("Unable to save user");
  //   res.status(301).send({
  //     message: "User saved successfully",
  //     data: newUser,
  //   });
  // });
  console.log("req.body====", req.body);
  new User(req.body)
    .save()
    .then((newUser) => {
      res.status(301).send({
        message: "User saved successfully",
        data: newUser,
      });
    })
    .catch((error) => {
      console.log("error===", error);
      res.status(500).send({
        data: null,
        error: error.message,
      });
    });
};

exports.userDetails = async (req, res) => {
  const user = await User.findById(req.params.id);
  // const user1 = await User.findOne({ _id: req.params.id });
  res.status(200).send({
    data: user,
  });
};

exports.userUpdate = async (req, res) => {
  let user = await User.findById(req.params.id);
  if (user) {
    console.log("req.body=====", req.body);
    // user = await User.findOneAndUpdate(req.params.id, req.body);
    user = await User.updateOne({ _id: req.params.id }, { $set: req.body });
  }
  res.send({
    data: user,
  });
};

exports.deleteUser = async (req, res) => {
  let user = await User.findById(req.params.id);
  if (user) {
    console.log("req.body=====", req.body);
    user = await User.findByIdAndRemove(req.params.id);
    // user = await User.remove({ _id: req.params.id });
  }
  res.send({
    data: user,
  });
};

exports.login = async (req, res) => {
  console.log("=========", req.body);
  const user = await User.findOne({ username: req.body.username });
  // console.log("user.password====", user.password);

  if (user) {
    let token;
    let refreshToken;
    bcrypt.compare(req.body.password, user.password, (err, matched) => {
      if (err) throw new Error("Password not matched");
      console.log("password matched===", matched);
      if (matched) {
        token = sign(
          { userId: user.id, type: "accessToken" },
          JWT_ACCESS_TOKEN_SECRET,
          {
            expiresIn: ACCESS_TOKEN_EXP,
          }
        );
        refreshToken = sign(
          { userId: user.id, type: "refreshToken" },
          JWT_REFRESH_TOKEN_SECRET,
          {
            expiresIn: REFRESH_TOKEN,
          }
        );
        console.log("token===========", token);
        //res.rend("Login");
      }
      res.status(200).send({
        accessToken: token,
        username: user.username,
        expiresIn: ACCESS_TOKEN_EXP,
        refreshToken: refreshToken,
        userType: user.userType ? user.userType : "",
      });
    });
  } else {
    // throw new Error("Unauthorized");
    res.status(401).send({
      status: 401,
      data: null,
      message: "Unauthorized",
    });
  }
};
