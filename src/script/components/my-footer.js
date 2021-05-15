class MyFooter extends HTMLElement{
  constructor(){
    super();
    this._shadowRoot = this.attachShadow({
      mode: "open"
    })
  }

  connectedCallback(){
    this.render();
  }

  render(){
    this._shadowRoot.innerHTML = `
    <style>

    footer{
      background: black;
    }

    </style>

    <footer>
      <div class="logo-wrap">
        <img src="" alt="img">
      <div>
      <ul class="menu-wrap">
        <li><a href="">facebook</a></li>
        <li><a href="">instagram</a></li>
        <li><a href="">medium</a></li>
      </ul>
    </footer>

    `
  }
}

customElements.define('app-footer', MyFooter)