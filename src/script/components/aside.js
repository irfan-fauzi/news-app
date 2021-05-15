import './aside-news.js';


class Aside extends HTMLElement{
  
  constructor(){
    super();
    this.shadowRoot = this.attachShadow({
      mode: "open"
    })
  }

  set dataNews(data){
    this._dataNews = data;
    this.render();
  }

  renderError(msg){
    this.shadowRoot.innerHTML = `
      <h2>${msg}</h2>
    `
  }

  render(){
    this.shadowRoot.innerHTML = `
    <style>
      :host{
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      img{
        width: 100%;
        height: 100%
      }
      .img-wrap{
        width: 100%;
      }
    </style>
    <div class="img-wrap">
      <img src="https://raw.githubusercontent.com/irfan-fauzi/news-app/main/src/img/logo.png" alt="logo">
    </div>
    `;
    this._dataNews.forEach(data => {
      const asideNews = document.createElement("aside-news");
      asideNews.dataNews = data;
      this.shadowRoot.appendChild(asideNews)
    })
  }
}

customElements.define('aside-el', Aside);