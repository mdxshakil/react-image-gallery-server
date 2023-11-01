const mongoose = require("mongoose")
const { Schema } = mongoose;

const imageSchema = new Schema({
    imageSrc: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const Image = mongoose.model("Image", imageSchema)

module.exports = Image;