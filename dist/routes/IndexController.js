import { TitleBase } from "../components/TitleBase.js";
import { TitleCustom } from "../components/TitleCustom.js";
import { CardSongs } from "../components/CardSongs.js";
import { CardAlbums } from "../components/CardAlbums.js";
import { Spinner } from "../components/Spinner.js";
import { render } from "../render/index.js";
import api from "../helpers/api.js";
import { getFetch } from "../helpers/fetch.js";
let d = document;
class IndexController {
  index() {
    render.set(TitleBase());
  }
  indexSongs() {
    const $div = d.createElement("div");
    $div.classList = `container mx-auto  p-2`;
    $div.appendChild(TitleCustom("Songs - The Beatles"));
    $div.appendChild(Spinner());
    render.set($div);
    const $songs = d.createElement("section");
    $songs.classList = "grid  grid-cols-1 md:grid-cols-3 gap-4";
    let html = "";
    getFetch({
      url: api.SONGS,
      OnSuccess: (data) => {
        console.log(data);
        data.forEach((song) => (html += CardSongs(song)));
        $songs.innerHTML = html;
        $div.appendChild($songs);
        $div.querySelector("#spinner").remove();
      },
    });
  }
  indexAlbums() {
    const $div = d.createElement("div");
    $div.classList = `container mx-auto  p-2`;
    $div.appendChild(TitleCustom("Albums - The Beatles"));
    $div.appendChild(Spinner());
    render.set($div);
    const $albums = d.createElement("section");
    $albums.classList = "grid  grid-cols-1 md:grid-cols-3 gap-4";
    let html = "";
    getFetch({
      url: api.ALBUMS,
      OnSuccess: (data) => {
        console.log(data);
        data.forEach((album) => (html += CardAlbums(album)));
        $albums.innerHTML = html;
        $div.appendChild($albums);
        $div.querySelector("#spinner").remove();
      },
    });
  }
  indexSong(id) {
    // console.log(e);
    const $div = d.createElement("div");
    $div.classList = `container mx-auto p-2`;
    $div.appendChild(Spinner());
    render.set($div);
    const $songs = d.createElement("section");
    $songs.classList = "grid  grid-cols-1 gap-4";
    let html = "";
    getFetch({
      url: `${api.SONGS}/${id}`,
      OnSuccess: (data) => {
        $div.appendChild(TitleCustom(`Song: ${data.trackName}`));
        console.log(data);
        html += CardSongs(data);
        $songs.innerHTML = html;
        $div.appendChild($songs);
        $div.querySelector("#spinner").remove();
      },
    });
    // console.log(`song: `, e);
  }
  indexAlbum(id) {
    // console.log(`Album: `, e);
    const $div = d.createElement("div");
    $div.classList = `container mx-auto p-2`;
    $div.appendChild(Spinner());
    render.set($div);
    const $albums = d.createElement("section");
    $albums.classList = "grid  grid-cols-1 gap-4";
    let html = "";
    getFetch({
      url: `${api.ALBUMS}/${id}`,
      OnSuccess: (data) => {
        $div.appendChild(TitleCustom(`Album: ${data.albumName}`));
        console.log(data);
        html += CardAlbums(data);
        $albums.innerHTML = html;
        $div.appendChild($albums);
        $div.querySelector("#spinner").remove();
      },
    });
  }
}

export const indexController = new IndexController();
