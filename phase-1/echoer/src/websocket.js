const wsUri = "ws://localhost:8080";

const socket = new WebSocket(wsUri);

socket.addEventListener("open", () => {
  console.log("Client: connected");
});

socket.addEventListener("message", (event) => {
  console.log("Client received: ", event.data);
});

socket.addEventListener("close", () => {
  console.log("Client: closed");
});

socket.addEventListener("error", () => {
  console.log("Client: error");
});

const senBtn = document.querySelector("#ping");
senBtn.addEventListener("click", () => {
  socket.send("Ping");
});

const closeBtn = document.querySelector("#close");
closeBtn.addEventListener("click", () => {
  socket.close();
});

const errorBtn = document.querySelector("#error");
errorBtn.addEventListener("click", () => {
  socket.send("SIMULATE_ERROR");
});