class GridNews extends HTMLElement{

  
  set dataNews(data){
    this._dataNews = data;
    this.render();
  }

  render(){
   
    this.innerHTML = `
    <style>
      *{
        margin: 0;
        padding: 0;
      }
      img{
        max-width: 100%;
        max-height: 100%;
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
      
    </div>
    `;
  }
}

customElements.define('grid-news', GridNews);