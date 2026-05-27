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
