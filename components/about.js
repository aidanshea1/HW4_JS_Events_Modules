export function renderAbout(about){
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