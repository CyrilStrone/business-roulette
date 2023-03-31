import { createEvent, createStore } from "effector";

export const $generalSkill = createStore<string[]>([
  "Business Analyst",
  "Database Analyst",
  "Data Analyst",
  "Data Administrator",
  "Data Scientist",
  "Computer Service Technician",
  "Cyber Security Specialist",
  "Software Engineer",
  "Hardware Engineer",
  "Multimedia Developer",
  "IT Consultant",
  "IT Manager",
  "Network Administrator",
  "Systems Administrator",
  "Network Engineer",
  "Programmer",
  "Software Analyst",
  "Software Developer",
  "Systems Analyst",
  "Systems Engineer",
  "Tech Support",
  "Web Developer",
  "Webmaster",
  "Maker-up",
  "Web designer",
  "Cloud architect",
  "Mobile application developer",
  "Designer",
]);
export const setGeneralSkill = createEvent<string[]>();
$generalSkill.on(setGeneralSkill, (_, val) => val);
export const $generalSkillTime = createStore<string[]>(["Все время","Месяц","Неделю"]);
  export const setGeneralSkillTime = createEvent<string[]>();
  $generalSkillTime.on(setGeneralSkillTime, (_, val) => val);
export const $generalPrograms = createStore<string[]>([
  //Web Servers
  "Apache",
  "NGINX",
  "Lighttpd",
  "Tomcat",
  "Nodal",
  "Gunicorn",
  //Code Editors / IDE
  "Sublime ",
  "Codesandbox",
  "Visual Studio Code",
  "Codepen",
  "Visual Studio",
  "Cloud9",
  "intellij-idea",
  "Atom",
  "Jetbrains",
  "Codio",
  "Netbeans",
  "Nuclide",
  "Vim",
  "Eclipse",
  "Brackets",
  "Adobe Dreamweaver",
  "Github Copilot",
]);
export const setGeneralPrograms = createEvent<string[]>();
$generalPrograms.on(setGeneralPrograms, (_, val) => val);

export const $menuBurger = createStore<boolean>(false)  
export const setMenuBurger = createEvent<boolean>()
$menuBurger.on(setMenuBurger, (_,val)=> val);