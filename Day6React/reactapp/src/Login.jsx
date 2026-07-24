import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const loginHandler = () => {
        if (username === "admin" && password === "admin123") {
            localStorage.setItem("role", "Admin");

            navigate("/dashboard");
        } else if (username === "deepika" && password === "user123") {
            localStorage.setItem("role", "User");

            navigate("/dashboard");
        } else {
            alert("Invalid Credentials");
        }
    };

    return (
        <div>
            <h2>Login</h2>

            <input
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />






            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />






            <button onClick={loginHandler}>Login</button>
        </div>
    );
}

export default Login;

