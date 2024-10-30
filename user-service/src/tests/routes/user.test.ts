import request from "supertest";
import createServer from "../../server/server";
const app = createServer();
import router from "../../routes/user.routes";

describe("api for /", () => {
  it("should send hello from micro service", async () => {
    return request(app)
      .get("/api/")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect({ message: "Hello from micro service" });
  });
  it("should send 404 if the end point doesn't exist", () => {
    return request(app).get("/api/non-existing api").expect(404);
  });
});

describe("api for login /login", () => {
  it("should login the user", () => {
    return request(app).post("/api/login").expect("Content-Type", /json/).expect(200)
  });
});
