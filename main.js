// URL('https://openapi.programming-hero.com/api/news/categories')
// https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a
// https://openapi.programming-hero.com/api/news/category/01

const loadCetegory = async()=>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data.news_category);

}

const displayNews = news =>{
    const userId = document.getElementById('user-id')
    news.forEach(createNews =>{
        const newsDiv = document.createElement('ul');
        newsDiv.innerHTML = `
        <l1 class="nav-item"><a href="#" class='text-de' onclick ="loadCart(${createNews.category_id})" >${createNews.category_name}</a></l1>
        `;
        userId.appendChild(newsDiv)
    });
}

loadCetegory()