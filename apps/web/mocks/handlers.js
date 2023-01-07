import { rest } from "msw";
export const handlers = [
  // Handles a POST /login request
  rest.post("/api/signup", (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        message: "Thanks for Registering!",
      })
    );
  }),
  // Handles a GET /user request
  rest.get("/user", null),
];
