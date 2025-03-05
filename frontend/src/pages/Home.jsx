import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // ✅ Import the new CSS file

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Welcome to <span>ChatApp</span></h1>
                <p>Connect with friends and chat in real-time using WebSockets.</p>
                <Link to="/chat">
                    <button className="chat-button">🚀 Start Chatting</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
