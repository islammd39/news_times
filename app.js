const loadCart = async(category_id)=>{
    const url = `https://openapi.programming-hero.com/api/news/category/01`;
    const res = await fetch(url);
    const data = await res.json();
    loadAllNews(data.data[0].category_id);
}
const loadAllNews = allNews =>{
    const allUpdateNews = document.getElementById('all-news');
    const cldDiv = document.createElement('div')
    cldDiv.classList.add('col')
    cldDiv.innerHTML = `
    <div class="card">
    <img src="${allUpdateNews.details}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    `;
    console.log(allNews.details);
}

loadCart()