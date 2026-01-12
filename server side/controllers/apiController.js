import ApiUsage from '../models/ApiUsage.js';

export const createApi=async(req,res)=>{
    try{
        const {name,limit,baseUrl,windowSize}=req.body;

        const api=await ApiUsage.create({
            user:req.user.id,
            name,
            limit,
            baseUrl,
            windowSize
        });

        res.status(201).json(api);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}