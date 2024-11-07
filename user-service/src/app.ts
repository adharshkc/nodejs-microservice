import server from "./server/server";
import "dotenv/config";
import { appEvents } from "./controllers/app.events";

const port = process.env.PORT;
const app = server()



appEvents(app)

app.listen(port, () => {
  console.log("server started on " + port);
});

export default app