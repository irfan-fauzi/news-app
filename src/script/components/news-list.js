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
          grid-template-columns: 1fr 1fr;
        }
        grid-news:nth-of-type(2){
          background: red;
        }
      </style>
    `;
    this._dataNews.forEach(data => {
      const gridNews = document.createElement("grid-news");
      gridNews.dataNews = data;
      this.shadowRoot.appendChild(gridNews)
    })
  }
  
}

customElements.define('news-list', NewsList);