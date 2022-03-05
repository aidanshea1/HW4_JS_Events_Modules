
export default function renderProjects(projects){
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
}

export function renderProjectItems(projects){
    return projects.map(d=>`
      <div class="col-6">
            <a href="?project=${d.id}">${d.title}</a>
            ${d.type}<br>
            ${d.descriotion}<br>
      </div>
    `).join('')
   ;
}

export function handleProjectFilter(data){	    
}