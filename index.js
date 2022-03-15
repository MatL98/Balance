const express = require("express")

const routerProcess = require("./routes/info");
const routerRandom = require("./routes/random");
const routerHome = require("./routes/home");

const app = express();

app.use(express.static(__dirname + '/public'));

app.use("/", routerHome)
app.use("/api/info", routerProcess)
app.use("/api/random", routerRandom)

const PORT = process.argv[2] || 8080;

//const server = http.createServer(app);

app.listen(PORT, () => {
	console.log("info", `server is running on port ${PORT}`)})


/* if (process.argv[2] === "FORK") {
  for (let i = 0; i < CPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (work, code, signal) => {
    console.log(`Process ${process.pid} died`);
    cluster.fork();
  });
} else {
  server.listen(PORT, () => {
    logger.log("info", `server is running on port ${PORT}`);
  });
} */
