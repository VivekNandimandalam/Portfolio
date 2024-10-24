/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vivek Nandimandalam",
  title: "Hi all, I'm Vivek",
  subTitle: emoji(
    "Adaptable and tech-savvy professional with expertise in SQL, Power BI, Python, and React, capable of delivering impactful solutions and insights. Proficient in using modern tools, including Azure, to solve complex challenges and drive success."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1VJM0y9IfVWKrrq6h2YXdW4X20X022eBk/view?usp=drivesdk", // Resume link
  displayGreeting: true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/VivekNandimandalam",
  linkedin: "https://www.linkedin.com/in/vivek-nandimandalam1205/",
  gmail: "viveknandimandalam463@gmail.com",
  gitlab: null,
  facebook: null,
  medium: "https://medium.com/@viveknandimandalam463",
  stackoverflow: null,
  instagram:"https://www.instagram.com/ivvek._/profilecard/?igsh=NHdyMzhvNWFpNWdy",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE ABOUT DATA ANALYSIS, BUSINESS INSIGHTS, AND BUILDING EFFECTIVE SOLUTIONS",
  skills: [
    emoji(
      "⚡ Perform data analysis and create powerful visualizations using Power BI and Python"
    ),
    emoji("⚡ Develop interactive and responsive web applications using React and Flask"),
    emoji(
      "⚡ Leverage cloud services such as Microsoft Azure for scalable and efficient solutions"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "reactjs",
    fontAwesomeClassname: "fab fa-react"
  },

  {
    skillName: "sql-database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "postgreSQL",
    fontAwesomeClassname: "fas fa-egg"  // Changed icon to represent PostgreSQL
  },
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "azure",
    fontAwesomeClassname: "fas fa-cloud"
  },
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "Powerbi",
    fontAwesomeClassname: "fas fa-chart-bar"
  }
],


  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
  
      {
        schoolName: "SRM INSTITUTE OF SCIENCE AND TECHNOLOGY",
        logo: require("./assets/images/Srm_Logo.png"),
        subHeader: "B.Tech in Computer Science and Engineering",
        duration: "September 2020 - May 2024",
        CGPA: "9.03"
      },
      // other schools
  
    
    {
      schoolName: "Narayana Junior College",
      logo: require("./assets/images/NarayanaClg.png"),
      subHeader: "12th Standard",
      duration: "June 2018  - May 2024",
      Percentage: "91"
    
    },
    {
      schoolName: "Narayana High School",
      logo: require("./assets/images/NarayanaClg.png"),
      subHeader: "10th Standard",
      duration: "June 2017  - May 2018",
      GPA: "9.3"

    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Sql",
      progressPercentage: "80%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data CoE Intern",
      company: "Dexian Technologies",
      companylogo: require("./assets/images/DexianLogo.jpg"),
      date: "June 2024 – Present",
      desc: "Contributed to data-driven projects by utilizing Python, SQL, Power BI, and cloud technologies while developing solutions to meet business goals.",
      descBullets: [
        "Gained proficiency in Python, SQL, and Power BI, applying them to real-world projects.",
        "Completed tasks supporting business initiatives with data visualization and analytics.",
        "Attended workshops on Generative AI and Azure, further enhancing technical knowledge.",
        "Achieved Microsoft Azure Fundamentals (AZ-900) certification.",
        "Developed and executed a Power BI project to create impactful data visualizations.",
        "Built a connection between Snowflake and Python to retrieve databases, schemas, tables, and views.",
        "Explored Snowflake and Python integration for data management solutions.",
        "Worked on Databricks for cost optimization and process efficiency.",
        "Created a text-to-speech system converting text to audio in 10 languages for data transformation.",
        "Currently working on a data migration tool using AI to automate DDL migration from OracleDB to MS SQL Server."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};


// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some personal projects that I've worked on",
  projects: [
    {
      image: require("./assets/images/TextToSql.png"), // Replace with your project image
      projectName: "Project One",
      projectDesc: "A detailed description of Project One, highlighting its key features and purpose.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/VivekNandimandalam/TextToSql" // Replace with your GitHub project link
        }
      ]
    },
    {
      image: require("./assets/images/TextToSql.png"), // Replace with your project image
      projectName: "Project Two",
      projectDesc: "A detailed description of Project Two, highlighting its key features and technologies used.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/your-username/project-two" // Replace with your GitHub project link
        }
      ]
    }
    // Add more projects here as needed
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = { 
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Achievements, Certifications, Award Letters, and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle: "Certified in Microsoft Azure Fundamentals, showcasing proficiency in Azure cloud services.",
      image: require("./assets/images/azureLogo.png"), // Ensure the correct image path
      imageAlt: "Azure Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://learn.microsoft.com/en-us/users/viveknandimandalam-1700/credentials/d01cd2bd4a48807f?ref=https%3A%2F%2Fwww.linkedin.com%2F" // Replace with actual certificate link
        }
      ]
    },
    {
      title: "AWS Academy Graduate - Data Analytics",
      subtitle: "Graduated from AWS Academy with a specialization in Data Analytics.",
      image: require("./assets/images/awsLogo.png"), // Ensure the correct image path
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.credly.com/badges/ccc05c01-56dd-4223-874e-16c54bf19d10/linked_in_profile" // Replace with actual certificate link
        }
      ]
    },
    {
      title: "Oracle Academy Database Foundations Learner",
      subtitle: "Completed Database Foundations course from Oracle Academy.",
      image: require("./assets/images/oracleLogo.png"), // Ensure the correct image path
      imageAlt: "Oracle Logo",  
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/10NfpvG-b9wlBK_Mp_kuNGe6PptaH3R7j/view" // Replace with actual certificate link
        }
      ]
    },
    {
      title: "HackTheBox SRMIST Participation Certification",
      subtitle: "Participated in HackTheBox competition organized by SRMIST.",
      image: require("./assets/images/hackTheBoxLogo.png"), // Ensure the correct image path
      imageAlt: "HackTheBox Logo",
      footerLink: [
        {
          name: "View Details",
          url: "https://certificate.givemycertificate.com/c/882c41c6-c622-479e-8164-7befbc8186bd" // Replace with actual competition details
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to see my resume", // Updated subtitle to reflect the change
  display: true // Set false to hide this section, defaults to true
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "6304527496",
  email_address: "viveknandimandalam463@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
