import { LitElement, html, css } from 'lit-element';

export class PageMenu extends LitElement {
  static get properties() {
    return {
        books:{type:Array,attribute:true}
    };
  }

  static get styles() {
    return css`
      :host {
        display: grid;
        grid-area: aside;
        z-index:100;
      }
    .aside__navbar{
            border-radius: 1rem;
            margin: 1rem 1rem;
        }.dropdown{
            display:grid;
        }
        .toggle{
            display:none;
        }a{
            text-decoration: none;
          }.aside__navbar ul{
            list-style: none;
            padding:0;
          }.aside__navbar ul.dropdown li{
              padding:1rem;
              border-style:solid;
              border-color:#fff;
              border-radius:1rem;
              margin-top:.3rem;
              background-color: rgb(var(--yellow));;
          }
          .aside__navbar .dropdown li:hover{
            background-color: rgb(var(--pink));
            animation: fade 1s linear;
          }
          .aside__navbar a{
            color: white;
          }
          @keyframes fade {
            0% { opacity: .4 }
            50% { opacity: 1 }
          }
        @media (max-width:800px) {
            .aside__navbar ul.toggle{
                display: grid;
                grid-auto-flow: column;
                height:5rem;
                justify-content: flex-end;
                align-content: center;
                margin:0;
                background-color: rgb(var(--yellow));
              }
              .aside__navbar ul.dropdown{
                  margin-top:0rem;
                background-color: #eee;
              }.aside__navbar ul.dropdown li{
                border-style:none;
                border-radius:0;
                margin-top:.3rem;
                background-color: #eee;
                text-align:center;
            }.aside__navbar .dropdown a{
                color: var(--dark-purple);
              }
              .aside__navbar .dropdown a:hover{
                color: white;
              }
              .aside__navbar ul.toggle li{
                text-align: center;
                vertical-align: middle;
                padding: .5rem 2rem;
                border-radius: 1rem;
              } 
              .toggle{
                display:grid;
            } .dropdown{
                display:none;
            }
              .aside__navbar li:hover{
                background-color: rgb(var(--pink));
                animation: fade 1s linear;
              }
                
              .aside__navbar .toggle a{
                color: white;
              }
              .aside__navbar{
                height:100%;
                margin:0;
                border-style:none;
                border-radius:0;
              }
              .navbar .toggle {
                width: 10rem;
                margin: 5rem auto;
                transition: all 0.5s;
                -webkit-transition: all 0.5s;
              }
              
              .toggle div {
                height: .3rem !important;
                background: #fff;
                margin: .3rem 0px .3rem 0px;
                border-radius: 1rem;
                transition: all 0.5s;
                -webkit-transition: all 0.5s;
              }
              
              .two {
                width: 1.5rem;
              }
              
              .three {
                width: 3rem;
              }
              
              .navbar:hover div {
                width: 4rem;
              }
        }
    `;
  }

  constructor() {
    super();
  }

 
  selectedItem(e){
    const MessageEvent = new CustomEvent("message", {
        detail: { book:e.target.getAttribute("id") },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(MessageEvent);
  }
  toggle(){
      let dropdown=this.shadowRoot.querySelector(".dropdown");
      if(dropdown.style.display=="none"){
        dropdown.style.display="grid";
      }else{
        dropdown.style.display="none";
      }
      
  }
  render() {
    return html`
    <aside>
    <nav class="aside__navbar">
        <ul class="toggle">
            <li><a href="#" class="toggle" @click=${this.toggle}>
                <div class="one"></div>
                <div class="two"></div>
                <div class="three"></div>
            </a></li>
        </ul>
        <ul class="dropdown">
            ${this.books.map(book => html`<li><a href="#"  @click=${this.selectedItem} id="${book}">${book}</a></li>`)}
        </ul>
    </nav>
</aside> 
    `;
  }
}
