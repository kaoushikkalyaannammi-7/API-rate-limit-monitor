import ApiUsage from "../models/ApiUsage.js";

export const proxyController=async(req,res)=>{
try{
    const {apiId}=req.params;

    const api=await ApiUsage.findById(apiId);
    if(!api){
        return res.status(404).json({message:'API not found'});
    }
    console.log("API USER:", api.user.toString());
console.log("REQ USER:", req.user.id);

    if(api.user.toString()!==req.user.id){
        return res.status(403).json({message:'Unauthorized access to this API'});
    }

    const queryString=new URLSearchParams(req.query).toString();
    const targetUrl=`${api.baseUrl}`+(queryString?`?${queryString}`:'');

    const response=await fetch(targetUrl,{
        method:req.method,
    headers:{
        ...(api.headers||{}),
        "content-type":'application/json',
    },
    body:['GET','HEAD'].includes(req.method)?null:JSON.stringify(req.body),
    });
 const contentType=response.headers.get('content-type');
const data=contentType&&contentType.includes('application/json')?await response.json():await response.text();
res.status(response.status).set({'content-type':contentType}).send(data);
}
catch(error){
    console.error('Proxy Error:',error);
    res.status(500).json({message:'Internal Server Error'});    
}
};