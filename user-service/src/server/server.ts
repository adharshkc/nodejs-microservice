import express from "express";

import userRoutes from "../routes/user.routes";

const startServer = function () {
  const app = express();
  app.use(express.json());
  app.use("/api", userRoutes);
  const errorHandler = (err: any, req: any, res: any, next: any) => {
    if (
      err instanceof SyntaxError &&
      "status" in err &&
      err.status === 400 &&
      "body" in err
    ) {
      return res.status(400).json({ error: "Invalid JSON payload provided" });
    }
    next(err);
  };
  app.use(errorHandler);
  return app;
};

export default startServer;
