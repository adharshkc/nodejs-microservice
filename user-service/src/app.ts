import server from "./server/server";
import "dotenv/config";

const port = process.env.PORT;
const app = server()





app.listen(port, () => {
  console.log("server started on " + port);
});

export default app