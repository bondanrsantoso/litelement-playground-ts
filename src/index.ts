import { html, render } from "lit-html";
import "./components/HelloWorld";

const template = html`
  <hello-world name="Bondan"/>
`;

render(template, document.body);