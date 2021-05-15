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
      *{
        margin: 0;
        padding: 0;
        color: white;
        background: #202021;
      }
      footer{
        
        height: 80px;
        display: flex;
        align-items: center;
      }
      .container{
       
        display: flex;
        justify-content: space-between;
        width: 1200px;
        margin: auto;
      }
      .menus{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        list-style: none;
      }
      li{
        text-transform: uppercase;
      }
      h4{
        font-weight: 100;
        font-size: 0.8rem;
        letter-spacing: 2px;
      }
      a{
        text-decoration: uppercase;
      }
    </style>
    
    <footer>
      <div class="container">
        <div class="title-wrap">
          <h1>Time News</h1>
          <h4>Terdepan dalam mengabarkan</h4>
          <i class="fab fa-facebook-f"></i>
        </div>  
        <ul class="menus">
          <li><a href="https://web.facebook.com/ahmad.i.sadega/" target="_blank">facebook</a></li>
          <li><a href="https://medium.com/@irfanfauzir" target="_blank">medium</a></li>
          <li><a href="https://www.instagram.com/irfan.fw/" target="_blank">instagram</a></li>
        <ul>
      <div>
    </footer>
      
    `
  }
}

customElements.define('app-footer', MyFooter)