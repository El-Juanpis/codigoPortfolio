import frontendImage from "../assets/ComplementImages/frontend.png";
import backendImage from "../assets/ComplementImages/backend.png";
import toolsImage from "../assets/ComplementImages/tools.png";
import skillsImage from "../assets/ComplementImages/softskils.png";

export const SKILLS = [
  {
    title: "Frontend",
    icon: frontendImage,
    skills: [
      { skill: "FrontendImages/html.png", title: "HTML" },
      { skill: "FrontendImages/css.png", title: "CSS" },
      { skill: "FrontendImages/js.png", title: "JavaScript" },
      { skill: "FrontendImages/react.png", title: "React" },
      { skill: "FrontendImages/typescript.png", title: "TypeScript" },
      /* {skill:'FrontendImages/bootstrap.png',title:'Bootstrap'}, */
      { skill: "FrontendImages/nextjs.png", title: "Next.js" },
      { skill: "FrontendImages/tailwind.png", title: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    icon: backendImage,
    skills: [
      { skill: "BackendImages/sql.png", title: "SQL" },
      { skill: "BackendImages/sqlite.png", title: "SQLite" },
      { skill: "BackendImages/sqlserver.png", title: "MySQL" },
      { skill: "BackendImages/express.png", title: "Express.js" },
      { skill: "BackendImages/mongodb.png", title: "MongoDB" },
      { skill: "BackendImages/nodejs.png", title: "Node.js" },
      { skill: "BackendImages/postgressql.png", title: "PostgreSQL" },
    ],
  },
  {
    title: "Herramientas",
    icon: toolsImage,
    skills: [
      { skill: "ToolsImages/git.png", title: "Git" },
      { skill: "ToolsImages/github.png", title: "GitHub" },
      { skill: "ToolsImages/visual.png", title: "VSC" },
    ],
  },

  {
    title: "Habilidades",
    icon: skillsImage,
    skills: [
      {
        skill: "SoftSkillsImages/ComunicacionAcertiva.png",
        title: "Comunicación Asertiva",
      },
      {
        skill: "SoftSkillsImages/TrabajoEnEquipo.png",
        title: "Trabajo en Equipo",
      },
      {
        skill: "SoftSkillsImages/GestionDelTiempo.png",
        title: "Gestión del Tiempo",
      },
      { skill: "SoftSkillsImages/Empatia.png", title: "Empatía" },
      { skill: "SoftSkillsImages/Moral.png", title: "Ética Profesional" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Junior Dev",
    date: "Abril de 2024 (Presente)",
    responsibilities: [
      "Desarrollo de interfaces",
      "Desarrollo de aplicaciones web con el uso de react, typescript,",
      "para bailar la bamba, se necesita una copa de gracia",
    ],
  },
  {
    title: "Frontend Dev",
    date: "nose la fecha puejzxczxc",
    responsibilities: [
      "one two thre one two thre ohhhhh gonna swift from the chandelier",
      "la vaca uhhh la vaca ",
      "relato, improviso, escribo muy preciso, esto lo estpy pensando mientras estoy rapeando, analisando cada letra de mi lirica insofacta, es maravilloso el texto que mis manos escriben,tomando instrucciones del cerebro por montones",
    ],
  },
  {
    title: "Analista Ti",
    date: "nose la fecha puezxczxczxcj",
    responsibilities: [
      "tengo que rellenar estos espacios, mientras escribo pienso y trato de colocar lo que hago",
      "bala muchachos bala bala bala ",
      "mira como estoy yo, reposao, manejando la tramquilidad, yo no me estreso mirame como estoy ve, la tranquiñidad no tiene precio",
    ],
  },
];

export const DATA_PORTFOLIO = [
  [
    {
      id: 1,
      src: "PortfolioImages/eccomerce7.png",
      title: "Maquetación E-ccomerce",
      description:
        "Maquetado de un E-commerce especializado en moda y confección.",
      tecnologies: "TypesCript, React, Tailwindcss, Formik",
      github: "https://github.com/El-Juanpis/Eccomerce",
      see: "https://ecccomercejuan.netlify.app/",
    },
    {
      id: 2,
      src: "PortfolioImages/veterinaria.png",
      title: "Agendar Citas Veterinaria",
      description: "dasdad",
      tecnologies: "adasd",
      github: "https://github.com/El-Juanpis/citasReact",
      see: "https://citas-reactjuan.netlify.app",
    },
    {
      id: 3,
      src: "PortfolioImages/eccomerce3.png",
      title: "Carrito de Compra",
      description: "dasdad",
      tecnologies: "adasd",
    },
    {
      id: 4,
      src: "PortfolioImages/eccomerce4.png",
      title: "Pokedex",
      description: "dasdad",
      tecnologies: "adasd",
    },
    {
      id: 5,
      src: "PortfolioImages/eccomerce5.png",
      title: "MK NOSE",
      description: "dasdad",
      tecnologies: "adasd",
    },
    {
      id: 6,
      src: "PortfolioImages/eccomerce6.png",
      title: "UNA APP SUPER WOW",
      description: "dasdad",
      tecnologies: "adasd",
    },
  ],
];
