import Certificates from '@/pages/Certificates';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Certificates - Rohan Handore',
	description: 'View Rohan Handore\'s certifications and achievements in web development, programming, cloud computing, and other technical skills.',
};

export default function CertificatesPage() {
	return <Certificates />;
}