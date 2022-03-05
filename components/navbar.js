export function renderNavbar(page, items = null){
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