const db_skills = [
  {
    id: 1,
    name: "rust",
    text: "Learning language.",
    image: "./images/rust.svg",
  },
  {
    id: 2,
    name: "JavaScript",
    text: "1 year and 6 month of experience.",
    image: "./images/javascript.svg",
  },
  {
    id: 3,
    name: "TypeScript",
    text: "1 year 6 month of experience.",
    image: "./images/typescript.svg",
  },
  {
    id: 4,
    name: "Nodejs",
    text: "1 year and 6 month of experience.",
    image: "./images/nodejs.svg",
  },
  {
    id: 5,
    name: "Reactjs",
    text: "1 year of experience.",
    image: "./images/react.svg",
  },
  {
    id: 6,
    name: "HTML",
    text: "1 year and 6 month of experience.",
    image: "./images/html5.svg",
  },
  {
    id: 7,
    name: "CSS3",
    text: "1 year and 6 month of experience.",
    image: "./images/css3.svg",
  },
  {
    id: 8,
    name: "Mongodb",
    text: "1 year of experience.",
    image: "./images/mongodb.svg",
  },
  {
    id: 9,
    name: "Docker",
    text: "1 year and 6 month of experience.",
    image: "./images/docker.svg",
  },
  {
    id: 10,
    name: "AWS",
    text: "5 month of experience.",
    image: "./images/amazonaws.svg",
  },
  {
    id: 11,
    name: "heroku",
    text: "4 monyh of experience.",
    image: "./images/heroku.svg",
  },
  {
    id: 12,
    name: "ubuntu",
    text: "2 year of experience.",
    image: "./images/ubuntu.svg",
  },
  {
    id: 13,
    name: "archlinux",
    text: "2 year of experience.",
    image: "./images/archlinux.svg",
  },
  {
    id: 14,
    name: "git",
    text: "1 year and 6 month of experience.",
    image: "./images/git.svg",
  },
  {
    id: 15,
    name: "github",
    text: "1 year and 6 month of experience.",
    image: "./images/github.svg",
  },
  {
    id: 16,
    name: "vim",
    text: "2 year of experience.",
    image: "./images/vim.svg",
  },
  {
    id: 17,
    name: "VS Code Insiders",
    text: "1 year 6 month of experience.",
    image: "./images/vscode.svg",
  },
  {
    id: 18,
    name: "Figma",
    text: "2 month of experience.",
    image: "./images/figma.svg",
  },
  {
    id: 19,
    name: "Bootstrap",
    text: "4 month of experience.",
    image: "./images/bootstrap.svg",
  },
  {
    id: 20,
    name: "Insomnia",
    text: "6 month experience.",
    image: "./images/insomnia.svg",
  },
  {
    id: 21,
    name: "Postman",
    text: "6 month experience.",
    image: "./images/postman.svg",
  },
  {
    id: 22,
    name: "jest",
    text: "2 month experience.",
    image: "./images/jest.svg",
  },
];

const skills = () => {
  const class_skills = document.querySelector(".container-skills");
  return db_skills.map((item) => {
    console.log(item);
    class_skills.innerHTML += `
            <div class="card-skills">
              <div class="image-skills">
                  <img src="${item.image}">
              </div>
              <div class="text-skills">
                  <h3>${item.name}</h3>
                  <p>${item.text}</p>
              </div>
            </div>
            `;
  });
};
