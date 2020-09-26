export function TitleCustom(title) {
  const $header = document.createElement("header");
  $header.classList = "text-center text-white font-bold text-3xl my-4";
  $header.innerHTML = `
    <h1>${title}</h1>
  `;
  return $header;
}
