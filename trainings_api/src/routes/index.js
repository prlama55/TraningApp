const controllers = require("../controllers");
const { auth, roleChecker } = require("../middlewares");
// console.log("roleChecker====", roleChecker(["Business", "Customer"]));
module.exports = (app) => {
  // app.get("/", index);
  // router("/").get(auth, controllers.userDetails);
  app
    .get("/api/users", [auth, roleChecker], controllers.userList)
    .post("/api/users", auth, controllers.createUser);

  app
    .get("/api/users/:id", auth, controllers.userDetails)
    .put("/api/users/:id", auth, controllers.userUpdate)
    .delete("/api/users/:id", auth, controllers.deleteUser);

  // user login
  app.post("/api/login", controllers.login);
  app.post("/api/registration", controllers.createUser);
};
