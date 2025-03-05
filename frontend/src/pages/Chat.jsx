// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loadMessages, sendMessage } from "../redux/chatActions";

// const Chat = () => {
//     const dispatch = useDispatch();
//     const messages = useSelector((state) => state.messages);
//     const [username, setUsername] = useState("");
//     const [message, setMessage] = useState("");

//     useEffect(() => {
//         dispatch(loadMessages());
//     }, [dispatch]);

//     const handleSend = () => {
//         if (message.trim()) {
//             dispatch(sendMessage(username || "Guest", message));
//             setMessage("");
//         }
//     };

//     return (
//         <div style={{ padding: 20 }}>
//             <h2>Chat Room</h2>
//             <input
//                 type="text"
//                 placeholder="Enter your name"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 style={{ display: "block", marginBottom: 10 }}
//             />
//             <div style={{ height: 300, overflowY: "scroll", border: "1px solid #ccc", padding: 10 }}>
//                 {messages.map((msg, index) => (
//                     <p key={index}>
//                         <strong>{msg.username}:</strong> {msg.message}
//                     </p>
//                 ))}
//             </div>
//             <input
//                 type="text"
//                 placeholder="Type a message"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 style={{ display: "block", marginTop: 10 }}
//             />
//             <button onClick={handleSend} style={{ marginTop: 10 }}>Send</button>
//         </div>
//     );
// };

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMessages, sendMessage } from "../redux/chatActions";
import "../styles/Chat.css"; // ✅ Import the CSS file

const Chat = () => {
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.messages);
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        dispatch(loadMessages());
    }, [dispatch]);

    const handleSend = () => {
        if (message.trim()) {
            dispatch(sendMessage(username || "Guest", message));
            setMessage("");
        }
    };

    return (
        <div className="chat-container">
            <h2 className="chat-title">💬 Chat Room</h2>

            {/* Username Input */}
            <input
                type="text"
                placeholder="Enter your name..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="chat-input username-input"
            />

            {/* Chat Messages */}
            <div className="chat-box">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.username === username ? "self" : "other"}`}>
                        <strong className="message-user">{msg.username}</strong>
                        <span className="message-text">{msg.message}</span>
                    </div>
                ))}
            </div>

            {/* Chat Input & Send Button */}
            <div className="chat-footer">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="chat-input message-input"
                />
                <button onClick={handleSend} className="send-button">Send</button>
            </div>
        </div>
    );
};

export default Chat;
