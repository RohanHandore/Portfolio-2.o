import Projects from '@/pages/Projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects - Rohan Handore',
	description: 'View Rohan Handore\'s portfolio of projects including Algo Trading Software, Stock Market Filter, People I Meet, and more.',
};

export default function ProjectsPage() {
	return <Projects />;
}