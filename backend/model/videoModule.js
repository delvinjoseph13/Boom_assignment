import mongoose from "mongoose";

const videoSchema=mongoose.Schema({
    title:String,
    file:String,
    likes:{
        type:Number,
        default:0
    },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

const videoModel=mongoose.model("video",videoSchema);

export default videoModel;