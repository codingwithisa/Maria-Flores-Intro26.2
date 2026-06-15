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

const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log(usersName);
  console.log(usersEmail);
  console.log(usersMessage);

  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");

  const newMessage = document.createElement("li");

  newMessage.innerHTML = `
  <a href="mailto:${usersEmail}">${usersName}</a>
  <span> ${usersMessage} </span>
`;

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm.reset();
});

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

      const link = document.createElement("a");
      link.href = repositories[i].html_url;
      link.target = "_blank";
      link.innerText = repositories[i].name;

      project.appendChild(link);
      projectList.appendChild(project);
    }
  })
  .catch(function (error) {
    console.error("Error fetching repositories:", error);

    projectList.innerHTML =
      "<li>Sorry, unable to load projects at this time.</li>";
  });
