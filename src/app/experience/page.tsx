import Experience from '@/pages/Experience';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Experience - Rohan Handore',
	description: 'Rohan Handore\'s professional experience as a Software Development Engineer, including work at TechnoKraft Training and Solutions, eLuminous Pvt.Ltd., and open source contributions.',
};

export default function ExperiencePage() {
	return <Experience />;
}