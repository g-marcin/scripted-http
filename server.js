const express = require("express");
const path = require("path");

// app.get("/", (req, res) => {
//   res.status(200).send("Hello, this is the homepage!\n");
// });

// app.use((req, res) => {
//   res.status(404).send("404 Not Found\n");
// });
const port_exchange = 3000;
const app_exchange = express();
app_exchange.get("/about", (req, res) => {
  res.status(200).send("Hello, this is the about page! 1\n");
});

// app_exchange.use("/dist2", express.static("dist2"));
// app.get("/dist2/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist2", "index.html"));
// });
app_exchange.use(express.static("dist1"));
// app.get("/exchange", (req, res) => {
//   res.sendFile("dist1/index.html");
// });
// app.get("/dist1/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist1", "index.html"));
// });
app_exchange.listen(port_exchange, () => {
  console.log(`Server running at http://localhost:${port_exchange}/`);
});

// const port_woof = 3001;
// const app_woof = express();
// // app_woof.use(express.static("./build/woof-app/dist"));
// app_woof.listen(port_woof, () => {
//   console.log(`Server running at http://localhost:${port_woof}/`);
// });
// app_woof.get("/", (req, res) => {
//   res.status(200).send("Hello, this is the TEST page! 1\n");
// });
// app_woof.get("/about", (req, res) => {
//   res.status(200).send("Hello, this is the about page! 1\n");
// });
// app_woof.get("/second/second", (req, res) => {
//   res.status(200).send("Hello, this is the about page! 1\n");
// });
