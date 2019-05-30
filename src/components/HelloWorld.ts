import { LitElement, html, customElement, property } from "lit-element";

@customElement('hello-world')
export default class HelloWorld extends LitElement {
  constructor() {
    super()
  }

  @property()
  name: string = "World";
  
  render() {
    return html`
      <h1 class="lead">Hello ${this.name}</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, consequuntur. Dignissimos rem labore corrupti ad quaerat quam atque, nemo sequi doloremque ducimus voluptas, vitae quisquam doloribus molestias itaque repellendus esse!</p>
    `
  }
}