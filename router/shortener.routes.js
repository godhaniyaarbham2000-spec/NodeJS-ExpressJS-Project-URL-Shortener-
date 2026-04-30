import { Router } from "express";
import {
  getShortenerPage,
  postURLShortner,
  redirectToShortLink,
} from "../controllers/postshortener.controller.js";

const router = Router();



router.get("/", getShortenerPage);

router.post("/", postURLShortner);

router.get("/:shortCode", redirectToShortLink);

//default export
export default router;

//name exports
//export const shortenedRoutes = router;
