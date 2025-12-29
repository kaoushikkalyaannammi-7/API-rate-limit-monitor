import express from 'express';
import {protect} from '../middleware/authMiddleware.js';
import {createApi} from '../controllers/apiController.js';
import {rateTracker} from '../middleware/rateTracker.js';
import ApiUsage from '../models/ApiUsage.js';
const router=express.Router();

router.post('/',protect ,createApi);
router.get('/use/:apiId',protect,rateTracker ,(req,res)=>{
    res.status(200).json({message:'API accessed successfully'});
});
router.get('/',protect,async(req,res)=>{
    try{ 
        const apis=await ApiUsage.find({user:req.user});
        res.status(200).json(apis);
    }
    catch(error){
        res.status(500).json({message:'Server error'});
    }
})

export default router;