'use client';

import { VercelLogo } from '@/components/TechLogos';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, Copy, Check, FileDown, User } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Home = () => {
	const [copied, setCopied] = useState(false);
	const email = 'rohanhandore021@gmail.com';
	const whatsappNumber = '+918830949311';

	const { data: githubData } = useSWR('https://api.github.com/users/RohanHandore', fetcher);
	function formatRepoCount(count: number): string {
		if (count < 5) return count.toString();
		return `${Math.floor(count / 5) * 5}+`;
	}
	const githubRepos = githubData?.public_repos || 0;
	const displayRepos = formatRepoCount(githubRepos);

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(email);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	};

	const handleEmailClick = (e: React.MouseEvent) => {
		if (window.innerWidth <= 640) {
			window.location.href = `mailto:${email}`;
			e.preventDefault();
		} else {
			copyToClipboard();
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center px-4 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
			<div className="text-center relative z-10 max-w-4xl mx-auto">
				<motion.h1
					className="text-6xl sm:text-8xl md:text-[8rem] lg:text-[8.8rem] font-bold mb-6 sm:mb-8 relative tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Rohan Handore
				</motion.h1>
				<motion.h2
					className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8 relative tracking-tight text-gray-200"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.1 }}
				>
					I'm Engineer for everything
				</motion.h2>

				<motion.p
					className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-4 sm:mb-5 max-w-2xl mx-auto px-2 sm:px-4"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					Building tomorrow's digital universe, one algorithm at a time. Where code meets creativity, and innovation never sleeps. 
				</motion.p>

				<motion.div
					className="flex flex-col items-center gap-4 sm:gap-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					<div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
						<a
							href="https://drive.google.com/uc?export=download&id=1y1dAa3EW1E5sx8L3l3Ctm0HlQOYt0wPL"
							target="_blank"
							rel="noopener noreferrer"
							className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white/90 backdrop-blur-sm text-black rounded-2xl text-sm sm:text-base font-semibold hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
						>
							<FileDown className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
							Download CV
						</a>
						<Link
							href="/about"
							className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md text-white rounded-2xl text-sm sm:text-base font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 border border-white/20 hover:border-white/30"
						>
							<User className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
							About Me
						</Link>
					</div>

					<button
						onClick={handleEmailClick}
						className="group relative flex items-center gap-3 py-3 px-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-copy sm:cursor-pointer"
					>
						<div className="flex items-center">
							<div className="w-4 text-gray-400 group-hover:text-white transition-colors">
								<VercelLogo />
							</div>
							<span className="text-lg font-mono text-gray-300 ml-3 group-hover:text-white transition-colors">~</span>
						</div>
						<span className="text-gray-300 group-hover:text-white transition-colors text-sm sm:text-base font-medium">{email}</span>
						<div className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 hidden sm:block">
							{copied ? (
								<Check className="w-4 h-4 text-green-400" />
							) : (
								<Copy className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
							)}
						</div>
					</button>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 sm:mt-16 max-w-4xl mx-auto"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.6 }}
				>
					<motion.a
						href="https://github.com/RohanHandore"
						target="_blank"
						rel="noopener noreferrer"
						className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
						whileHover={{ y: -4, scale: 1.02 }}
					>
						<div className="flex flex-col items-center text-center">
							<div className="p-4 rounded-2xl bg-white/10 group-hover:bg-white/20 transition-colors mb-4">
								<Github className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors" />
							</div>
							<motion.div
								className="flex flex-col items-center"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.8 }}
							>
								<span className="text-2xl sm:text-3xl font-bold text-white mb-1">{displayRepos}</span>
								<span className="text-sm text-gray-400 font-medium">GitHub Projects</span>
							</motion.div>
						</div>
					</motion.a>

					<motion.a
						href="https://linkedin.com/in/rohan-handore-4786b3233"
						target="_blank"
						rel="noopener noreferrer"
						className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
						whileHover={{ y: -4, scale: 1.02 }}
					>
						<div className="flex flex-col items-center text-center">
							<div className="p-4 rounded-2xl bg-white/10 group-hover:bg-white/20 transition-colors mb-4">
								<Linkedin className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors" />
							</div>
							<motion.div
								className="flex flex-col items-center"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.8 }}
							>
								<span className="text-2xl sm:text-3xl font-bold text-white mb-1">1500+</span>
								<span className="text-sm text-gray-400 font-medium">LinkedIn Followers</span>
							</motion.div>
						</div>
					</motion.a>

					<motion.a
						href={`https://wa.me/${whatsappNumber}`}
						target="_blank"
						rel="noopener noreferrer"
						className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
						whileHover={{ y: -4, scale: 1.02 }}
					>
						<div className="flex flex-col items-center text-center">
							<div className="p-4 rounded-2xl bg-white/10 group-hover:bg-white/20 transition-colors mb-4">
								<MessageCircle className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors" />
							</div>
							<motion.div
								className="flex flex-col items-center"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.8 }}
							>
								<span className="text-2xl sm:text-3xl font-bold text-white mb-1">24x7</span>
								<span className="text-sm text-gray-400 font-medium">WhatsApp Me</span>
							</motion.div>
						</div>
					</motion.a>
				</motion.div>
			</div>
		</div>
	);
};

export default Home;