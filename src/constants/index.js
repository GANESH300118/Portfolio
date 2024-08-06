import project1 from "../assets/projects/Project_1.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/Project_5.png";
import project6 from "../assets/projects/project-6.png";

export const HERO_CONTENT = `I am a passionate front-end developer with a talent for creating engaging and responsive web applications. With extensive experience in technologies like React, JavaScript, HTML5, CSS3, and design tools like Figma, I have honed my skills in crafting visually appealing and highly interactive user interfaces. My goal is to leverage my expertise to deliver exceptional user experiences and drive business growth through innovative front-end solutions.`;
export const ABOUT_TEXT = `I am a dedicated and versatile front-end developer with a passion for creating efficient and user-friendly web applications. With extensive professional experience, I have worked with a variety of technologies, including React, JavaScript, HTML5, CSS3, and design tools like Figma. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "05/2024 - 07/2024",
    role: "Front End Engineer (Intern)",
    company: "RoboCoupler",
    description: `Contributed to the strategic development and implementation of frontend web applications, focusing on UI/UX design and leveraging React to enhance functionality and user experience. Built highly-reliable and scalable products in front-end leveraging its features and flexibility. Deployed a website which takes contact info from the user and waits for approval from the administrator, storing data in the back end.`,
    technologies: ["React", "JavaScript", "HTML5", "CSS3"],
  },
  {
    year: "9/2023 - 12/2023",
    role: "Machine Learning Intern",
    company: "Coincent",
    description: `Learned about CNN and RNN models and applied this knowledge to a project on image classification of cats and dogs. Developed and optimized command-line utilities using Python, which automated repetitive tasks and significantly improved the efficiency of internal processes. Collaborated with senior developers to identify and resolve performance issues, contributing to the overall enhancement of the company's software tools. Gained experience in code review and best practices, leading to more maintainable and reliable code.`,
    technologies: ["Python", "TensorFlow", "Keras"],
  }
];



export const EDUCATION = [
  {
    year: "2021 - Present",
    degree: "B.Tech in Computer Science and Engineering with Specialization in AIML",
    institution: "GITAM University",
    location: "Visakhapatnam, Andhra Pradesh",
    description: `The curriculum focuses on core computer science concepts, including data structures, algorithms, and software engineering, with a specialization in Artificial Intelligence and Machine Learning. Gained hands-on experience with machine learning models, data analysis, and AI applications through projects and lab work.`,
  },
  {
    year: "2019 - 2021",
    degree: "Intermediate in MPC",
    institution: "Sri Chaitanya educational institues",
    location: "Visakhapatnam, Andhra Pradesh",
    description: `Studied Mathematics, Physics, and Chemistry enhancing both academic and practical knowledge.`,
  }
];


export const PROJECTS = [
  {
    title: "Spotify_clone",
    image: project1,
    description:
      "The IT Services Website for BaseTech is a professional platform designed to showcase the company's IT service offerings. The website features a comprehensive layout with detailed information on services, client testimonials, and company background. Developed using React, HTML, and CSS, it provides a clean and modern look to effectively communicate BaseTech’s expertise and offerings to potential clients.",
    technologies: ["HTML", "CSS", "React"],
    github: "https://spotify-clone-lac-rho-63.vercel.app/",
  },
  {
    title: "BookKart",
    image: project4,
    description:
      "BookKart is a frontend-focused, Amazon-like website specifically for buying and selling used books. The platform provides a user-friendly interface for browsing, searching, and purchasing books. Designed using React, HTML, and CSS, BookKart includes features such as user authentication, book listings, and a shopping cart. It ensures a smooth and engaging experience for users looking to buy or sell used books.",
    technologies: ["HTML", "CSS", "react"],
    github: "https://book-kart-ten.vercel.app/",
  },
  {
    title: "Portfolio Website",
    image: project5,
    description:
      "The Portfolio Website serves as a personal showcase of my projects, skills, and professional achievements. Developed with React and Bootstrap, it highlights key projects and includes sections for skills, experience, and contact information. The website features a responsive design and interactive elements to engage visitors and present my work in a polished, professional manner.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    github: "https://portfolio-me-rho.vercel.app/",
  },
  {
    title: "Chat with PDF: A Custom Chatbot for Custom Data",
    image: project6,
    description:
      "Chat with PDF is an innovative chatbot application designed to interact with PDF documents. Utilizing the Gemini API and advanced NLP techniques, this tool enables users to extract and query information from PDFs efficiently. The project involved developing a user-friendly interface and integrating tokenization and embeddings to enhance data interaction. The result is a powerful tool for navigating and extracting insights from complex documents.",
    technologies: ["Python", "NLP", "Gemini API"],
    github: "https://github.com/GANESH300118/Chatbot_custom_data",
  },
];

export const CONTACT = {
  address: "Visakhapatnam, Andhra Pradesh",
  phoneNo: "+91 8688123386",
  email: "Ganeshpillala03@gmail.com",
};