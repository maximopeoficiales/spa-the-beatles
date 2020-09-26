import { router } from "./Router/index.js";
export function App() {
  router.initialize();
  

  // if (!hash || hash == base) {
  //   $root.appendChild(Title());
  // } else if (hash == `${base}songs`) {
  //   const $songs = d.createElement("section");
  //   $songs.classList = `container mx-auto  p-2 grid  grid-cols-1 md:grid-cols-3 gap-4`;
  //   let html = "";
  //   getFetch({
  //     url: api.SONGS,
  //     OnSuccess: (data) => {
  //       console.log(data);
  //       data.forEach((song) => (html += CardSongs(song)));
  //       $songs.innerHTML = html;
  //       $root.appendChild($songs);
  //     },
  //   });
  // } else if (hash == `${base}albums`) {
  //   const $albums = d.createElement("section");
  //   $albums.classList = `container mx-auto  p-2 grid  grid-cols-1 md:grid-cols-3 gap-4`;
  //   let html = "";
  //   getFetch({
  //     url: api.ALBUMS,
  //     OnSuccess: (albums) => {
  //       console.log(albums);
  //       albums.forEach((album) => (html += CardAlbums(album)));
  //       $albums.innerHTML = html;
  //       $root.appendChild($albums);
  //     },
  //   });
  // }
}
