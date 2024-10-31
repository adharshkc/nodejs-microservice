import request from "supertest";
import createServer from "../../server/server";
const app = createServer();
import router from "../../routes/user.routes";
import { z } from "zod";

const loginUserSchema = z.object({
  body: z.object({
    email: z.string().email(),
  }),
});
describe("api for '/'", () => {
  describe("given the / ", () => {
    it("should send hello from micro service", async () => {
      return request(app)
        .get("/api/")
        .expect("Content-Type", /json/)
        .expect(200)
        .expect({ message: "Hello from micro service" });
    });
  });
  describe("given the non existing api end point", () => {
    it("should send 404 if the end point doesn't exist", () => {
      return request(app).get("/api/non-existing api").expect(404);
    });
  });
});

describe("api for login '/login'", () => {
  describe("given the login details", () => {
    const email = { email: "adharshkc@gmail.com" };
    it("should login the user with valid credentials", async () => {
      const response = await request(app)
        .post("/api/login")
        .send(email)
        .expect("Content-Type", /json/);
      expect(response.status).not.toBe(400);
    });

    it("should fail login with invalid email", async () => {
      const invalidEmail = { email: "notavalidemail" };
      const response = await request(app)
        .post("/api/login")
        .send(invalidEmail)
        .expect("Content-Type", /json/)
        .expect(400);
    });

    it("should fail missing email", async () => {
      const emptyEmail = { email: "" };
      const response = await request(app)
        .post("/api/login")
        .send(emptyEmail)
        .expect("Content-Type", /json/)
        .expect(400);
    });
  });
});

describe("api for register '/register'", () => {
  describe("given the user details", () => {
    const userDetails = {
      name: "adharsh",
      email: "adharshkc@gmail.com",
    };
    it("should register user with valid credentials", async () => {
      const response = await request(app)
        .post("/api/register")
        .send(userDetails)
        .expect("Content-Type", /json/);

      expect(response.status).not.toBe(400);
    });
    it("should not register with invalid name", async () => {
      const newUser = Object.assign({}, userDetails, { name: "" });
      const response = await request(app)
        .post("/api/register")
        .send(newUser)
        .expect("Content-Type", /json/)
        .expect(400);
    });

    it("should fail missing email", async () => {
      const newUser = Object.assign({}, userDetails, { email: "" });
      const response = await request(app)
        .post("/api/login")
        .send(newUser)
        .expect("Content-Type", /json/)
        .expect(400);
    });
  });
});

// describe("api for getting a user '/user/:id' ", () => {
//   describe("given the user id ", () => {
//     it("should return existing user with user id", async () => {
//       const userId = "671d16dbdbc90619fc420372";
//       const response = await request(app)
//         .get(`/users/${userId}`)
//         .expect("Content-Type", /json/);
//       expect(response.status).toBe(200);
//       expect(response.body).toHaveProperty("id", userId);
//     });

//     it("should return 404 if the id is invalid user ", async () => {
//       const userId = "671d16dbdbc90619fc42037";
//       const response =  request(app)
//         .get(`/users/${userId}`)
//         .expect("Content-Type", /json/)
//         expect((await response).status).toBe(404);
//     });
//   });
//   describe("given the missing user id", () => {
//     it("should return 400 if there is missing parameter",  () => {
//       const userId = "";
//       const response =  request(app)
//         .get(`/users/`)
//         .expect("Content-Type", /json/)
//         .expect(400);
//     });
//   });
// });
