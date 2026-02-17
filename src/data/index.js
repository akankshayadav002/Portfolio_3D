import {
  algorithms,
  devnotes,
  oscs,
  fp2,
  frameflow,
  campuscart,
  behindthelabel,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "portfolio",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "314e, Bangalore",
    date: "SEP 2024 - DEC 2025",
    details: [
      "Optimized backend APIs by rewriting slow PostgreSQL queries, reducing API response time from,<span style='color: white;'> 200 ms</span> to <span style='color: white;'> 10 ms significantly improving request throughput </span>",
      "Designed and implemented a document editor, parser, and creator pipeline, handling<span style='color: white;'> 90% of user-uploaded assets</span>",
      "Optimized Temporal-based video processing workflows, reducing end-to-end processing time from <span style='color: white;'> 5 minutes to 1 minute </span>."]
  },
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
      "  Crafted a comprehensive audit trail solution in Node.js, capturing user actions, timestamps, and API requests,<span style='color: white;'> improving security compliance by 40%.</span>.",
      "<span style='color: white;'> Optimized complex SQL queries </span> within the API to facilitate efficient data retrieval and manipulation, reducing query execution time by 35%. ",
      "<span style='color: white;'> Developed and maintained CI/CD</span> pipelines using Jenkins, enhancing deployment efficiency by 30%",
    ],
  },
  {
    title: "Web Lead",
    company_name: "GDSC",
    date: "2023 - 2024",
    details: [
      " <span style='color: white;'> Redesigned the college GDSC website,</span> improving user experience and functionality, resulting in a 30% increase in user engagement.",
      " Conducted a data structures session, (completed over<span style='color: white;'>500+ questions</span>, across platforms like LeetCode and GeeksforGeeks",
    ],
  },
  {
    title: "Computer Science",
    company_name: "AISSMS Institute of information Technology",
    date: "2020 - 2024",
    details: [
      "Graduated with an overall <span style='color:white;'>CGPA of 9.3</span>",
      "Skilled and experienced Backend Developer proficient in Python, FastAPI, Node.js, Java, Springboot, JavaScript, PostgreSQL, and possessing a strong grasp of DSA, OOPs and System Design principles."
    ],
  },
];

const portfolio = [
  {
    name: "Behind The Label",
    description:
      "Behind the Label is an AI-powered ingredient analyzer that evaluates skincare and food products for safety risks. Integrated LLM-based insights with a structured ingredient database. Improved response accuracy by 25% and delivered real-time allergen warnings. ",
    image: behindthelabel,
    github: "https://github.com/akankshayadav002/ingredient-analyser",
  },
  {
    name: "Campus Cart",
    description:
      "A virtual marketplace with over 500 listings across 10+ categories, utilizing Firebase for secure data storage, Google OAuth, and JWT authentication. Enhanced search efficiency by implementing an advanced algorithm, reducing average search time by 40%.",
    image: campuscart,
    github: "https://github.com/akankshayadav002/CampusCart",
  },
  {
    name: "Progno",
    description:
      "Developed a system for detecting seven major illnesses with an average accuracy of 95%, leveraging Machine Learning and Deep Learning techniques.",
    image: fp2,
    github: "https://github.com/RohitKhairnar1/Progno-Multiple-disease-predictor",
  }
];

export { experiences, portfolio };
