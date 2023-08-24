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

// for (const teamWork of team) {
//   // nome
//   console.log(teamWork.name);
//   // ruolo
//   console.log(teamWork.job);
//   // la stringa della foto
//   console.log(teamWork.img);
// }

//# MILESTONE 2

// stampare le stesse informazioni su DOM sottoforma di stringhe

const cardsContainer = document.getElementById("cards-container");

for (const teamWork of team) {
  // stampo nome
  cardsContainer.innerHTML += "Nome: " + teamWork.name + "<br/>";

  // stampo ruolo
  cardsContainer.innerHTML += "Ruolo: " + teamWork.job + "<br/>";

  // stampo la stringa della foto
  cardsContainer.innerHTML += "Stringa foto: " + teamWork.img + "<br/>";
}
