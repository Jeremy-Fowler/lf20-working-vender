import { ProxyState } from "../AppState.js";

class ValuesService {
  buyItem(title) {
    throw new Error("What up to the fireside.");
  }
  addMoney(moneyAdded) {
    let change = ProxyState.money += moneyAdded
    ProxyState.money = change
  }
}

export const valuesService = new ValuesService();

