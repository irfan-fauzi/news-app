import GetData from '../script/getdata/get-data.js';
import './components/news-list.js';
import './components/aside.js';

const main = () => {
  
  const newsList = document.querySelector('news-list');
  const asideEl = document.querySelector('aside-el');

  window.addEventListener("DOMContentLoaded", async function(){
    try{
      const hasil = await GetData.getNews();
      renderResult(hasil)
      console.log(hasil)
    } catch(err){
      fallbackResult(err)
    }
  })

  const renderResult = hasil => {
    newsList.dataNews = hasil;
    asideEl.dataNews = hasil;
  }

  const fallbackResult = msg => {
    newsList.renderError(msg);
    asideEl.renderError(msg);
  }
}

export default main;