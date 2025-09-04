'use client';

import { motion } from 'framer-motion';
import {
	Code2, Layout, Server, Database, MessageSquare, Lightbulb, Users, Brain,
	Cloud, Terminal, Wrench,
} from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import {
	CppLogo, PythonLogo, JavaScriptLogo, HTML5Logo,
	CSSLogo, ReactLogo, TypeScriptLogo, NodeLogo, MySQLLogo,
	MongoDBLogo, VSCodeLogo, GitLogo, TailwindLogo, ShadCNLogo, NextjsLogo,
	VirtualBoxLogo, VercelLogo
} from '@/components/TechLogos';

const skills = [
	{
		category: 'Programming Languages',
		icon: <Code2 className="w-6 h-6" />,
		items: [
			{ name: 'JavaScript', icon: <JavaScriptLogo /> },
			{ name: 'Java', icon: <CppLogo /> },
			{ name: 'Python', icon: <PythonLogo /> },
			{ name: 'C/C++', icon: <CppLogo /> }
		]
	},
	{
		category: 'Web Development',
		icon: <Layout className="w-6 h-6" />,
		items: [
			{ name: 'HTML5', icon: <HTML5Logo /> },
			{ name: 'CSS3', icon: <CSSLogo /> },
			{ name: 'React.js', icon: <ReactLogo /> },
			{ name: 'Node.js', icon: <NodeLogo /> }
		]
	},
	{
		category: 'Frameworks & Libraries',
		icon: <Server className="w-6 h-6" />,
		items: [
			{ name: 'Express.js', icon: <NodeLogo /> },
			{ name: 'Bootstrap', icon: <TailwindLogo /> },
			{ name: 'Pandas', icon: <PythonLogo /> },
			{ name: 'MVC', icon: <Code2 className="w-4 h-4" /> }
		]
	},
	{
		category: 'Cloud & DevOps',
		icon: <Cloud className="w-6 h-6" />,
		items: [
			{ name: 'AWS', icon: <Cloud className="w-4 h-4" /> },
			{ name: 'Google Cloud', icon: <Cloud className="w-4 h-4" /> },
			{ name: 'Docker', icon: <Cloud className="w-4 h-4" /> },
			{ name: 'CI/CD', icon: <Code2 className="w-4 h-4" /> }
		]
	},
	{
		category: 'Databases',
		icon: <Database className="w-6 h-6" />,
		items: [
			{ name: 'MongoDB', icon: <MongoDBLogo /> },
			{ name: 'SQL', icon: <MySQLLogo /> },
			{ name: 'NoSQL', icon: <Database className="w-4 h-4" /> },
			{ name: 'Firestore', icon: <Database className="w-4 h-4" /> }
		]
	},
	{
		category: 'Tools & Platforms',
		icon: <Wrench className="w-6 h-6" />,
		items: [
			{ name: 'Git', icon: <GitLogo /> },
			{ name: 'GitHub', icon: <GitLogo /> },
			{ name: 'VS Code', icon: <VSCodeLogo /> },
			{ name: 'VirtualBox', icon: <VirtualBoxLogo /> }
		]
	},
	{
		category: 'Operating Systems',
		icon: <Terminal className="w-6 h-6" />,
		items: [
			{ name: 'Windows', icon: <Terminal className="w-4 h-4" /> },
			{ name: 'Linux', icon: <Terminal className="w-4 h-4" /> },
			{ name: 'Ubuntu', icon: <Terminal className="w-4 h-4" /> },
			{ name: 'Kali Linux', icon: <Terminal className="w-4 h-4" /> }
		]
	},
	{
		category: 'Soft Skills',
		icon: <Brain className="w-6 h-6" />,
		items: [
			{ name: 'Teamwork', icon: <Users className="w-4 h-4" /> },
			{ name: 'Problem Solving', icon: <Wrench className="w-4 h-4" /> },
			{ name: 'Communication', icon: <MessageSquare className="w-4 h-4" /> },
			{ name: 'Adaptability', icon: <Lightbulb className="w-4 h-4" /> }
		]
	}
];

const Skills = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<ScrollAnimation>
				<h2 className="text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
			</ScrollAnimation>

			<ScrollAnimation>
				<p className="text-gray-400 mb-12 max-w-2xl">
					A comprehensive overview of my technical expertise and tools I work with
				</p>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{skills.map((skillGroup, index) => (
					<ScrollAnimation key={skillGroup.category}>
						<div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
							<div className="flex items-center space-x-3 mb-6">
								<div className="p-2 bg-white/10 rounded-lg">
									{skillGroup.icon}
								</div>
								<h3 className="text-lg font-semibold">{skillGroup.category}</h3>
							</div>
							<div className="grid grid-cols-2 gap-4">
								{skillGroup.items.map((skill, skillIndex) => (
									<div
										key={skill.name}
										className="bg-gray-700/50 px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all group"
									>
										<div className="text-gray-400 group-hover:text-white transition-colors">
											{skill.icon}
										</div>
										<span className="text-gray-400 group-hover:text-white transition-colors text-sm">
											{skill.name}
										</span>
									</div>
								))}
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Skills;