const db_network_social = [
  {
    id: 1,
    name: "twitter",
    image: "./images/twitter.svg",
    url: "https://twitter.com/daniellx42",
  },
  {
    id: 2,
    name: "linkedin",
    image: "./images/linkedin.svg",
    url: "https://www.linkedin.com/in/daniellx42/",
  },
  {
    id: 3,
    name: "instagram",
    image: "./images/instagram.svg",
    url: "https://www.instagram.com/daniellx42_/",
  },
  {
    id: 4,
    name: "discord",
    image: "./images/discord.svg",
    url: "https://discord.gg/x7aTDqrNb9",
  },
];

const network_social = () => {
  const network_social = document.querySelector(".network-social");
  db_network_social.map((item) => {
    network_social.innerHTML += `
        <div class="card">
          <div class="network-content">
            <a href="${item.url}" target="_blank">
              <div class="network-image">
               <img src="${item.image}">
              </div>
            </a>
          </div>
        </div>
        `;
  });
};
