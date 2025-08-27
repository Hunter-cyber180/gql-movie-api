// * ---- Models ----
const ActorModel = require("../../models/Actor");

const actors = async () => await ActorModel.find({});

const actor = async ({ id: _id }) => await ActorModel.findOne({ _id });

module.exports = {
    actors,
    actor,
};
