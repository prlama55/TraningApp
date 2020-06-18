const controllers = require("../controllers");
const { auth, roleChecker } = require("../middlewares");
module.exports = (app) => {
    // app.get("/", index);
    // router("/").get(auth, controllers.userDetails);
    app
        .get("/api/business", [auth, roleChecker], controllers.businessList)
        .post("/api/business", auth, controllers.createBusiness);

    app
        .get("/api/business/:id", auth, controllers.businessDetails)
        .put("/api/business/:id", auth, controllers.businessUpdate)
        .delete("/api/business/:id", auth, controllers.deleteBusiness);
};
