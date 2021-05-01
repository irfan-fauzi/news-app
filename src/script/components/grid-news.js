class GridNews extends HTMLElement{

  constructor(){
    super();
    this.shadowDom = this.attachShadow({
      mode: "open"
    });
  }

  set dataNews(data){
    this._dataNews = data;
    this.render();
  }

  render(){
   // let n = myDate.toDateString();
    this.shadowDom.innerHTML = `
    <style>
      *{
        margin: 0;
        padding: 0;
      }
      img{
        width: 100%;
      }
      :host .container:nth-child(1){
        background: yellow;
     }
    </style>
    <div class="container">
      <div class="img-wrap">
        <img src=${this._dataNews.urlToImage} alt="kompas">
      </div>
      <div class="title">
        <h2>${this._dataNews.title}</h2>
        <p>
          ${this._dataNews.author === null ? "" : this._dataNews.author}
        </p>
      </div>
      <div class="news">
        <p>${this._dataNews.content === null ? "" : this._dataNews.content}...</p> 
      </div>
    </div>
    `;
  }
}

customElements.define('grid-news', GridNews);