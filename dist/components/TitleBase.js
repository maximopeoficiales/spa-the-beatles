import api from "../helpers/api.js";
export function TitleBase() {
  const $header = document.createElement("header");
  let classLIST = `text-center text-white  px-2 py-2 my-4  rounded-lg bg-indigo-700 text-white font-semibold`;
  $header.classList = "text-center font-bold text-3xl text-white";
  $header.innerHTML = `
    <a href="${api.DOMAIN}" target="_blank">
      ${api.NAME.toUpperCase()}
    </a>

    <p class="my-4"><a href="./index.html#/songs" class="${classLIST}">Show Songs</a></p>
    <p class="my-4"><a href="./index.html#/albums" class="${classLIST}">Show Albums</a></p>
  `;
  return $header;
}
