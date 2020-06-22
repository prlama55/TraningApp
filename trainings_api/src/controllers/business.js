const { Business } = require("../models");
exports.businessList = async (req, res) => {
    const list = await Business.find();
    res.status(200).send({
        data: list,
    });
};

exports.createBusiness = (req, res) => {
    console.log("req.body===", JSON.stringify(req.body))
    new Business(req.body)
        .save()
        .then((newBusiness) => {
            res.status(301).send({
                message: "Business saved successfully",
                data: newBusiness,
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

exports.businessDetails = async (req, res) => {
    const user = await Business.findById(req.params.id);
    res.status(200).send({
        data: user,
    });
};

exports.businessUpdate = async (req, res) => {
    let user = await Business.findById(req.params.id);
    if (user) {
        user = await Business.updateOne({ _id: req.params.id }, { $set: req.body });
    }
    res.send({
        data: user,
    });
};

exports.deleteBusiness = async (req, res) => {
    let user = await Business.findById(req.params.id);
    if (user) {
        console.log("req.body=====", req.body);
        user = await Business.findByIdAndRemove(req.params.id);
        // user = await User.remove({ _id: req.params.id });
    }
    res.send({
        data: user,
    });
};
