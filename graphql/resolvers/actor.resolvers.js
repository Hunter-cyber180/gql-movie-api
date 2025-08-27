// * ---- Models ----
const ActorModel = require("../../models/Actors");

const actors = async () => await ActorModel.find({});

module.exports = {
    actors,
};
