import About from '@/pages/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About Rohan Handore - Web Designer | Developer | DevOps Engineer',
	description: 'Learn about Rohan Handore, a Web Designer, Developer, and DevOps Engineer with expertise in JavaScript, Java, Python, cloud computing, and algorithmic trading.',
};

export default function AboutPage() {
	return <About />;
}