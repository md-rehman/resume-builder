import React, { createContext, useReducer } from "react";
import { ResumeJSONReducer } from "../reducer/ResumeJSONReducer";

export const ResumeJSONContext = createContext();

export const ResumeJSONProvider = ({ children, ...props }) => {
	const resume = {
		header: {
			userName: "MOHD. REHMAN BAIG",
			designation: "Software Engineer",
			summary:
				"I am Developer who loves to design, develop, explore, and most importantly code. I am striving to learn, improve and build something new 🥶. And always ready to collaborate with great minds to build something amazing.",
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
				isVisible: false,
			},
			{
				name: "linkedIn",
				value: "www.linkedin.com/in/rehman-2468",
				isVisible: false,
			},
			{
				name: "github",
				value: "https://github.com/MD-REHMAN",
				isVisible: true,
			},
			{
				name: "twitter",
				value: "https://twitter.com/_mdrehman",
				isVisible: true,
			},
		],
		body: [
			{
				name: "WORK EXPERIENCE",
				type: "multiItemList",
				mainSide: true,
				priority: 1,
				value: [
					{
						header: "Software Engineer",
						listHeader: "Geekyants",
						startDate: "07 / 2020",
						endDate: "Present",
						location: "Bangalore, India",
						summary: {
							name: "Achievements / Tasks",
							list: [
								"GeekyAnts 🐜 is a Product and Services development company",
								"And I am part of their R&D Team, where we make things only to break it 😝",
								"Core developer of NativeBase 3.0, an open-source universal component library, and more",
								"Developer and designer 🎨 of NatveBase's KitchenSink App",
								"Lead in some adjacent side projects",
								"Great mentor to new joiners. I have juniors to vouch for that 😁",
							],
						},
						isVisible: true,
					},
					{
						header: "Associate UI Developer",
						listHeader: "Apostek Software LLP",
						startDate: "09 / 2018",
						endDate: "06 / 2020",
						location: "Bangalore, India",
						summary: {
							name: "Achievements / Tasks",
							list: [
								"Apostek (⚰️ closed in the pandemic 😢) was a Service-based Company",
								// "Developing reusable components using HTML5, CSS3, AJAX, and JavaScript while taking advantages of libraries like ReactJS, JQuery, Bootstrap, and LESS in an Agile Environment.",
								// "Adding Amplitude analytics tracking to track CTAs",
								"Where I was working on a Monolithic java-based product (which should not be named 🤐)",
								"And here I got the chance to see ancient 🦖 code written in JSP and Dojo",
								// "Migrating existing architecture to ReactJS",
								"But I mainly migrate existing modules to ReactJS or create brand new ones.",
								"And giving code reviews and peer programming when needed",
							],
						},
						isVisible: true,
					},
				],
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
							"Innolat is a Product-based Software Company + Skill Development Center",
							"And as I was their youngest intern, and I did a variety 🥷 of work here like,",
							"Wireframe Designer, I made them using Azure RP",
							"UI Designer, and then create them using code",
							"Mentor, trust me I use to mentor people older than me",
							// "Instructor, more or less the same point as above only keeping it increase content",
							"Project Guide, guide the trainees on their project",
						],
					},
					isVisible: true,
				},
				isVisible: true,
			},
			{
				name: "PERSONAL PROJECTS",
				type: "multiItemList",
				priority: 5,
				mainSide: false,
				value: [
					{
						header: "Resume Builder",
						startDate: "2020",
						endDate: null,
						location: null,
						summary: {
							name: null,
							list: [
								"Instead of making a resume, I made an app to make resumes 😬",
								"Concepts Used: ReactJS",
							],
						},
						isVisible: true,
					},
					{
						header: "Chatter-box",
						startDate: "2018",
						endDate: null,
						location: null,
						summary: {
							name: null,
							list: [
								"It's a real-time chatting web application, allowing the user to chat with other user's of the application.",
								"Concepts Used: ReactJS, Bootstrap, Firestore, Redux",
							],
						},
						isVisible: false,
					},
					{
						header: "HRMS [Human Resource Management System]",
						startDate: "2016",
						endDate: null,
						location: null,
						summary: {
							list: [
								"It’s a web application that provides, employee management, custom payslip generation, and a leave request approval system.",
								"Concepts Used: AngularJS, Bootstrap, MS SQL Server, OData, Rest API.",
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
								"Concepts Used: Android and Java.",
							],
						},
						isVisible: false,
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
							list: ["HTML5, CSS3, JavaScript, Ajax, JSON"],
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
								"ReactJS, ReactNative, Redux, JQuery (Not a fan), Handlebars, Bootstrap, LESS",
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
							list: ["Git, Gulp, npm, yarn, JIRA"],
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
						header: "ReactNative",
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
						header: "TypeScript",
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
							list: ["from Innolat Technologies Pvt Ltd."],
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
							list: ["from Innolat Technologies Pvt Ltd."],
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
							list: ["from Innolat Technologies Pvt Ltd [by RCPL]."],
						},
						isVisible: true,
					},
				],
				isVisible: false,
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
					// {
					// 	header: 'Higher Secondary',
					// 	listHeader: 'Krishna Public School, Raipur',
					// 	startDate: '2014',
					// 	endDate: null,
					// 	location: null,
					// 	isVisible: true,
					// 	summary: {
					// 		name: null,
					// 	},
					// },
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
		],
	};

	const [state, dispatch] = useReducer(ResumeJSONReducer, resume);

	return (
		<ResumeJSONContext.Provider value={{ state, dispatch }}>
			{children}
		</ResumeJSONContext.Provider>
	);
};
