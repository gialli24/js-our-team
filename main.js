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
const containerEl = document.getElementById("team-container");

const firstNameField = document.getElementById("first-name");
const lastNameField = document.getElementById("last-name");
const emailField = document.getElementById("email");
const imageField = document.getElementById("image");
const roleField = document.getElementById("role");

const submitBtn = document.getElementById("submit-btn");

/* Markup variable */
let cards = ""; 

/* Retrive all member */
for (const member of teamMembers) {
    
    /* Store members data */
    const {name, email, role} = member;
    const image = `./assets/${member.img}`;

    /* Prepare markup */
    cards += renderMarkup(image, name, email, role); 
}

/* Show cards */
containerEl.innerHTML = cards;

/* Form handler */
submitBtn.addEventListener("click", function(e) {
    /* Prevent default form refresh */
    e.preventDefault();

    const newMember = createMember();

    if (newMember != "") {
        /* Retrive data */
        const {image, name, email, role} = newMember;
        
        /* Markup */
        const markup = renderMarkup(image, name, email, role);
    
        /* Show */
        containerEl.innerHTML += markup;
    }
})