import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import "../styles/main.css";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:7000/api/auth/register",
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
                setMessage(data.message || "Registration failed");
                return;
            }

            navigate("/login");
        } catch (error) {
            setMessage("An error occurred");
        }
    }

    return (
        <>
            <div className="auth-page" data-testid="register-page">
                <div className="auth-header">
                    <h1 data-testid="app-title">API Rate Limit Monitor</h1>
                </div>

                <div className="auth-container">
                    <div className="auth-card" data-testid="register-card">
                        <h2 data-testid="register-title">Register</h2>

                        <form
                            className="auth-form"
                            onSubmit={handleSubmit}
                            data-testid="register-form"
                        >
                            <div className="form-group">
                                <input
                                    className="form-input"
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    className="form-input"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    className="form-input"
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    required
                                />
                            </div>

                            <button
                                className="btn-primary"
                                type="submit"
                            >
                                Register
                            </button>
                        </form>

                        {message && (
                            <p className="auth-message error">
                                {message}
                            </p>
                        )}

                        <div className="auth-redirect">
                            <span>Already have an account?</span>
                            <button
                                className="btn-link"
                                onClick={() => navigate("/login")}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Register;
