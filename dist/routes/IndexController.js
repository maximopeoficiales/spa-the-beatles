import { Title } from "../components/Title.js";
import { render } from "../render/index.js";
import api from "../helpers/api.js";
import { getFetch } from "../helpers/fetch.js";
let d = document;
class IndexController {
  index() {
//     let $section = d.createElement("section");
    render.set(Title());
  }
  indexSongs() {}
}

export const indexController = new IndexController();
