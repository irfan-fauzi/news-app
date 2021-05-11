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
      height: 70px;
      width: 100%;
      background: #0d1336;
      color: #fff;
    }
    h2{
      font-size: 2.2rem;
      margin-left: 1.5rem;
    }
    </style>
    <h2>Time News</h2>
    `
  }
}

customElements.define('app-header', Header)