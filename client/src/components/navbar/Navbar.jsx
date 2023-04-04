import "./navbar.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });
    const { user } = useContext(AuthContext);
    const { loading, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
            navigate("/");
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };
    const handleLogout = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
    };
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <span className="logo">AtlasAcademy</span>
                </Link>
                {user ? (
                    <div className="navItems">
                        {user.username}
                        <button className="navButton" onClick={handleLogout}>
                            Выйти
                        </button>
                    </div>
                ) : (
                    <div className="navItems">
                        <button className="navButton">Авторизоваться</button>
                        <button className="navButton" onClick={handleLogin}>
                            Войти
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
