import college from '../assets/rit.png';
import school from '../assets/school.jpg';
import ramco from '../assets/rsl.png';
import doriangray from '../assets/DorianGray.jpg'
import davinci from '../assets/davincicode.jpg'

export const portfolioData = {
  "personal": {
    "name": "ANNLYN SARAH",
    "title": "Full Stack Developer",
    "email": "annlyn.sarahjp@gmail.com",
    "phone": "+91 90360 55739",
    "address": "10/30A, Singh Bhavan, Thirumukkulam street, Srivilliputtur 626-125",
    "github": "https://github.com/annlyn",
    "linkedin": "https://www.linkedin.com/in/annlyn-sarah/",
    "leetcode": "https://leetcode.com/u/Annlyn/",
    "photo": "/profile-photo.jpg"
  },
  "about": {
    "greeting": "Hey it's Ann!",
    "description": "A passionate developer blending creativity and code to bring ideas to life. I love crafting functional, clean, and user-friendly experiences that feel as good as they look. Coming from a town rich in culture and beauty, I carry that same inspiration into my work - creating digital experiences that reflect the harmony and elegance they deserve."
  },
  "experience": [
    {
      "id": 2,
      "company": "Ramco Systems",
      "position": "Intern - Project Trainee",
      "duration": "Feb 2023 - Aug 2023",
      "description": "Gained hands-on experience in software development, contributing to real-world projects and collaborating with cross-functional teams",
      "image": ramco,
      "details": {
        "responsibilities": ["Developed responsive web applications", "Collaborated with design teams", "Maintained code quality"],
        "technologies": ["TypeScript", "SCSS", "React", "Git"]
      }
    },
    {
      "id": 1,
      "company": "Ramco Systems",
      "position": "Software Engineer 1",
      "duration": "Sept 2023 - Present",
      "description": "Kept me immersed in technology every day — solving complex problems, innovating solutions, and collaborating with talented teams to deliver robust, high-quality software ",
      "image": ramco,
      "details": {
        "responsibilities": ["Developed and maintained responsive web applications", "Configured Jenkins pipeline to minimize the build time", "Established mobile-web communication bridge to support cross-platform interactions and device sync-up"],
        "technologies": ["React", "Node.js", "Redux", "GraphQL", "Jenkins"]
      }
    }
  ],
  "education": [
    {
      "id": 1,
      "institution": "Ramco Institute of Technology",
      "degree": "BE CSE",
      "year": "Aug 2019 - May 2023",
      "description": "The place that brought like-minded friends together, laid foundation for our careers, and carved me as I am today",
      "image": college,
      "details": {
        "gpa": "8.27/10",
        "honors": ["NCC"],
        "technologies": ["MERN Stack", "Data Structures", "Object Oriented Programming"]
      }
    },
    {
      "id": 2,
      "institution": "Srivi Lions Matic Higher Secondary School",
      "degree": "SSLC & HSC",
      "year": "2019",
      "description": "The place where I grew up, nurtured my imagination, fed my curiosity, and shaped my discipline",
      "image": school,
      "details": {
        "honors": ["Rajya Purushkar"],
        "percentage": "95% in SSLC, 79%% in HSC"
      }

    }
  ],
  "interests": [
    {
      "id": 1,
      "title": "Book",
      "backgroundImage": doriangray,
      "caption": "Picture of Dorian Gray",
      "summary": "The horrible fact that we live in a world where people are judged by their appearance and not by their character. Oscar Wilde made a masterpiece of how the influence of vanity and superficiality can corrupt a person's soul.",
    },
    {
      "id": 2,
      "title": "Book",
      "backgroundImage": davinci,
      "caption": "The Da Vinci Code",
      "summary": "The mind bending suspense at the end kept me going and i can't stop looking to abyss after reading.",
    },
  ],
  "projects": [
    {
      "id": 1,
      "title": "E-commerce Platform",
      "image": "/placeholder-project-1.jpg",
      "technologies": ["React", "Node.js", "MongoDB"],
      "route": "/projects/ecommerce",
      "isCompleted": false
    },
    {
      "id": 2,
      "title": "Task Management App",
      "image": "/placeholder-project-2.jpg",
      "technologies": ["Vue.js", "Express", "PostgreSQL"],
      "route": "/projects/task-manager",
      "isCompleted": false
    },
    {
      "id": 3,
      "title": "Weather Dashboard",
      "image": "/placeholder-project-3.jpg",
      "technologies": ["React", "TypeScript", "API Integration"],
      "route": "/projects/weather-dashboard",
      "isCompleted": false
    }
  ],
  "technologies": [
    "React",
    "TypeScript",
    "Node.js",
    "JavaScript",
    "CSS3",
    "HTML5",
    "Tailwind",
    "Git",
    "GraphQL",
    "Redux",
    "Jenkins",
    "REST APIs",
    "MongoDB",
    "SQL",
    "Python",
    "Java",

  ]
}