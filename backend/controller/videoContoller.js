import videoModel from "../model/videoModule.js";

import fs from 'fs/promises';
import path from 'path';

export const uploadVideo = async (req, res) => {
  try {
    const { title } = req.body;
    const filename = req.file.filename;

    const video = await videoModel.create({
      title,
      filename,
      uploadedBy: req.user.id,
    });
    await video.save();

    res.json({ message: "Video uploaded successfully", video });
  } catch (error) {
    // Delete uploaded file on error to avoid orphan files
    if (req.file && req.file.path) {
      await fs.unlink(req.file.path).catch(() => {
        console.error("Failed to delete file:", req.file.path);
      });
    }
    res.status(500).json({ error: error.message });
  }
};

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