import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.json({
    message: "Hello World!",
  });
});

export { router };
