const imageService = require("./image.service").imageService

const uploadImage = async (req, res, next) => {
    try {
        const result = await imageService.uploadImage(req.body);
        res.send({
            success: true,
            message: "Image uploaded",
            data: result
        })
    } catch (error) {
        res.send({
            success: false,
            message: "Failed to upload image",
            error
        })
    }

}

const getAllImage = async (req, res, next) => {
    try {
        const result = await imageService.getAllImage();
        res.send({
            success: true,
            message: "Images retrived",
            data: result
        })
    } catch (error) {
        res.send({
            success: false,
            message: "Failed to fetch images",
            error
        })
    }

}

const deleteImages = async (req, res, next) => {
    const arrayOfIds = req.body
    try {
        const result = await imageService.deleteImages(arrayOfIds);
        res.send({
            success: true,
            message: "Images deleted",
            data: result
        })
    } catch (error) {
        res.send({
            success: false,
            message: "Failed to delete images",
            error
        })
    }

}

exports.imageController = { uploadImage, getAllImage, deleteImages }