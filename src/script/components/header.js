class Header extends HTMLElement{

  constructor(){
    super();
    this._shadowRoot = this.attachShadow({
      mode: "open"
    });

  }

  connectedCallback(){
    this.render();
  }

  render(){
    this._shadowRoot.innerHTML = `
    <style>
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    :host{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 80px;
      width: 100%;
      background: #202021;
      color: #fff;
    }
    h2{
      font-size: 2.2rem;
    }
    div{
      max-width: 1200px;
      margin: auto;
      text-align: center;
    }
    h4{
      font-weight: 100;
      font-size: 0.8rem;
      letter-spacing: 2px;
    }
    </style>
    <div>
      <h2>Time News</h2>
      <h4>Terdepan dalam mengabarkan</h4>
    </div>
    `
  }
}

customElements.define('app-header', Header)