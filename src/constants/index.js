import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    carrent,
    gssoc,
    jobit,
    tripguide,
    threejs,
    ssoc,
    hacktoberfest,
  } from "../assets";
  
  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Open Source Contributor",
      company_name: "Social Summer of Code 2023",
      icon: ssoc,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Aug 2023",
      points: [
        "Open source contribution encourages collaboration among developers around the world.",
        "Contributing to open source projects is an excellent way to enhance your programming skills.",
        "Potential employers or clients often look for evidence of your ability to work in a team, write quality code, and contribute to open source projects.",
        "Engaging in open source projects allows you to connect with like-minded individuals and establish professional relationships.",
      ],
    },
    {
      title: "Open Source Contributor",
      company_name: "GirlScript Summer of Code 2023",
      icon: gssoc,
      iconBg: "#383E56",
      date: "May 2023 - Aug 2023",
      points: [
        "Open source contribution encourages collaboration among developers around the world.",
        "Contributing to open source projects is an excellent way to enhance your programming skills.",
        "Potential employers or clients often look for evidence of your ability to work in a team, write quality code, and contribute to open source projects.",
        "Engaging in open source projects allows you to connect with like-minded individuals and establish professional relationships.",
      ],
    },
    {
      title: "Open Source Contributor",
      company_name: "Hacktoberfest 2022",
      icon: hacktoberfest,
      iconBg: "#383E56",
      date: "Oct 2022 - Oct 2022",
      points: [
        "Open source contribution encourages collaboration among developers around the world.",
        "Contributing to open source projects is an excellent way to enhance your programming skills.",
        "Potential employers or clients often look for evidence of your ability to work in a team, write quality code, and contribute to open source projects.",
        "Engaging in open source projects allows you to connect with like-minded individuals and establish professional relationships.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "LetsNote",
      description:
        "Web-based platform that allows users to keep notes safely. It also allows add, edit and delete notes. It allows the users to create accounts to safely keep our notes.",
      tags: [
        "react",
        "mongodb",
        "nodejs"
      ],
      image: carrent,
      source_code_link: "https://github.com/kartikjoshi267/letsnote",
    },
    {
      name: "Youtube Video Summarizer",
      description:
        "Chrome Extension that summarizes a youtube video in lesser words to save time.",
      tags: [
        "python",
        "flask",
        "webapp"
      ],
      image: jobit,
      source_code_link: "https://github.com/divyks/ytsummary",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, navLinks };