/* const app = require("express")();
const http = require("http").createServer(app);

const PORT = 8080;
const io = require("socket.io")(http);

const STATIC_CHANNELS = ["global_notifications", "global_chat"];

http.listen(PORT, () => {
  //console.log(`listening on *:${PORT}`);
});

io.on("connection", (socket) => {
  //console.log("new client connected");
  socket.emit("connection", null);
});
 */
