import React, { createContext, useReducer } from 'react';
import { ResumeJSONReducer } from '../reducer/ResumeJSONReducer';

export const ResumeJSONContext = createContext();

export const ResumeJSONProvider = props => {
  const { children } = props;

  const resume = {
    header: {
      userName: "MOHD. REHMAN BAIG",
      designation: "UI Developer",
      summary: "UI Developer well versed in creating reusable independent components using ReactJS, seeking an opportunity in an esteemed organization so as to improve my existing skills and expand on it."
    },
    contact: [
      {
        name: "email",
        value: "Rehman.2468@gmail.com",
        isVisible: true,
      },
      {
        name: "mobile",
        value: "+91-7415151884",
        isVisible: true,
      },
      {
        name: "location",
        value: "Banagalore, India",
        isVisible: true,
      },
      {
        name: "linkedIn",
        value: "www.linkedin.com/in/rehman-2468",
        isVisible: true,
      },
      {
        name: "github",
        value: "https://github.com/MD-REHMAN",
        isVisible: false,
      },
    ],
    body: [
      {
        name: "WORK EXPERIENCE",
        type: "singleItemList",
        mainSide: true,
        priority: 1,
        value: {
          header: "Associate UI Developer",
          listHeader: "Apostek Software LLP",
          startDate: "09 / 2018",
          endDate: "Present",
          location: "Bangalore, India",
          summary: {
            name: "Achievements / Tasks",
            list: [
              "Developing reusable components using HTML5, CSS3, AJAX, and JavaScript while taking advantages of libraries like ReactJS, JQuery, Bootsrap, and LESS in an Agile Environment.",
              "Adding Amplitude analytics tracking to track CTAs",
              "Migranking existing architecture to ReactJS.",
              "Giving code reviews and peer programming when needed.",
            ]
          }
        },
        isVisible: true,
      },
      {
        name: "VOLUNTEER EXPERIENCE",
        type: "singleItemList",
        mainSide: true,
        priority: 1,
        value: {
          header: "Software Developer [Intern]",
          listHeader: "Innolat Technologies Pvt. Ltd.",
          startDate: "06 / 2017",
          endDate: "03 / 2018",
          location: "Raipur, India",
          summary: {
            name: "Achievements / Tasks",
            list: [
              "Youngest intern",
              "Wireframe Designer",
              "UI Designer",
              "Mentor",
              "Instructor",
              "Project Guide",
            ]
          }
        },
        isVisible: true,
      },
      {
        name: "PERSONAL PROJECTS",
        type: "multiItemList",
        priority: 5,
        mainSide: true,
        value: [
          {
            header: "Chatter-box",
            startDate: "2018",
            endDate: null,
            location: null,
            summary: {
              name: null,
              list: [
                "It's a real-time chatting web application, allowing user to chat with other user's of the application.",
                "Concepts Used : ReactJS, Bootstrap, Firestore, Redux.",
              ],
            },
            isVisible: true,
          },
          {
            header: "HRMS [Human Resource Management System]",
            startDate: "2016",
            endDate: null,
            location: null,
            summary: {
              list: [
                "It’s a web application that provide, employee management, custom payslip generation and leave request approval system.",
                "Concepts Used : AngularJS, Bootstrap, MS SQL Server, OData, Rest API.",
              ],
            },
            isVisible: true,
          },
          {
            header: "Crash [Android Game]",
            startDate: "2016",
            endDate: null,
            location: null,
            summary: {
              list: [
                "It's an endless racing game.",
                "It's ranked ﬁrst in the tanning batch 2016, hence uploaded to google play store.",
                "Concepts Used : Android and Java.",
              ],
            },
            isVisible: true,
          },
        ],
        isVisible: true,
      },
      {
        name: "TECHNICAL SKILLS",
        type: "multiItemList",
        priority: 3,
        value: [
          {
            header: "Web Technologies",
            startDate: null,
            endDate: null,
            location: null,
            summary: {
              name: null,
              list: [
                "HTML5, CSS3, JavaScript, Ajax, JSON",
              ],
            },
            isVisible: true,
          },
          {
            header: "Framework and Libraries",
            startDate: null,
            endDate: null,
            location: null,
            summary: {
              name: null,
              list: [
                "ReactJS, React Hooks, Redux, JQuery, Handlebars, Bootstrap, LESS",
              ],
            },
            isVisible: true,
          },
          {
            header: "Other Tools",
            startDate: null,
            endDate: null,
            location: null,
            summary: {
              name: null,
              list: [
                "Git, Gulp, npm, yarn, JIRA",
              ],
            },
            isVisible: true,
          },
        ],
        isVisible: true,
      },
      {
        name: "KEY SKILLS",
        type: "keyPoints",
        priority: 1,
        diableranking: true,
        value: [
          {
            header: "ReactJS",
            ranking: null,
          },
          {
            header: "React Hooks",
            ranking: null,
          },
          {
            header: "Redux",
            ranking: null,
          },
          {
            header: "CSS",
            ranking: null,
          },
          {
            header: "LESS",
            ranking: 2,
          },
          {
            header: "JavaScript",
            ranking: 3,
          },
          {
            header: "REST",
            ranking: 2,
          },
          {
            header: "Git",
            ranking: 3,
          },
          {
            header: "Handlebars",
            ranking: 4,
          },
          {
            header: "Ajax",
            ranking: null,
          },
          {
            header: "Bootstrap",
            ranking: 5,
          },
        ],
        isVisible: true,
      },
      {
        name: "TRANING",
        type: "multiItemList",
        priority: 3,
        value: [
          {
            header: "Bootstrap and SQL",
            startDate: "06 / 2016",
            endDate: null,
            location: null,
            summary: {
              name: null,
              list: [
                "from Innolat Technologies Pvt Ltd.",
              ],
            },
            isVisible: true,
          },
          {
            header: "AngularJS",
            startDate: "07 / 2016",
            endDate: null,
            location: null,
            summary: {
              name: null,
              list: [
                "from Innolat Technologies Pvt Ltd.",
              ],
            },
            isVisible: true,
          },
          {
            header: "Java and Android",
            startDate: "06 / 2016",
            endDate: null,
            location: null,
            summary: {
              name: null,
              list: [
                "from Innolat Technologies Pvt Ltd [by RCPL].",
              ],
            },
            isVisible: true,
          },
        ],
        isVisible: true,
      },
      {
        name: "EDUCATION",
        type: "multiItemList",
        priority: 4,
        value: [
          {
            header: "BE [Computer Science and Engineering]",
            listHeader: "Government Engineering College",
            startDate: "2014",
            endDate: "2018",
            location: null,
            summary: {
              name: null,
            },
            isVisible: true,
          },
          {
            header: "Higher Secondary",
            listHeader: "Krishna Public School, Raipur",
            startDate: "2014",
            endDate: null,
            location: null,
            isVisible: true,
            summary: {
              name: null,
            },
          },
        ],
        isVisible: true,
      },
      {
        name: "EXPOSE TO",
        type: "keyPoints",
        priority: 3,
        diableranking: true,
        value: [
          {
            header: "AngularJS",
            ranking: null,
          },
          {
            header: "Core Java",
            ranking: null,
          },
          {
            header: "Android",
            ranking: null,
          },
          {
            header: "AxureRP",
            ranking: null,
          },
          {
            header: "OData",
            ranking: null,
          },
          {
            header: "SQL",
            ranking: null,
          },
          {
            header: "Blender",
            ranking: null,
          },
        ],
        isVisible: true,
      },
      {
        name: "HOBBIES",
        type: "keyPoints",
        priority: 4,
        diableranking: true,
        value: [
          {
            header: "Playing",
            ranking: null,
          },
          {
            header: "Exploring",
            ranking: null,
          },
          {
            header: "Doodling",
            ranking: null,
          },
          {
            header: "Photography",
            ranking: null,
          },
        ],
        isVisible: false,
      },
    ]
  }

  const [state, dispatch] = useReducer(ResumeJSONReducer, resume)

  return (
    <ResumeJSONContext.Provider value={ { state, dispatch } }>
      { children }
    </ResumeJSONContext.Provider>
  )
}