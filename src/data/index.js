import {
  algorithms,
  devnotes,
  oscs,
  fp2,
  frameflow,
  campuscart
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "portfolio",
    title: "Project",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "SDE Intern",
    company_name: "ISRO, Bangalore",
    date: "JUL 2023 - AUG 2023",
    details: [
      "Designed an admin dashboard boosting data visualization efficiency by <span style='color: white;'>35%</span> and <span style='color: white;'>reducing report generation time by 25 %</span>",
      " Architected a system for uploading, editing, and storing data reports in a real-time database, <span style='color: white;'>enhancing efficiency by 25%.</span>",
      " Secured the delivery of these reports to designated IP addresses, facilitating data sharing and collaboration, resulting in a <span style='color: white;'>20% increase </span> in operational efficiency."]
  },
  {
    title: "Backend Intern",
    company_name: "Remote",
    date: "JAN 2023 - JUN 2023",
    details: [
      "  Crafted a comprehensive audit trail solution in Node.js, capturing user actions, timestamps, and API requests,<span style='color: white;'>improvingsecurity compliance by 40%.</span>.",
      "<span style='color: white;'> Optimized complex SQL queries </span>within the API to facilitate efficient data retrieval and manipulation, reducing query execution time by 35%. ",
      "<span style='color: white;'> Developed and maintained CI/CD</span> pipelines using Jenkins, enhancing deployment efficiency by 30%",
    ],
  },
  {
    title: "Web Lead",
    company_name: "GDSC",
    date: "2023 - 2024",
    details: [
      " <span style='color: white;'> Redesigned the college GDSC website,</span> improving user experience and functionality, resulting in a 30% increase in user engagement.",
      " Conducted a data structures session, (completed over<span style='color: white;'>300+ questions</span>, across platforms like LeetCode and GeeksforGeeks",
    ],
  },
  {
    title: "Computer Science",
    company_name: "AISSMS Institute of information Technology",
    date: "2020 - 2024",
    details: [
      "Graduated with an overall <span style='color:white;'>CGPA of 9.3</span>",
      "Skilled and experienced Backend Developer proficient in Node.js, Java, C++, JavaScript, CSS, databases like MongoDB, MySQL and possessing a strong grasp of Data Structures and Algorithms (DSA) as well as Object-Oriented Programming (OOP) principles."
    ],
  },
];

const portfolio = [
  {
    name: "Campus Cart",
    description:
      "A virtual marketplace with over 500 listings across 10+ categories, utilizing Firebase for secure data storage, Google OAuth, and JWT authentication. Enhanced search efficiency by implementing an advanced algorithm, reducing average search time by 40%.",
    image: campuscart,
  },
  {
    name: "Progno",
    description:
      "Developed a system for detecting seven major illnesses with an average accuracy of 95%, leveraging Machine Learning and Deep Learning techniques.",
    image: fp2,
  },
  {
    name: "Clipify",
    description:
      "This project creates dynamic videos from URLs by summarizing text, adding voiceovers, generating b-roll images, and using ffmpeg for video compilation. It showcases a unique integration of React, Tailwind, GPTScript, and Node to automate content transformation into engaging video formats.",
    image: frameflow,
  },
];

export { experiences, portfolio };

