const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const dotenv = require("dotenv");
const Routes = require("./src/routes");
const cors = require("cors");
const ConnectToMongo = require("./src/config/mongoConnection");
const { setupSocket } = require("./src/config/socketConnection");

dotenv.config();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));
app.use(express.json());
app.use("/api", Routes);
app.get('/', (req, res) => {
  res.send('Backend is working!');
});


setupSocket(server);

ConnectToMongo().then(() => {
  server.listen(process.env.PORT, '0.0.0.0', () => {
  console.log("✅ Server + Socket.IO running at port", process.env.PORT);
});
});
