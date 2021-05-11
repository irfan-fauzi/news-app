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
      <img src="https://previews.dropbox.com/p/thumb/ABJpBYQBT2lSef2ct0xT4K9shcVhFbPNdDaTUomQ-8eI_WAeZbNXwl9RqdjFd0qh75gHTwTz_Yy5Fjx0r_zMgu2yyT2VY5X14gOP4fN5W6aH3-YIMGurLmGCJL5ua-DFInq9eX7w-XAHsCk1yu06NUSq2VdYQMfkQi5JIQODMfFcLfndX-7GZ4-DBJtA7g2BpezqC4jDw6vqPQKM4tvLEwxbkAd83HukBcTcf5BnsScLYvV0J1Mkj8kVgFVJH6WzDXoK1nKAJWHbuqbj1kRa5LfklQ3Or1ob0i5kuhEMhq_LgK9QLPM2jqyePW-DoS2LwYDU2qZBOtDmBM293RqQD6K6nHZLtla_TClTVh0bIM5Xcw/p.png?fv_content=true&size_mode=5">
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