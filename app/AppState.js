import Item from "./Models/Item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

let pickleChips = new Item("pickle chips", 1.25)
let cheese = new Item("swiss cheese", 1.25)
let candy = new Item("cow tails", 2.00)
let drink = new Item("hot coffee" 2.00)

class AppState extends EventEmitter {
  /** @type {Item[]} */
  items = [pickleChips, cheese, candy, drink]
  itemsOwned = []
  money = 0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
