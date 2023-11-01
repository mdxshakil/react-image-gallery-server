const Image = require('./image.model'); // Image model

const uploadImage = async (data) => {
    const result = await Image.create(data);
    return result;
}

const getAllImage = async () => {
    const result = await Image.find().sort({ createdAt: "desc" });
    return result;
}

const deleteImages = async (ids) => {
    const result = await Image.deleteMany({
        _id: { $in: ids }
    })
    return result;
}

exports.imageService = { uploadImage, getAllImage, deleteImages }