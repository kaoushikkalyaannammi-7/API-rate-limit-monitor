import ApiUsage from "../models/ApiUsage.js";

export const rateTracker=async(req,res,next)=>{
    try{
        const {apiId}=req.params;

        const api=await ApiUsage.findById(apiId);
        if(!api){
            return res.status(404).json({message:'API not found'});
        }
        const currentTime=Date.now();
        const elapsedTime=(currentTime-api.windowStart.getTime())/1000; //in seconds
        
        //check if window has expired
        if(elapsedTime>api.windowSize){
//reset window
            api.windowStart=currentTime;
            api.used=0;
        }

        //check if limit exceeded
        if(api.used>=api.limit){
            return res.status(429).json({message:'Rate limit exceeded. Try again later.',retryAfter:api.windowSize-elapsedTime}); 

        }
        //increment request count
        api.used++;
        await api.save();
        next();
    }
catch(error){
    res.status(500).json({message:error.message});
}
}