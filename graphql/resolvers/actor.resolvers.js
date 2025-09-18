// * ---- Models ----
const ActorModel = require("../../models/Actor");

// * ---- Utils ----
const { actorValidator } = require("../../utils/validators/actor.validate");
const { adminValidator } = require("../../utils/auth");


const actors = async () => {
    try {
        const actors = await ActorModel.find({});
        return actors;
    } catch (error) {
        throw new Error(`Error fetching actors: ${error.message}`);
    }
}

const actor = async ({ id: _id }) => {
    try {
        const actor = await ActorModel.findOne({ _id });
        if (!actor)
            throw new Error("Actor not found!");

        return actor;
    } catch (error) {
        throw new Error(`Error fetching actor: ${error.message}`);
    }
}

const addActor = async (_, { input }, context) => {
    try {
        const { fullname, bio, DateOfBirth, PlaceOfBirth, ProfileImageURL } = input;
        await adminValidator(context.req);

        const validateError = actorValidator(input)[0]?.message;
        if (validateError) throw new Error(validateError);

        const newActor = new ActorModel(
            { fullname, bio, DateOfBirth, PlaceOfBirth, ProfileImageURL }
        );

        return await newActor.save();
    } catch (error) {
        throw new Error(`Error creating article: ${error.message}`);
    }
}

const editActor = async ({ id: _id }, { input }, context) => {
    try {
        const { fullname, bio, DateOfBirth, PlaceOfBirth, ProfileImageURL } = input;
        await adminValidator(context.req);

        const validateError = actorValidator(input)[0]?.message;
        if (validateError) throw new Error(validateError);

        return await ActorModel.findOneAndUpdate(
            { _id },
            { fullname, bio, DateOfBirth, PlaceOfBirth, ProfileImageURL }
        );
    } catch (error) {
        throw new Error(`Error updating actor: ${error.message}`);
    }
}

const deleteActor = async ({ id: _id }) => {
    try {
        await adminValidator(context.req);
        const actor = await ActorModel.findOneAndDelete({ _id });
        if (!actor)
            throw new Error("Actor not found!");

        return { message: "Actor deleted successfully" };
    } catch (error) {
        throw new Error(`Error deleting actor: ${error.message}`);
    }
}

module.exports = {
    actors,
    actor,
    addActor,
    editActor,
    deleteActor,
};
