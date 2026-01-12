import express from 'express';
import {protect} from '../middleware/authMiddleware.js';
import {createApi} from '../controllers/apiController.js';
import {rateTracker} from '../middleware/rateTracker.js';
import ApiUsage from '../models/ApiUsage.js';
import {proxyController} from '../controllers/proxyController.js'
const router=express.Router();

router.post('/',protect ,createApi);
router.all('/proxy/:apiId',protect,rateTracker ,proxyController);
router.get('/',protect,async(req,res)=>{
    try{ 
        const apis=await ApiUsage.find({user:req.user.id});
        res.status(200).json(apis);
    }
    catch(error){
        console.error('Fetch APIs Error:',error);
        res.status(500).json([]);
    }
})

export default router;