var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from "lit-element";
let HelloWorld = class HelloWorld extends LitElement {
    constructor() {
        super();
        this.name = "World";
    }
    render() {
        return html `
      <h1 class="lead">Hello ${this.name}</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, consequuntur. Dignissimos rem labore corrupti ad quaerat quam atque, nemo sequi doloremque ducimus voluptas, vitae quisquam doloribus molestias itaque repellendus esse!</p>
    `;
    }
};
__decorate([
    property()
], HelloWorld.prototype, "name", void 0);
HelloWorld = __decorate([
    customElement('hello-world')
], HelloWorld);
export default HelloWorld;
