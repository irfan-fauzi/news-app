import axios from 'axios';

class GetData {

  static getNews(){
    return new Promise((resolve, reject) => {
      axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=344740c6b1da43f898284a047670458b`)
      .then(res => {
        if(res){
          resolve(res.data.articles)
        } else {
          reject("data tidak ada")
        }
      })
     
    })
  }
}

export default GetData;