import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

/*
CLIENT STATE DESCRIPTIONS (client.readyState):
0 : connecting
1 : open (The only state that allows data to be sent and received)
2 : closing
3 : closed
*/

// Listen for connection events

wss.on("connection", (socket, request) => {
  const clientIP = request.socket.remoteAddress;

  socket.on("message", (rawData) => {
    console.log({ rawData });
  });

  wss.clients.forEach((client) => {
    const message = rawData.toString();
    if (client.readyState === WebSocket.OPEN /* client.readyState === 1 */) {
      client.send(`Hello and here is your message: ${message}`);
    }
  });

  socket.on("error", (error) => {
    console.error(`WebSocket error from ${clientIP}:`, error.message);
  });

  socket.on("close", () => {
    console.log(`WebSocket connection closed for client ${clientIP}`);
  });
});

console.log("WebSocket server is running on ws://localhost:8080");
