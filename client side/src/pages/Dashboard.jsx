import React, { use } from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ApiCard from '../components/ApiCard.jsx';
// import './Dashboard.css';
import { Route,Routes } from 'react-router-dom';
import AddApiModal from '../components/AddApiModal.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/main.css';

function Dashboard() {
  const [apis,setApis]=useState([]);
const [showAddApi,setShowAddApi]=useState(false);
const [name,setName]=useState('');
const [limit,setLimit]=useState('');
const [windowSize,setWindowSize]=useState('');
const [timeUnit, setTimeUnit] = useState("seconds");

const token=localStorage.getItem('token');

//fetching Apis
const fetchApis= async()=>{

  const res=await fetch('http://localhost:7000/api/apis',{
    headers:{
      'Authorization':`Bearer ${token}`,
    },
  });
 const data=await res.json();
 setApis(data);
};
  
useEffect(()=>{
  fetchApis();
},[]);

//simulating API use
const useApi=async(apiId)=>{
  const res=await fetch(`http://localhost:7000/api/apis/use/${apiId}`,{
    headers:{
      'Authorization':`Bearer ${token}`,  
}
  });

  if(res.ok){
    fetchApis();
  }
  else{
    const data=await res.json();
    alert(data.message || 'Error using API');
    return ;
  }
};
  //create new Api
const onSubmit=async (e)=>{
  e.preventDefault();
const convertToSeconds = (value, unit) => {
  if (unit === "minutes") return value * 60;
  if (unit === "hours") return value * 3600;
  return value;
};

const windowSizeInSeconds = convertToSeconds(
  Number(windowSize),
  timeUnit
);

  const res=await fetch('http://localhost:7000/api/apis',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${token}`,
    },
    
    body:JSON.stringify({
      name,
      limit:parseInt(limit),
      windowSize:windowSizeInSeconds,
    }),
  });

  if(res.ok){
    setShowAddApi(false);
    setName('');
    setLimit('');
    setWindowSize('');
    fetchApis();
  }
  else{
    const data=await res.json();
    alert(data.message || 'Error adding API');
  }
};

  return (
<div className="dashboard-page" data-testid="dashboard-page">
      <Header />
      
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h2 className="dashboard-title" data-testid="dashboard-title">API Dashboard</h2>
          <button 
            className="btn-add-api" 
            onClick={() => setShowAddApi(true)}
            data-testid="add-api-button"
          >
            Add API
          </button>
        </div>

        {showAddApi && (
          <AddApiModal
            name={name}
            limit={limit}
            windowSize={windowSize}
            timeUnit={timeUnit}
            setName={setName}
            setLimit={setLimit}
            setWindowSize={setWindowSize}
            setTimeUnit={setTimeUnit}
            onClose={() => setShowAddApi(false)}
            onSubmit={onSubmit}
          />
        )}

        <div className="api-cards-grid" data-testid="api-cards-grid">
          {apis.length === 0 && (
            <div className="empty-state" data-testid="empty-state">
              <div className="empty-state-icon">📊</div>
              <p className="empty-state-text">No APIs available. Click "Add API" to get started!</p>
            </div>
          )}

          {apis.map((api) => {
            return <ApiCard key={api._id} api={api} onUse={useApi} />;
          })}
        </div>
      </div>
      
      <Footer />
      </div>
  )
}   

export default Dashboard;