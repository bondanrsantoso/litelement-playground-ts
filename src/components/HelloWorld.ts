import { LitElement, html, customElement, property, css } from "lit-element";
// import "bootstrap"


@customElement('hello-world')
export default class HelloWorld extends LitElement {
  constructor() {
    super()
  }

  @property()
  name: string = "World";
  
  render() {
    return html`
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
      <div class="container">
        <h1 class="display-4">Hello ${this.name}</h1>
        <slot></slot>
      </div>
    `
  }
}