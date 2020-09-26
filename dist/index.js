import { App } from "./App.js";
import { router } from "./Router/index.js";
import { indexController } from "./routes/IndexController.js";

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", App);

router.get("/", indexController.index);
router.get("songs", indexController.indexSongs);
