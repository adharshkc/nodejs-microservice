import express from "express";
import cors from "cors";
import proxy from "express-http-proxy";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(`Received request for ${req.path}`);
    next();
  });

  app.use("/posts",proxy("http://localhost:3001") )
  app.use("/", proxy("http://localhost:3002"))
  


app.listen(port, () => {
  console.log("app is listening on port ", port);
});
