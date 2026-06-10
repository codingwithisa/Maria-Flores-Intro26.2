const footer = document.createElement("footer");
document.body.appendChild(footer);

const selectedFooter = document.querySelector("footer");

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement("p");
copyright.innerHTML = `© Maria Flores ${thisYear}`;

selectedFooter.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "GitHub", "VS Code"];

const skillsList = document.querySelector("#skills ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

const projectSection = document.querySelector("#Projects");
const projectList = projectSection.querySelector("ul");

fetch("https://api.github.com/users/codingwithisa/repos")
  .then(function (response) {
    return response.json();
  })
  .then(function (repositories) {
    console.log(repositories);

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      project.innerText = repositories[i].name;
      projectList.appendChild(project);
    }
  })
  .catch(function (error) {
    console.error("Error fetching repositories:", error);
  });
