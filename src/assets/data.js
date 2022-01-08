import React from "react";
import { FaFileCode , FaReact, FaCode } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Akash Singh",
  title: "A Web Developer/Engineer",
  social: {
    github: "https://github.com/real-tea",
    // dribbble: "https://github.com/BraydenTW",
    twitter: "https://twitter.com/_A_kasH",
    email: "akashison07@example.com",
  },
  about: {
    title: "About me!",
    description:
      "Hi I am Akash Singh! an aspiring developer, my deep intrests lie in Javascript, React , Nodejs , Java , MongoDB and new technologies that come along these lines. I am also very passionate about Android development. I am a second year Engineering Student at Symbiosis Institute of Technology, Pune where I meet new people and make projects that excites me!"},
  skills: [
    {
      skillName: "Frontend",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Backend Dev",
      skillIcon: <FaFileCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "ReactJS",
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  projects: [
    {
      title: "Crypto Tracker",
      description: "💰 A crypto tracker made via CoingeckoAPI as an introduction to learning React.",
      tags: [
        "React",
        "API",
      ],
      link: "https://github.com/real-tea/Crypto-tracker"
    },
    {
      title: "Snapchat-clone",
      description: "⚡A snapchat clone built via react and redux and storage on firebase.",
      tags: [
        "website",
        "React",
        "Redux",
        "Firebase"
      ],
      link: "https://github.com/real-tea/Snapchat-clone"
    }
  ]
};
export default data;
