import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import "../styles/main.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "http://localhost:7000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setMessage(data.message || "Login failed");
                return;
            }

            localStorage.setItem("token", data.token);
            setMessage("Login successful");
            navigate("/dashboard");
        } catch (error) {
            setMessage("An error occurred. Please try again.");
        }
    };

    return (
        <>
            <div className="auth-page" data-testid="login-page">
                <div className="auth-header">
                    <h1 data-testid="app-title">
                        API Rate Limit Monitor
                    </h1>
                </div>

                <div className="auth-container">
                    <div className="auth-card" data-testid="login-card">
                        <h2 data-testid="login-title">Login</h2>

                        <form
                            className="auth-form"
                            onSubmit={handleSubmit}
                            data-testid="login-form"
                        >
                            <div className="form-group">
                                <label
                                    className="form-label"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    className="form-input"
                                    type="email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label
                                    className="form-label"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    className="form-input"
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            <button
                                className="btn-primary"
                                type="submit"
                            >
                                Login
                            </button>
                        </form>

                        {message && (
                            <p
                                className={`auth-message ${
                                    message.includes("successful")
                                        ? "success"
                                        : "error"
                                }`}
                            >
                                {message}
                            </p>
                        )}

                        <div className="auth-redirect">
                            <span>Not registered?</span>
                            <button
                                className="btn-link"
                                type="button"
                                onClick={() =>
                                    navigate("/register")
                                }
                            >
                                Register here
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Login;
