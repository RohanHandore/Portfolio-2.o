import Skills from '@/pages/Skills';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Skills & Expertise - Rohan Handore',
	description: 'Explore Rohan Handore\'s technical skills and expertise in JavaScript, Java, Python, cloud computing, DevOps, and more.',
};

export default function SkillsPage() {
	return <Skills />;
}