const navBar = () => {
  const nav = document.querySelector(".navbar");
  fetch("https://api.github.com/users/daniellx42")
    .then(async (res) => {
      if (!res.ok) {
        throw Error(res.status);
      }
      let data = await res.json();
      return (nav.innerHTML += `
      <div class="navbar">
        <div class="avatar">
          <img src="${data.avatar_url}"/>
        </div>
        <p>${data.name}</p>
        <p id="p-bio">${data.bio}</p>
          <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="projects_github.html">
                Projects GitHub - ${data.public_repos}</a>
              </li>
              <li><a href="skills.html">Skills</a></li>
          </ul>
      </div>
    `);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getApiGithHubRepos = () => {
  const api_github_Repos = document.querySelector(".api-github");
  fetch("https://api.github.com/users/daniellx42/repos")
    .then(async (res) => {
      if (!res.ok) {
        throw Error(res.status);
      }
      let data = await res.json();
      return data.map((item) => {
        api_github_Repos.innerHTML += `
    <div class="card">
      <a href="${item.html_url}" target="_blank">
        <div>
          <p>${item.name}</p>
          <footer>${item.fork ? "forked" : "created"}</footer>
        </div>
      </a>
    </div>
  `;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
