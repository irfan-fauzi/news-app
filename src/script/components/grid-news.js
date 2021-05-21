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
        width: 100%;
      }
      a{
        text-decoration: none;
        color: black;
      }
      .container{
        width: 100%;
        overflow: hidden;
      }
      .img-wrap{
        width: 100%;
      }

     
    </style>
    <div class="container">
      <a href=${this._dataNews.url} target="_blank">
      <div class="img-wrap">
        <img src=${this._dataNews.urlToImage} alt="img" onerror="this.onerror=null;this.src='https://images.pexels.com/photos/755385/pexels-photo-755385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';">
      </div>
      <div class="title">
        <h2>${this._dataNews.title}</h2>
        <p>
          ${this._dataNews.author === null ? "" : this._dataNews.author}
        </p>
      </div>
      </a>
    </div>
    `;
  }
}

customElements.define('grid-news', GridNews);