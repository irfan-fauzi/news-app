import './grid-news.js';

class NewsList extends HTMLElement{
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
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
          
        }
        grid-news:nth-of-type(1){
          grid-column: 1/4;
          position: relative;
         
        }
       

        .news-0 h2{
          position: absolute;
          font-size: 2.9rem;
          bottom: 1rem;
          color: #fff;
          z-index: 3;
          padding: 0 1rem;
          text-shadow: 2px 2px 2px #404640;
        }

        .news-0 p{
          display: none;
        }
        .news-1, .news-2, .news-3, .news-4, news-5, news-6, news-7 h2{
          font-size: 0.8rem;
        }
        
        grid-news:nth-of-type(1)::after{
          content: "sayaayayya";
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          background: black;
          opacity: 0.7
        }

      </style>
    `;
    let fil = this._dataNews.filter((el, index) => {
      return index < 10;
    })
    fil.forEach((data, index) => {
      const gridNews = document.createElement("grid-news");
        gridNews.setAttribute("class", `news-${index}`);
        gridNews.dataNews = data;
        this.shadowRoot.appendChild(gridNews)
      
      
    })
  }
  
}

customElements.define('news-list', NewsList);