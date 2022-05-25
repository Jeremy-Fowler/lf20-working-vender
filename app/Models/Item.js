export default class Item {
    constructor(title, price) {
        this.title = title
        this.price = price
        this.count = 5
    }

    get Template() {

        return /*html*/`
        <div class="col-3 p-2">
          <button class="btn btn-outline-dark text-dark" onclick="app.valueController.buyItem('${this.title}')">  ${this.title + " " + this.price}</button>
        `
    }
}
