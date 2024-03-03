const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   res.status(200).send("Hello, this is the homepage!\n");
// });

app.use(express.static("dist"));
app.get("/about", (req, res) => {
  res.status(200).send("Hello, this is the about page! 1\n");
});

// app.use((req, res) => {
//   res.status(404).send("404 Not Found\n");
// });

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
