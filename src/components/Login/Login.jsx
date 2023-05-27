import { useState } from 'react';
import './Login.css';
import { BsShieldLock } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email.includes('demo@coralmango.com') || password !== "demo123" ) {
            setLoginError('Invalid Credentials!');
            return;
        }
        navigate('./userInfo');
        localStorage.setItem('email', email);
    }

    return (
        <>
            <form className="login-form">
                <div className="login-logo">
                    <BsShieldLock style={{ fontSize: "2rem" }} />
                </div>
                <h2 className="user-heading">Login</h2>
                {/* <label htmlFor="">Username</label> */}
                <input
                    type="email"
                    placeholder="Username*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* <label htmlFor="">Password</label> */}
                <input
                    type="password"
                    placeholder="Password*"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" onClick={handleSubmit}>Login</button>
                {loginError && <div className='div-error'>{loginError}</div>}
            </form>
        </>
    )
}

export default Login
