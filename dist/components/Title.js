import api from "../helpers/api.js";
export function Title() {
  const $h1 = document.createElement("h1");
  $h1.classList = "text-center font-bold text-3xl";
  $h1.innerHTML = `
    <a href="${api.DOMAIN}" target="_blank">
      ${api.NAME.toUpperCase()}
    </a>
  `;
  return $h1;
}
