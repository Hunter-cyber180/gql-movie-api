// * ---- Models ----
const ActorModel = require("../../models/Actor");

const actors = async () => await ActorModel.find({});

module.exports = {
    actors,
};
