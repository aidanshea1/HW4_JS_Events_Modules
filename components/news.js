export function renderNews(news){
    return `
    <div class="search">
      <input type="search" name='news' placeholder="Search News...">
    </div>
    
    document.querySelector('.search input[name="news"]')
    .addEventListener('input', (event)=>{
      input.toLowerCase().includes(news.title.toLowerCase())
    }
    <section id="news">
        <h3>News</h3>
        <div class = "news-list">
        ${renderNewsItems(news)}
        </div>
    </section>`;
  }
export function renderNewsItems(news){
    return news.map(d=>`
      <div class="col-6">
            ${d.title}<br>
            ${d.date}<br>
      </div>
    `).join('').slice(0, 2)
   ;
  }