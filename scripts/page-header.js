import { LitElement, html, css } from 'lit-element';

export class PageHeader extends LitElement {
  static get properties() {
    return {
    };
  }

  static get styles() {
    return css`
      :host {
        display: grid;
        grid-area: header;
        height: 100%;
        justify-items: stretch;
        font-size:2.5rem;
      }
      .navbar{
        box-shadow: .3rem .3rem .8rem 0 rgba(var(--purple,.2));
        padding: 1rem;
        border-radius: 1rem;
        background-color: var(--dark-purple);
        margin: 1rem;
        color:white;
        text-align:center;
      }
      @media (max-width:800px) {
        .navbar{
          height:100%;
          padding: 0;
          border-radius:0;
          background-color: var(--dark-purple);
          margin: 0;
          display:grid;
        }
      }
      
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <header>
      <nav class="navbar">
        BookShop.com
        </nav>
      </header>  
    `;
  }
}
