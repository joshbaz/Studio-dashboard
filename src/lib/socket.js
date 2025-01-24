import {io } from "socket.io-client";

// Configure the socket connection
const socket = io('ws://localhost:4500', {
    autoConnect: false, // Prevent auto-connection; connect explicitly when needed
  });
  
  export default socket;