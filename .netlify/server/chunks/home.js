import { P as Platform } from "./types.js";
import { g as getSkills } from "./skills.js";
const title = "Home";
const name = "Aswanth";
const lastName = "Choyan";
const description = "Hi, I’m a designer and creative thinker passionate about blending culture, design, and technology to craft meaningful experiences.I love turning ideas into visuals that communicate clearly and inspire the viewer.";
const links = [
  {
    platform: Platform.GitHub,
    link: "https://github.com/Choy-An"
  },
  {
    platform: Platform.Linkedin,
    link: "https://www.linkedin.com/"
  },
  {
    platform: Platform.Email,
    link: "mailto:aswanthchoyan@gmail.com"
  },
  {
    //platform: Platform.Twitter,
    link: "https://twitter.com/"
  },
  {
    //platform: Platform.,
    link: "https://www.youtube.com"
  },
  {
    //platform: Platform.Facebook,
    //link: 'https://www.facebook.com'
  },
  {
    //platform: Platform.StackOverflow,
    link: "https://stackoverflow.com/"
  }
];
const skills = getSkills("figma", "illustrator", "photoshop", "excel", "html", "css", "js");
export {
  links as a,
  description as d,
  lastName as l,
  name as n,
  skills as s,
  title as t
};
