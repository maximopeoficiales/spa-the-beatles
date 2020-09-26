import { router } from "./Router/index.js";
import { indexController } from "./routes/IndexController.js";

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", App);
function App() {
  router.initialize();
}

router.get("/", indexController.index);
router.get("songs", indexController.indexSongs);
router.get("songs/:id", indexController.indexSong);
router.get("albums", indexController.indexAlbums);
router.get("albums/:id", indexController.indexAlbum);
