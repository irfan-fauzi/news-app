class AsideNews extends HTMLElement{

  set dataNews(data){
    this._dataNews = data;
    this.render();
  }

  render(){
    this.innerHTML = `
      <style>
        :host{
          
        }
        *{
          margin: 0;
          padding: 0;
        }
        h4{
          font-size: 0.9rem;
          color: black;
        }
        a{
          text-decoration: none;
          color: black;
        }
      </style>
      <div class="aside-news">
        <h4><a href=${this._dataNews.url} target="_blank">${this._dataNews.title}</a></h4>
      </div>
    `
  }
}

customElements.define('aside-news', AsideNews);