'use client';

import React, { useEffect, useState } from 'react';

const Background3D = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; opacity: number; animationDelay: number }>>([]);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			const x = e.clientX - window.innerWidth / 2;
			const y = e.clientY - window.innerHeight / 2;
			setMousePosition({ x, y });
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	useEffect(() => {
		// Generate random stars
		const generateStars = () => {
			const starCount = 200; // Number of stars
			const newStars = [];
			
			for (let i = 0; i < starCount; i++) {
				newStars.push({
					id: i,
					x: Math.random() * 100, // Random x position (0-100%)
					y: Math.random() * 100, // Random y position (0-100%)
					size: Math.random() * 3 + 1, // Random size (1-4px)
					opacity: Math.random() * 0.8 + 0.2, // Random opacity (0.2-1.0)
					animationDelay: Math.random() * 5, // Random animation delay (0-5s)
				});
			}
			
			setStars(newStars);
		};

		generateStars();
	}, []);

	return (
		<>
			<div className="canvas-container" />
			<div className="fixed inset-0 -z-10">
				{/* Space Background */}
				<div className="absolute inset-0 space-background" />
				
				{/* Random Stars */}
				<div className="absolute inset-0 stars-container">
					{stars.map((star) => (
						<div
							key={star.id}
							className="star"
							style={{
								position: 'absolute',
								left: `${star.x}%`,
								top: `${star.y}%`,
								width: `${star.size}px`,
								height: `${star.size}px`,
								backgroundColor: '#fff',
								borderRadius: '50%',
								opacity: star.opacity,
								animation: `sparkle ${3 + Math.random() * 2}s linear infinite`,
								animationDelay: `${star.animationDelay}s`,
								boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity * 0.5})`,
							}}
						/>
					))}
				</div>

				{/* Nebula Effect */}
				<div className="absolute inset-0 nebula-container">
					<div className="nebula nebula-1"></div>
					<div className="nebula nebula-2"></div>
					<div className="nebula nebula-3"></div>
				</div>

				{/* Galaxy Spiral */}
				<div className="absolute inset-0 galaxy-spiral" />

				{/* Grid Overlay */}
				<div className="absolute inset-0 gradient-grid" />
				
				{/* Interactive Spotlight */}
				<div
					className="spotlight"
					style={{
						transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
					}}
				/>
			</div>
		</>
	);
};

export default Background3D;