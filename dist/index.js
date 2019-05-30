import { html, render } from "lit-html";
import "./components/HelloWorld";
const template = html `
  <hello-world></hello-world>
`;
render(template, document.body);
