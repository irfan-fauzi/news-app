import GetData from '../script/getdata/get-data.js';
import './components/news-list.js';

const main = () => {
  
  const newsList = document.querySelector('news-list');

  window.addEventListener("DOMContentLoaded", async function(){
    try{
      const hasil = await GetData.getNews();
      renderResult(hasil)
    } catch(err){
      fallbackResult(err)
    }
  })

  const renderResult = hasil => {
    newsList.dataNews = hasil;
  }

  const fallbackResult = msg => {
    newsList.renderError(msg)
  }
}

export default main;