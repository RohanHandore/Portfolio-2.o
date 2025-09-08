'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const projects = [
	{
		title: 'Algo Trading Software',
		description: 'Full fledged working stock market trading algorithm which is back tested on five years data which automatically takes trade on stocks whenever there is a good indication that the stock might fall and it manages all the criteria of risk reward management system including the position sizing. This software is running on my personal AWS account taking live and profitable trades.',
		image: 'https://raw.githubusercontent.com/RohanHandore/Portfolio-2.o/refs/heads/main/public/projects_img/project-1.png',
		github: 'https://github.com/RohanHandore/algo-trading',
		live: 'https://algo-trading-demo.vercel.app',
		tags: ["Python", "Pandas", "AWS", "Algorithmic Trading", "Risk Management", "Data Analysis"]
	},
	{
		title: 'Stock Market Filter',
		description: 'A working stock market analysing application which is using python fast api and hosted on a Docker container using Google Cloud. The application analyzes the current stock index and cheques if it is bullish or bearish and will recommend stocks which has higher chances of going up or going down according to the trend.',
		image: 'https://raw.githubusercontent.com/RohanHandore/Portfolio-2.o/refs/heads/main/public/projects_img/project-2.png',
		github: 'https://github.com/RohanHandore/stock-market-filter',
		live: 'https://stock-filter-demo.vercel.app/',
		tags: ["Python", "FastAPI", "Docker", "Google Cloud", "MongoDB", "Data Analysis"]
	},
	{
		title: 'People I Meet',
		description: 'Everyone has a story with me so this site is specially for them to tell them how we met. It is a MERN stack application of which the frontend part is hosted on Netlify and the API is hosted on Heroku.',
		image: 'https://raw.githubusercontent.com/RohanHandore/Portfolio-2.o/refs/heads/main/public/projects_img/project-3.png',
		github: 'https://github.com/RohanHandore/people-i-meet',
		live: 'https://people-i-meet.netlify.app/',
		tags: ["React.js", "Node.js", "MongoDB", "Express.js", "MERN Stack", "Netlify"]
	},
	{
		title: 'Picture-in-Picture Tool',
		description: 'A Tool which helps coders to work on code while watching tutorial at the same time. This JavaScript project allows users to watch videos in a floating window while coding.',
		image: 'https://raw.githubusercontent.com/RohanHandore/Portfolio-2.o/refs/heads/main/public/projects_img/project-4.png',
		github: 'https://github.com/RohanHandore/picture-in-picture',
		live: 'https://picture-in-picture-demo.vercel.app/',
		tags: ['JavaScript', 'Web APIs', 'HTML5', 'CSS3', 'Tutorial Tool']
	},
	{
		title: 'Quote Generator',
		description: 'If you are someone who constantly needs motivation and also love sharing motivation across social media and help them to grow then this website is for you. I used to tweet very often mostly motivational quotes so I decided to create a site where I can literally explore new quotes using an API and if I like that quote I would directly tweet it to Twitter.',
		image: 'https://raw.githubusercontent.com/RohanHandore/Portfolio-2.o/refs/heads/main/public/projects_img/project-5.png',
		github: 'https://github.com/RohanHandore/quote-generator',
		live: 'https://quote-generator-demo.vercel.app/',
		tags: ['JavaScript', 'Twitter API', 'Quote API', 'Social Media', 'Motivation']
	},
	{
		title: 'Infinite Scroll Image Gallery',
		description: 'A frontend project that fetches and displays images from Unsplash API with infinite scroll for smooth browsing.',
		image: 'https://raw.githubusercontent.com/RohanHandore/Portfolio-2.o/refs/heads/main/public/projects_img/project-6.png',
		github: 'https://github.com/RohanHandore/InfiniteScroll',
		live: 'https://infinite-scroll-demo.vercel.app/',
		tags: ['JavaScript', 'Unsplash API', 'HTML', 'CSS', 'Infinite Scroll']
	},
	{
		title: 'Desktop Cleaner Script',
		description: 'A cross-platform automation tool that organizes files into categorized folders (Documents, Images, Videos, etc.) based on extensions.',
		image: 'https://raw.githubusercontent.com/RohanHandore/Portfolio-2.o/refs/heads/main/public/projects_img/project-1.png',
		github: 'https://github.com/RohanHandore/Desktop-Cleaner-Script',
		live: '',
		tags: ['Python', 'Bash', 'Windows CMD', 'Automation', 'File Organization']
	},
	{
		title: 'JARVIS OpenAI Voice Assistant',
		description: 'An AI-powered voice assistant inspired by Iron Man\'s J.A.R.V.I.S., using OpenAI\'s GPT model for natural conversations with real-time speech recognition and text-to-speech.',
		image: 'https://raw.githubusercontent.com/RohanHandore/Portfolio-2.o/refs/heads/main/public/projects_img/project-2.png',
		github: 'https://github.com/RohanHandore/JARVIS-OpenAI-Voice-Assistant',
		live: '',
		tags: ['Python', 'OpenAI API', 'gTTS', 'SpeechRecognition', 'Pygame', 'AI']
	},
	{
		title: 'Serverless Password Manager',
		description: 'A secure serverless application for managing encrypted passwords. Uses client-side encryption with AWS cloud storage for maximum security.',
		image: 'https://raw.githubusercontent.com/RohanHandore/Portfolio-2.o/refs/heads/main/public/projects_img/project-3.png',
		github: 'https://github.com/RohanHandore/serverless-password-manager',
		live: '',
		tags: ['Python', 'AWS DynamoDB', 'AWS KMS', 'Serverless Framework', 'Security']
	},
	{
		title: 'Workout Tracker',
		description: 'A simple web app to log and track workout routines, exercises, and progress.',
		image: 'https://raw.githubusercontent.com/RohanHandore/Portfolio-2.o/refs/heads/main/public/projects_img/project-4.png',
		github: 'https://github.com/RohanHandore/workout-tracker',
		live: '',
		tags: ['JavaScript', 'HTML', 'CSS', 'Web App', 'Fitness']
	},
	{
		title: 'E-Cell Website – NIT Silchar',
		description: 'Contributed to the official website of the Entrepreneurship Cell, NIT Silchar, helping students promote entrepreneurship through a modern React/Vite site.',
		image: 'https://raw.githubusercontent.com/RohanHandore/Portfolio-2.o/refs/heads/main/public/projects_img/project-5.png',
		github: 'https://github.com/RohanHandore/e-cell-website-22',
		live: '',
		tags: ['JavaScript', 'React', 'Vite', 'Open Source', 'Contribution']
	},
	{
		title: 'DigestClub – Team Knowledge Platform',
		description: 'Worked on an open-source platform that helps teams curate and share knowledge through a digest system.',
		image: 'https://raw.githubusercontent.com/RohanHandore/Portfolio-2.o/refs/heads/main/public/projects_img/project-6.png',
		github: 'https://github.com/RohanHandore/digestclub',
		live: '',
		tags: ['TypeScript', 'Node.js', 'Open Source', 'Knowledge Management']
	},
];

const Projects = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto">
			<ScrollAnimation>
				<h2 className="text-4xl font-bold mb-12 gradient-text">Featured Projects</h2>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<ScrollAnimation key={project.title}>
						<div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm">
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map(tag => (
										<span key={tag} className="px-2 py-1 text-sm bg-purple-500/20 rounded">
											{tag}
										</span>
									))}
								</div>
								<div className="flex space-x-4">
									<a href={project.github} target="_blank" rel="noopener noreferrer"
										className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
										<Github className="w-4 h-4" />
										<span>Code</span>
									</a>
									{project.live && (
										<a href={project.live} target="_blank" rel="noopener noreferrer"
											className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
											<ExternalLink className="w-4 h-4" />
											<span>Live</span>
										</a>
									)}
								</div>
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Projects;