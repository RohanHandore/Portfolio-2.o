import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact - Rohan Handore',
	description: 'Get in touch with Rohan Handore, a Web Designer, Developer, and DevOps Engineer specializing in JavaScript, Java, Python, and cloud computing.',
};

export default function ContactPage() {
	return <Contact />;
}