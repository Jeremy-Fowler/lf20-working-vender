import ValuesController from "./Controllers/ValuesController";

class App {
  valuesController = new ValuesController();
}

window["app"] = new App();
