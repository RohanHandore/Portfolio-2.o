'use client';

import React, { useEffect, useState } from 'react';

const Background3D = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			const x = e.clientX - window.innerWidth / 2;
			const y = e.clientY - window.innerHeight / 2;
			setMousePosition({ x, y });
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return (
		<>
			<div className="canvas-container" />
			<div className="fixed inset-0 -z-10">
				{/* Space Background */}
				<div className="absolute inset-0 space-background" />
				
				{/* Animated Stars */}
				<div className="absolute inset-0 stars-container">
					<div className="stars stars-1"></div>
					<div className="stars stars-2"></div>
					<div className="stars stars-3"></div>
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