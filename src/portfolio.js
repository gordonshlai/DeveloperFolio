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
  username: "Gordon Lai",
  title: "Hi all, I'm Gordon",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 expertise on building Web and Mobile applications with JavaScript / React.js / React Native / Node.js / and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ZrarqtG27Jev-eHcc20uPNX9PbAN2SEi/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/gordonshlai",
  // linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "gordonshlai@outlook.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/gordon.lai.9887/",
  instagram: "https://www.instagram.com/gordon8210/?hl=en",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia

  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "Frameworks and programming languages",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Progressive Web Applications ( PWA ) in Single Page Application ( SPA ) Stacks"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "GraphQL",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JAVA",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Strathclyde",
      logo: "https://res.cloudinary.com/djoy89ghi/image/upload/v1646409929/portfolio/education/strathclydeLogo_u2gxig.webp",
      subHeader: "Master of Science in Software Development",
      duration: "September 2019 - September 2020",
      desc: "Honor: Distinction"
      // descBullets: [
      //   "Built a cross platform mobile application for the university",
      //   "Technologies: React native, Node.js, MongoDB"
      // ]
    },
    {
      schoolName: "The University of Manchester",
      logo: "https://res.cloudinary.com/djoy89ghi/image/upload/v1646409989/portfolio/education/university-of-manchester.svg",
      subHeader: "Master of Engineering in Chemical Engineering",
      duration: "September 2014 - July 2018",
      desc: "Honor: Second Class Division One ( 2 : 1 )"
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "React.js / React Native.js", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Node.js + GraphQL",
      progressPercentage: "70%"
    },
    {
      Stack: "Laravel (PHP)",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Built by Pixel",
      companylogo:
        "https://res.cloudinary.com/djoy89ghi/image/upload/v1646410617/portfolio/work-experience/built-by-pixel_klwmcd.webp",
      date: "Jul 2021 – Present",
      desc: "Built and maintain Web and Mobile applications (Android and iOS), including:",
      descBullets: [
        "E-commerce platforms",
        "E-learning platforms",
        "Customer Relationship Management Systems (CRM)",
        "Content Management Systems (CMS), etc."
      ]
    },
    {
      role: "Mobile App Developer",
      company: "Warrantywise",
      companylogo:
        "https://res.cloudinary.com/djoy89ghi/image/upload/v1646410615/portfolio/work-experience/warrantywise-logo_bzdjyt.webp",
      date: "Nov 2020 – Jul 2021",
      desc: "Built the mobile application from scratch and maintained the web applications for trading between car dealerships and selling warranties."
    },
    {
      role: "Software Engineer Intern",
      company: "Digital Applications International",
      companylogo:
        "https://res.cloudinary.com/djoy89ghi/image/upload/v1646410619/portfolio/work-experience/dai-logo_hahne6.webp",
      date: "Sep 2018 – Jan 2019",
      desc: "Implements and evaluates the software, provides subsequent support and training for users in logistic industry."
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
  subtitle: "SOME OF MY RECENT WORKS",
  projects: [
    {
      images: [
        "https://res.cloudinary.com/djoy89ghi/image/upload/v1646411349/portfolio/wise-dealer/home-screen_mpyska.webp",
        "https://res.cloudinary.com/djoy89ghi/image/upload/v1646411347/portfolio/wise-dealer/trade-screen_pigeah.webp",
        "https://res.cloudinary.com/djoy89ghi/image/upload/v1646411339/portfolio/wise-dealer/trade-detail-screen_nbj60z.webp",
        "https://res.cloudinary.com/djoy89ghi/image/upload/v1646411337/portfolio/wise-dealer/warranty-screen_wy07nk.webp",
        "https://res.cloudinary.com/djoy89ghi/image/upload/v1646411341/portfolio/wise-dealer/message-screen_xoxrwe.webp",
        "https://res.cloudinary.com/djoy89ghi/image/upload/v1646411343/portfolio/wise-dealer/message-detail-screen_bauwiy.webp",
        "https://res.cloudinary.com/djoy89ghi/image/upload/v1646411351/portfolio/wise-dealer/account-screen_k0uqh7.webp"
      ],
      projectName: "Wise-Dealer App",
      projectDesc:
        "Car dealership App for The UK Best Warranty Provider - Warrantywise.",
      footerLink: [
        {
          name: "More Screenshots",
          url: "https://res.cloudinary.com/djoy89ghi/video/upload/v1646155318/samples/elephants.mp4"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      images: [
        "https://res.cloudinary.com/djoy89ghi/image/upload/v1646155304/samples/food/pot-mussels.jpg"
      ],
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "More Screenshots",
          url: "https://res.cloudinary.com/djoy89ghi/video/upload/v1646155318/samples/elephants.mp4"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      images: [
        "https://res.cloudinary.com/djoy89ghi/image/upload/v1646155303/samples/food/fish-vegetables.jpg"
      ],
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "More Screenshots",
          url: "https://res.cloudinary.com/djoy89ghi/video/upload/v1646155318/samples/elephants.mp4"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      images: [
        "https://res.cloudinary.com/djoy89ghi/image/upload/v1646155302/samples/food/dessert.jpg"
      ],
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "More Screenshots",
          url: "https://res.cloudinary.com/djoy89ghi/image/upload/v1646155302/samples/food/dessert.jpg"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      images: [
        "https://res.cloudinary.com/djoy89ghi/image/upload/v1646155304/samples/food/pot-mussels.jpg"
      ],
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "More Screenshots",
          url: "https://res.cloudinary.com/djoy89ghi/video/upload/v1646155318/samples/elephants.mp4"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      images: [
        "https://res.cloudinary.com/djoy89ghi/image/upload/v1646155309/samples/landscapes/beach-boat.jpg"
      ],
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        },
        {
          name: "More Screenshots",
          url: "https://res.cloudinary.com/djoy89ghi/image/upload/v1646155298/sample.jpg"
        },
        {
          name: "More Screenshots",
          url: "https://res.cloudinary.com/djoy89ghi/image/upload/v1646155298/sample.jpg"
        },
        {
          name: "More Screenshots",
          url: "https://res.cloudinary.com/djoy89ghi/image/upload/v1646155298/sample.jpg"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "gordonshlai@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

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
  twitterDetails
};
