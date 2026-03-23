import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("listening", () => {
  console.log("WebSocket server is listening on port 8080");
});

wss.on("connection", (ws) => {
  console.log("connected");

  ws.on("message", (data) => {
    console.log("received: %s", data);

    if (data.toString() === "SIMULATE_ERROR") {
      ws.close(1000, "Simulated server error");
    }

    ws.send(JSON.stringify({ echo: data.toString() }));
  });

  ws.on("close", () => {
    console.log("closed");
  });
});
