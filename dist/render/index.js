class Render {
  constructor() {
    this.$root = document.querySelector("#root");
  }
  set(node) {
    this.$root.innerHTML = "";
    this.$root.appendChild(node);
  }
}

export const render = new Render();
