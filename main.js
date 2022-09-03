// URL('https://openapi.programming-hero.com/api/news/categories')
// https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a
// https://openapi.programming-hero.com/api/news/category/01

const loadCetegory = async()=>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
   console.log(data.data.news_category);
}

const displayNews = news =>{
    

}


loadCetegory()