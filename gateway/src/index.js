const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(`Received request for ${req.path}`);
    next();
  });
  

app.use("/products", proxy("http://localhost:3001/"));
app.use("/", proxy("http://localhost:3002", {
    proxyErrorHandler: (err, res, next) => {
      console.error("Proxy error:", err);
      res.status(500).send("Proxy failed");
    }
  }));
app.listen(port, () => {
  console.log("app is listening on port ", port);
});
