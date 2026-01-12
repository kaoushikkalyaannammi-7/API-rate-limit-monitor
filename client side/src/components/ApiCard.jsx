import { useState } from "react";
import ProgressBar from "./ProgressBar.jsx";
import '../styles/main.css';

function ApiCard({api,onUse}){
    const proxyUrl=`https://localhost:7000/api/apis/proxy/${api._id}`;
    function handleUse(){
        onUse(api._id);
    }
    return(
       <div className="api-card" data-testid={`api-card-${api._id}`}>
            <div className="api-card-header">
                <h3 className="api-card-title" data-testid="api-card-name">{api.name}</h3>
            </div>
            
            <div className="api-card-info">
                <div className="api-usage" data-testid="api-usage">
                    <span>Usage:</span>
                    <span className="api-usage-value">
                        {api.used}/{api.limit}
                    </span>
                </div>
                
                <div className="api-limit-info" data-testid="api-limit-info">
                    📊 {api.limit} requests per {api.windowSize} seconds
                </div>
            </div>
            
            <ProgressBar used={api.used} limit={api.limit} />
            <div className="api-card-info">
            <div className="api-proxy-url" data-testid="api-proxy-url">
              <p><strong>Proxy Endpoint:</strong></p>
             
              <code className="proxy-url">{proxyUrl}</code>
             
              <button className="copy-btn" onClick={()=>{
                navigator.clipboard.writeText(proxyUrl);
                alert("proxy endpoint copied successfully!!!!")
              }}>Copy Endpoint</button>

          <p className="proxy-instructions">
    Use this endpoint to make requests through the proxy in postman,curl,your backend.
    All requests are rate limited automatically.
    </p>
            </div>
            </div>
            <div className="api-card-actions">
                <button 
                    className="btn-use-api" 
                    onClick={handleUse}
                    data-testid="use-api-button"
                >
                    Use API
                </button>
            </div>
        </div>
    );

}

export default ApiCard;