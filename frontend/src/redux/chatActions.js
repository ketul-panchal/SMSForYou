import { io } from "socket.io-client";

export const socket = io("http://localhost:5000");

export const loadMessages = () => (dispatch) => {
    socket.emit("getMessages");
    socket.on("previousMessages", (messages) => {
        dispatch({ type: "LOAD_MESSAGES", payload: messages });
    });

    socket.on("receiveMessage", (message) => {
        dispatch({ type: "NEW_MESSAGE", payload: message });
    });
};

export const sendMessage = (username, message) => () => {
    socket.emit("sendMessage", { username, message });
};
