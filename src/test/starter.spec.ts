import * as dotenv from "dotenv";
dotenv.config();

import { expect } from "chai";
import request from "supertest";
import app from "../app";

describe("typescript-express starter", () => {
  const req = request(app);

  describe("public/test.txt", () => {
    it("GET /text.txt status code should be 200", async () => {
      await req.get("/test.txt").expect(200);
    });

    it('GET /text.txt should return "STATIC_FILE_TEST"', async () => {
      const result = await req.get("/test.txt");
      expect(result.text).equals("STATIC_FILE_TEST");
    });
  });

  describe("veiws/index.ejs", () => {
    it("GET / status code should be 200", async () => {
      await req.get("/").expect(200);
    });

    it('GET / should return "Index Page"', async () => {
      const result = await req.get("/");
      expect(result.text).equals("Index Page");
    });
  });

  describe("POST /echo", () => {
    it('POST /echo should return "echo~!"', async () => {
      const result = await req
        .post("/echo")
        .set("Content-Type", "application/json")
        .send({
          message: "echo~!"
        });
      expect(result.text).equals("echo~!");
    });
  });
});
