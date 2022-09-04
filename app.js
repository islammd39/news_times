const loadCart = async(category_id)=>{
    const url = `https://openapi.programming-hero.com/api/news/category/0${category_id}`;
    const res = await fetch(url);
    const data = await res.json();
    loadAllNews(data.data)
    
}
const loadAllNews = alls =>{
    const allUpdateNews = document.getElementById('all-news');
    allUpdateNews.innerHTML='';
    alls.forEach(allNew => {
       const div = document.createElement('div')
       div.classList.add('col')
       div.innerHTML=`
       <div class="card">
       <img src="${allNew.image_url}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${allNew.title}</h5>
         <p class="card-text">${allNew.details}</p>
         <img src="${allNew.author.img}" class="card-img" alt="...">
         <p class="text">${allNew.author.name}</p>
       </div>
     </div>
    
       `;
      allUpdateNews.appendChild(div)
   });
    
}

 loadCart()





















// document.getElementById('btn-id').addEventListener('click', function(){
//   const input = document.getElementById('inputPass');
//   const category_id = input.value;
//   loadCart(category_id)
// })


// loadAllNews()
