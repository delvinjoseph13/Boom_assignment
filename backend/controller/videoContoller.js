import videoModel from "../model/videoModule.js";

export const uploadVideo=async(req,res)=>{
     const {title}=req.body;
     const filename=req.file.filename;
     const video=await videoModel.create({
        title,
        filename,
        uploadedBy: req.user._id
     })
    await video.save();
    res.json()

}

export const getVideos=async(req,res)=>{
   const videos=await videoModel.find().populate('uploadedBy', 'email');
   res.json(videos)
}

export const likeVideos=async(req,res)=>{
   const video = await videoModel.findById(req.params.id);
  if (!video) return res.status(404).json({ error: 'Video not found' });
  video.likes++;
  await video.save();
  res.json({ likes: video.likes });
}