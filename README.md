# API Rate Limit Monitor

API Rate Limit Monitor is a full-stack web application that allows users to create, monitor, and securely proxy API endpoints with enforced rate limits.  
All requests are routed through a backend proxy that automatically tracks usage and blocks excessive requests.

---

## 🚀 Features

- User authentication (Register & Login)
- Create APIs with custom rate limits and time windows
- Secure API proxy endpoint
- Automatic rate limiting and request tracking
- Real-time dashboard displaying API usage
- Supports proxying any public REST API

---

## 🛠 Tech Stack

### Frontend
- React
- CSS
- Fetch API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## ⚙️ How to Run the Project

### Step 1: Clone the Repository

```bash
git clone https://github.com/kaoushikkalyaannammi-7/API-rate-limit-monitor.git
cd API-rate-limit-monitor
```
### Step 2: Run Backend
```
cd server side
npm install
```

### Create a .env file inside the server side folder and add:
```
PORT=7000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Start the backend server:
```
npm start
```

### Backend runs on:
```
http://localhost:7000
```
### Step 3: Run Frontend

Open a new terminal window:
```
cd client side
npm install
npm start
```

### Frontend runs on:
```
http://localhost:3000
```
🧪 How to Use

Register a user account

Login

Click Add API

Enter API details (Base URL, rate limit, time window)

Click Use API to test

Monitor usage on the dashboard

🔗 Proxy Endpoint

Each API creates a proxy endpoint:
```
http://localhost:7000/api/apis/proxy/{apiId}
```

Example:
```
curl http://localhost:7000/api/apis/proxy/64fxxxxxxxx
```
⚠️ Notes

Use valid public APIs as base URLs

Avoid deprecated APIs (for example cat-fact.herokuapp.com)

Rate limits reset automatically after the time window

Backend must be running before frontend

👤 Author

Kaoushik Kalyaan Nammi
