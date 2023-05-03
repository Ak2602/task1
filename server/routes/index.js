import express from "express";
import { auth } from "../controllers/auth.js";
import { count } from "../controllers/count.js";

const indexRouter = express.Router();

indexRouter.get("/", function (req, res) {
  //   res.send("Welcome");
  res.status(200).json("Welcome!! to the demo");
});

indexRouter.post("/login", auth);

indexRouter.post("/countApi", count);

export default indexRouter;
