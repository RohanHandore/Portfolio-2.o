import Education from '@/pages/Education';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Education - Rohan Handore',
	description: 'Rohan Handore\'s educational background including MSc in Big Data Management and Analytics from Griffith College, Ireland, and BSc in Computer Science from Institute of Science Poona\'s College of Computer Sciences.',
};

export default function EducationPage() {
	return <Education />;
}