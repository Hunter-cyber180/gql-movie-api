// * ---- Models ----
const ActorModel = require("../../models/Actor");

// * ---- Utils ----
const { actorValidator } = require("../../utils/validators/actor.validate");
const { adminValidator } = require("../../utils/auth");


const actors = async () => await ActorModel.find({});

const actor = async ({ id: _id }) => await ActorModel.findOne({ _id });

const addActor = async (_, args, context) => {
    const { fullname, bio, DateOfBirth, PlaceOfBirth, ProfileImageURL } = args;
    await adminValidator(context.req);
    await actorValidator(context.req);
    return await ActorModel.create(
        { fullname, bio, DateOfBirth, PlaceOfBirth, ProfileImageURL }
    );
}

const editActor = async ({ id: _id }, args, context) => {
    const { fullname, bio, DateOfBirth, PlaceOfBirth, ProfileImageURL } = args;
    // TODO => check user role
    await actorValidator(context.req);
    return await ActorModel.findOneAndUpdate(
        { _id },
        { fullname, bio, DateOfBirth, PlaceOfBirth, ProfileImageURL }
    );
}

const deleteActor = async ({ id: _id }) => await ActorModel.findOneAndDelete({ _id });

module.exports = {
    actors,
    actor,
    addActor,
    editActor,
    deleteActor,
};
