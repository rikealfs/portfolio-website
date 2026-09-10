// takes a project object and returns an HTML element representing the project card
function createProjectCard(project) {
    // creates a new empty article element
  const card = document.createElement("article");
  card.className = "project-card";
// sets the inner HTML of the card element to include the project video, title, description, tech list, and links
  card.innerHTML = `
    <div class="project-video">
      <iframe
        src="https://www.youtube.com/embed/${project.videoId}"
        title="${project.title} demo video"
        frameborder="0"
        allowfullscreen>
      </iframe>
    </div>
    <div class="project-content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <ul class="tech-list">
        ${project.tech.map(t => `<li>${t}</li>`).join("")}
      </ul>
      <div class="project-links">
        <a href="${project.githubUrl}" target="_blank" rel="noopener">GitHub</a>
        ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener">Live Demo</a>` : ""}
      </div>
    </div>
  `;

  return card;
}

// takes an array of project objects and renders them into the projects container
function renderProjects(projectList) {
    // gets the container element where the project cards will be appended
  const container = document.getElementById("projects-container");
//   loops through each project in the projectList array, creates a project card for it, and appends it to the container
  projectList.forEach(project => {
    const card = createProjectCard(project);
    container.appendChild(card);
  });
}

renderProjects(projects);