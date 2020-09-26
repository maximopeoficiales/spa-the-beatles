export function Spinner() {
  let $spinner = document.createElement("section");
  $spinner.id = "spinner";
  $spinner.classList = "my-2 p-4 flex flex-col items-center justify-center";
  $spinner.innerHTML = `
  <h6 class="p-2 my-4  text-4xl text-center text-white font-semibold">Cargando...</h6>
<div class="sk-chase">
     <div class="sk-chase-dot"></div>
     <div class="sk-chase-dot"></div>
     <div class="sk-chase-dot"></div>
     <div class="sk-chase-dot"></div>
     <div class="sk-chase-dot"></div>
     <div class="sk-chase-dot"></div>
</div>
  `;
  return $spinner;
}
