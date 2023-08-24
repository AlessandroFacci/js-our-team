//# MILESTONE 0

// creare l’array di oggetti con le informazioni fornite.

const team = [
  {
    name: "Wayne Barnett",
    job: "Founder & CEO",
    img: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    job: "Chief Editor",
    img: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    job: "Office Manager",
    img: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    job: "Social Media Manager",
    img: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    job: "Developer",
    img: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    job: "Graphic Designer",
    img: "barbara-ramos-graphic-designer.jpg",
  },
];

//# MILESTONE 1

// stampare su console per ogni membro del team le informazioni

// nome
for (const names of team) {
  console.log(names.name);
}

// ruolo
for (const jobs of team) {
  console.log(jobs.job);
}

// la stringa della foto
for (const images of team) {
  console.log(images.img);
}
