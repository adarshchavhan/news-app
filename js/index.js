// 78697f8b8aad44a897b3759e3245351f


let xhr = new XMLHttpRequest();
xhr.open('GET','https://newsapi.org/v2/top-headlines?category=entertainment&country=in&apiKey=78697f8b8aad44a897b3759e3245351f', true);

xhr.onload = ()=>{
   if(xhr.status == 200){
      let wrapper = document.querySelector('.article-wrapper');
      let articles = JSON.parse(xhr.response).articles;
      articles.forEach(article => {
         if(article.urlToImage !== null){
            wrapper.innerHTML += 
            `<article>
               <div class="img">
                  <img src="${article.urlToImage}">
               </div>
               <h1>${article.title}</h1>
               <p>${article.description}</p>
               <p class="date">- ${article.author}</p>
            </article`;
         }
      });
   }

};
xhr.send();
