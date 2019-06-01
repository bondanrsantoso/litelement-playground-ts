import { html, render } from "lit-html";
import "./components/HelloWorld";
// import "bootstrap/dist/css/bootstrap.min.css"

const template = html`
  <hello-world name="Bondan">
    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quibusdam id est a, laborum sint culpa eligendi fugiat facilis, dolore itaque illo distinctio porro temporibus dolores officia voluptatum, commodi ipsam.</p>
  </hello-world>
`;

render(template, document.body);