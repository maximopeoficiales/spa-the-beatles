class Router {
  constructor() {
    this.routes = [];
    this.hash = window.location.hash;
    this.currentRute = this.hash.substr(2);
  }
  initialize() {
    // console.log(this.hash);
    if (this.routes.length !== 0) {
      let PageERROR = true;
      this.routes.forEach((e) => {
        if (e.ruta === this.currentRute) {
          e.callback(this.currentRute);
          PageERROR = false;
        } else if (
          e.ruta.indexOf(":") !== -1 &&
          this.currentRute.indexOf("/") !== -1
        ) {
          let absolutaRoute = this.currentRute.substring(
            0,
            this.currentRute.indexOf("/") + 1
          );
          let rutaRegister = e.ruta.substring(0, e.ruta.indexOf(":"));
          rutaRegister =
            rutaRegister.slice(0, rutaRegister.indexOf("/") - 1) + "/";
          // console.log(absolutaRoute, rutaRegister);
          if (absolutaRoute == rutaRegister) {
            let id = this.currentRute.substring(
              this.currentRute.indexOf("/") + 1,
              this.currentRute.length
            );
            PageERROR = false;
            e.callback(id);
          }
        }
      });
      if (PageERROR && this.hash !== "" && this.hash !== "#/")
        this.getPageError();
      if (this.hash == "" || this.hash == "#/") {
        let index = this.routes.filter((e) => e.ruta == "/");
        if (index.length !== 0) index[0].callback(this.currentRute);
      }
    } else {
      console.warn("No ha registrado ninguna ruta");
    }
  }
  getPageError() {
    console.log("Error 404 pagina no encontrada");
  }
  get(ruta, callback) {
    this.routes.push({ ruta, callback });
  }
}

export const router = new Router();
