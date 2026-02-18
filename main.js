/* Basic JS memberts list */
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

/* Store DOM nodes */
const testContainerEl = document.querySelector(".test-container");

/* Markup variable */
let list = ""; 

/* Retrive all member */
for (const member of teamMembers) {
    
    /* Prepare markup */
    list += `
        <li>
            <img src="assets/${member.img}">
            <h3>${member.name}</h3>
            <div>${member.role}</div>
            <div>${member.email}</div>
        </li>
    `;
}


/* Show cards */
testContainerEl.innerHTML = list;