// * ---- Models ----
const ActorModel = require("../../models/Actor");

const actors = async () => await ActorModel.find({});

const actor = async ({ id: _id }) => await ActorModel.findOne({ _id });

const addActor = async (_, args, context) => {
    const { fullname, bio, DateOfBirth, PlaceOfBirth, ProfileImageURL } = args;
    // TODO => check user role
    return await ActorModel.create(
        { fullname, bio, DateOfBirth, PlaceOfBirth, ProfileImageURL }
    );
}

const editActor = async ({ id: _id }, args, context) => {
    const { fullname, bio, DateOfBirth, PlaceOfBirth, ProfileImageURL } = args;
    // TODO => check user role
    return await ActorModel.findOneAndUpdate(
        { _id },
        { fullname, bio, DateOfBirth, PlaceOfBirth, ProfileImageURL }
    );
}

module.exports = {
    actors,
    actor,
    addActor,
    editActor,
};
