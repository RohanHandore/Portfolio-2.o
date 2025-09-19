import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Background3D from '@/components/Background3D';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	preload: true,
});

export const metadata: Metadata = {
	title: 'Rohan Handore - Web Designer | Developer | DevOps Engineer',
	description: 'Rohan Handore - Web Designer, Developer, and DevOps Engineer specializing in JavaScript, Java, Python, cloud computing, and algorithmic trading. Currently pursuing MSc in Big Data Management and Analytics at Griffith College, Ireland.',
	keywords: 'Rohan Handore, Web Designer, Developer, DevOps Engineer, JavaScript, Java, Python, Big Data Analytics, Cloud Computing, Algorithmic Trading, AWS, Google Cloud, Dublin Ireland, Software Development Engineer, MERN Stack, React.js, Node.js, MongoDB, SQL',
	authors: [{ name: 'Rohan Handore' }],
	creator: 'Rohan Handore',
	manifest: '/manifest.json',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://rohanhandore.tech/',
		title: 'Rohan Handore - Web Designer | Developer | DevOps Engineer',
		description: 'Web Designer, Developer, and DevOps Engineer specializing in JavaScript, Java, Python, cloud computing, and algorithmic trading.',
		siteName: 'Rohan Handore Portfolio',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Rohan Handore - Web Designer | Developer | DevOps Engineer',
		description: 'Web Designer, Developer, and DevOps Engineer specializing in JavaScript, Java, Python, cloud computing, and algorithmic trading.',
		creator: '@RohanHandore',
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
		},
	},
	metadataBase: new URL('https://rohanhandore.tech'),
	alternates: {
		canonical: '/',
	},
	verification: {
		google: '/googlea4a36904e14398c1.html',
	},
};

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
	themeColor: '#000000',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<head>
				<link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
				<link rel="apple-touch-icon" href="/favicon.svg" />
				<meta name="theme-color" content="#000000" />
				<link rel="manifest" href="/manifest.json" />
				<meta httpEquiv="Content-Security-Policy" content="default-src 'self' data: blob: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: blob: https: http:; font-src 'self' data: https:; connect-src 'self' data: blob: https:; worker-src 'self' blob: data:;" />
			</head>
			<body>
				<div className="min-h-screen flex flex-col">
					<Background3D />
					<Navbar />
					<main className="flex-grow">{children}</main>
					<SpeedInsights />
					<Footer />
				</div>
				<Analytics />
			</body>
		</html>
	);
}