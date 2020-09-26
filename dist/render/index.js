class Render {
  constructor() {
    this.$root = document.querySelector("#root");
  }
  set(node) {
    this.$root.appendChild(node);
  }
}

export const render = new Render();
