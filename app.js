const loadCart = async (category_id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/0${category_id}`;
  const res = await fetch(url);
  const data = await res.json();
  loadAllNews(data.data)

}
const loadAllNews = alls => {
  const allUpdateNews = document.getElementById('all-news');
  allUpdateNews.innerHTML = '';
  alls.forEach(allNew => {
    const div = document.createElement('div')
    // console.log(allNew.details);
    let details = allNew.details;
    // console.log(details);
    const sortText = details.slice(0, 200) + "..."
    div.classList.add('col')
    div.innerHTML = `
      <div class="card">
      <img src="${allNew.image_url}" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">${allNew.title}</h5>
      <p class="card-text">${sortText}</p>
      <img src="${allNew.author.img}" class="card-img" alt="...">
         <p class="text">${allNew.author.name}</p>
         <p class="publish-text">${allNew.author.published_date}</p>
         <p class="view-text">total view ${allNew.total_view}</p>
         <button type = "button" class = "btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">click</button>
         
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