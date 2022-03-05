import MainPage from './components/main.js'
import AboutPage from './components/about.js';
import NewsPage from './components/news.js';
import ProjectPage from './components/projects.js';
fetch('assets/data.json')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
  let params = new URLSearchParams(window.location.search);
  if (params.get('main')){
    MainPage(data);
  }else if (params.get('about')){
    AboutPage(data);
  } else if (params.get('news')) {
    NewsPage(data);
  } else {
    let project = data.projects.find(d=>d.id===params.get('project'));
    ProjectPage(project);
  }
});
const query = window.location.search;
const url = new URLSearchParams(query);
if (url.get("asl_project.html")) {
    renderProjectPage("asl_project.html")
} else if (url.get("data_distribution.html")) {
  renderProjectPage("data_distribution.html")
} else if (url.get("treble.html")) {
  renderProjectPage("treble.html")
} else if (url.get("predicting_gdp.html")) {
  renderProjectPage("predicting_gdp.html")
} else {
  renderMainPage(data)
}
function renderNavbar(page, items = null){
  return `
  <nav>
    <ul>
      <li>
        <a href = #${data.about}">About</a>
      </li>
      <li>
        <a href = "#${data.news}">News</a>
      </li>
      <li>
        <a href = "#${data.projects}">Projects</a>
      </li>
    </ul>
  </nav?`;
}
function renderMainPage(data){
  document.querySelector('.container').innerHTML = `
      ${renderNavbar('main', Object.keys(data))}
      ${renderAbout(data.about)}
      ${renderNews(data.news)}
      ${renderProjects(data.projects)}
  addInteractions(data); // add event handlers after rendering
  document.querySelector('.news-list').innerHTML = renderNewsItems(news);
  `;
}
function renderAbout(about){
  return `
  <section id="about">
      <h3>About</h3>
      ${d.name}<br>
      ${d.title}<br>
      <img class = "profile_picture" src = ${d.photo} alt = "Profile Picture"><br>
      ${d.email}<br>
      ${d.address}<br>
      ${d.biography}<br>
  </section>`;
}
function renderNews(news){
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
function renderNewsItems(news){
  return news.map(d=>`
    <div class="col-6">
          ${d.title}<br>
          ${d.date}<br>
    </div>
  `).join('').slice(0, 2)
 ;
}
function renderProjects(projects){
  let buttons = document.querySelectorAll('.filter input[name="filter"]');
  buttons.forEach(cond=>cond.addEventListener('change', function(event){
    document.buttons('filter').innerHTML = renderProjectItems(project);
  document.querySelector('.project-list').innerHTML = ProjectItems(filtered);
  return `
  <div class="filter">
    <label>
      <input type="radio" name="filter" value="all" checked>
    Personal Project
  </label>
    <label>
      <input type="radio" name="filter" value="journal">
    School Project
    </label>
  </div>
  <section id="projects">
      <h3>Projects</h3>
      ${renderProjectItems(projects)}
  </section>`;
  }
function renderProjectItems(projects){
  return projects.map(d=>`
    <div class="col-6">
          <a href="?project=${d.id}">${d.title}</a>
          ${d.type}<br>
          ${d.descriotion}<br>
    </div>
  `).join('')
 ;
}
export default function Projects(projects){
  return `
  <section id="projects">
      <h1 class="title">Projects</h1>
      // put filter group here
      <div class="project-list">
          ${renderProjectItems(projects)}
      </div>
  </section>`;
}
function renderProjectPage(project) {
  return `
  !DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    </head>
    <h1>${projet.title}</h1>
    <p>${project.details}</p>
  </html>`;
}
