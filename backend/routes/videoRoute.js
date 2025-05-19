import express from 'express';
import upload from '../middleware/upload.js';
import { getVideos, likeVideos, uploadVideo } from '../controller/videoContoller.js';
import { authorization } from '../middleware/authorization.js';

const videoRouter=express.Router();


videoRouter.post('/upload',authorization,upload.single('video'),uploadVideo);
videoRouter.get('/videos',getVideos);
videoRouter.put('/like/:id',likeVideos);

export default videoRouter;