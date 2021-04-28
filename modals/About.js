import mongoose from 'mongoose'

const AboutSchema = new mongoose.Schema({
    profile_image : {
        type: String,
        required: [true , 'Please upload a profile image'],
    },
    position : {
        type: String,
        require: true,
    },
    description : {
        type: String,
        required: true,
    },
    name : {
        type: String,
        required: true,
    }
})

export default mongoose.models.About ||  mongoose.model('About' , AboutSchema);