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
      
      h2{
        font-family: 'Arial';
        font-weight: 800;
        font-size: 1.8rem;
        letter-spacing: 2px;
        color: #46484d;
        
      }
      .container{
        
        max-width: 1500px;
        margin: auto;
      }
     
      
      .box{
        border: #eaeaea solid 1px;
      }
      p{
        font-family: 'Arial';
        letter-spacing: 2px;
      }
      .news{
        font-size: 1rem;
        font-weight: 400;
        color: grey;
      }
      .btn{
        padding: 1rem 2rem;
        background: #46484d;
        color: #fff;
        font-size: 0.8rem;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-weight: bold;
        border-radius: 10px;
        cursor: pointer;
      }
    </style>
    <div class="container">
     <div class="box">
      <div class="img-wrap">
        <img src=${this._dataNews.urlToImage} alt="kompas">
      </div>
      <div class="text-wrap">
        <div class="title-wrap">
        <h2>${this._dataNews.title}</h2>
        <p>
          ${this._dataNews.author}
        </p>
      </div>
      <div class="news">
        <p>${this._dataNews.content}...</p>
        <button class="btn">selengkapnya</button>
        </div>
      </div>
     </div>
    </div>
    `;
  }
}

customElements.define('grid-news', GridNews);