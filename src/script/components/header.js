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
      justify-content: center;
      align-items: center;
      height: 70px;
      width: 100%;
      background: #021d61;
      color: #fff;
    }
    h2{
      font-size: 2rem;
    }
    </style>
    <h2>Berita Hari ini</h2>
    `
  }
}

customElements.define('app-header', Header)