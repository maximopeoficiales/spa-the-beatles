class Router {
  constructor() {
    this.routes = [];
    this.hash = window.location.hash;
    this.currentRute = this.hash.substr(2);
  }
  initialize() {
    if (this.routes !== 0) {
      let page404 = true;
      this.routes.forEach((e) => {
        if (e.ruta === this.currentRute) e.callback(this.currentRute);
        page404 = false;
      });
      if (page404 && this.hash !== "") this.getPageError();
      else if (this.hash == "" || this.hash == "#/") {
        let index = this.routes.filter((e) => e.ruta == "/");
        if (index.length !== 0) index[0].callback(this.currentRute);
        else console.warn("No ha registrado ninguna ruta");
      }
    }
    //     console.log(this.hash);
  }
  getPageError() {
    console.log("Error 404 pagina no encontrada");
  }
  get(ruta, callback) {
    this.routes.push({ ruta, callback });
  
  }
}

export const router = new Router();
