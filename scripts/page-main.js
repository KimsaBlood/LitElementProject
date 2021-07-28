import { LitElement, html, css,unsafeCSS } from 'lit-element';

export class PageMain extends LitElement {
  static get properties() {
    return {
        visible:{type:String,attribute:true},
        book:{type:String,attribute:true},
        img:{type:String},
        review:{type:String},
        figCaption:{type:String}
    };
}
  constructor() {
    super();
    document.addEventListener("message", this);
  }

  static get styles() {
    return css`
      :host {
        grid-area: mainSection;
        width: 100%;
        height: 100%;
        color:var(--dark-purple);
      }
      .book__section{
          display:grid;
          grid-template-columns:40rem 1fr;
      }
      img{
          height:40rem;
          width:30rem;
          border-radius:1rem;
          box-shadow: -.5rem 0 .6rem 0 rgba(var(--purple,.5));
          border: .5rem solid #eee;
          border-bottom:none;
          border-bottom-left-radius:0;
          border-bottom-right-radius:0;
      }
      figcaption{
        text-align: center;
        padding: 1rem 2rem;
        background-color:#eee;
        width:27rem;
        margin-top:-0.6rem;
        border-bottom-left-radius:1rem;
        border-bottom-right-radius:1rem;
        box-shadow: -.5rem -.5rem .6rem 0 rgba(var(--purple,.5));
      }
      p{
          text-align:justify;
          padding-right:5rem;
      }@media (max-width:800px) {
        .book__section{
            grid-template-columns:1fr;
        }
        figure{
            justify-self:center;
        }
        div{
            text-align:center;
        }p{
            padding-left:5rem;
        }
      }@media (max-width:400px) {
          img{
            height:28rem;
            width:23rem;
          }
          figcaption{
            width:20rem;
          }
        }
        @media (max-width:300px) {
            img{
              height:20rem;
              width:15rem;
            }
            figcaption{
              width:12rem;
            }
            :host{
                font-size:1.2rem;
            }
          }
    `;
  }
  handleEvent(event) {
    if (event.type === "message") {
      const data = event.detail;
      this.books(data.book);
    }
  }
  books(book){
      if(this.book==book){
          this.visible="grid"
      }else{
          this.visible="none";
      }
  }

  render() {
    return html`
    <style>
        :host{
            display:${this.visible};
        }
    </style>
    <section class="book__section">
        <figure>
            <img src="${this.img}" alt="Libro físico">
            <figcaption>${this.figCaption}</figcaption>
        </figure>
        <div>
            <h2>${this.book}</h2>
            <h3>Sinopsis</h3>
            <p>${this.review}</p>
        </div>
    </section>
    `;
  }
}
