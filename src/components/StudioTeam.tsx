'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Team member data
const teamMembers = [
	{
		name: 'Vinayak Vishwakarma',
		role: 'Owner & Creative Director',
		bio: 'Graphic Designer, Editor, Photographer',
		image: '/images/team/vinayak.jpg',
		social: {
			instagram: 'https://instagram.com',
			linkedin: 'https://linkedin.com',
			twitter: 'https://twitter.com',
		},
	},
	{
		name: 'Chhyanchu Lathiya',
		role: 'Web Developer',
		bio: 'PHP Developer, Data Specialist',
		image: '/images/team/chhayanchu.jpg', // Fixed the typo in the filename
		social: {
			instagram: 'https://instagram.com',
			linkedin: 'https://linkedin.com',
			twitter: 'https://twitter.com',
		},
	},
	{
		name: 'Hatim',
		role: 'Web Developer',
		bio: 'WordPress Specialist, PHP Developer',
		image: '/images/team/hatim.jpg',
		social: {
			instagram: 'https://instagram.com',
			linkedin: 'https://linkedin.com',
			twitter: 'https://twitter.com',
		},
	},
];

export default function StudioTeam() {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.2 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			className="relative py-20 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] overflow-hidden"
		>
			{/* Background decorative elements */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-[#a855f7]/5 blur-3xl"></div>
				<div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[#22c55e]/5 blur-3xl"></div>
			</div>

			<div className="relative z-10 max-w-6xl mx-auto">
				<h2
					className={`text-4xl md:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 transition-all duration-700 ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					Our Team
				</h2>
				<div
					className={`w-16 h-1 bg-gradient-to-r from-[#a855f7] to-[#22c55e] mx-auto mb-12 transition-all duration-700 delay-200 ${
						isVisible ? 'opacity-100 w-16' : 'opacity-0 w-0'
					}`}
				></div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{teamMembers.map((member, index) => (
						<div
							key={member.name}
							className={`group bg-[#1a1a1a] rounded-2xl overflow-hidden transition-all duration-700 hover:translate-y-[-5px] ${
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
							}`}
							style={{
								transitionDelay: isVisible ? `${index * 100 + 300}ms` : '0ms',
							}}
						>
							<div className="aspect-[4/5] relative overflow-hidden">
								<Image
									src={member.image}
									alt={member.name}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-110"
									onError={(e) => {
										console.error(
											`Failed to load image for ${member.name}: ${member.image}`
										);
										const target = e.target as HTMLImageElement;
										target.src =
											'https://via.placeholder.com/400x500?text=' +
											encodeURIComponent(member.name);
									}}
								/>
								{/* Gradient overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</div>
							<div className="relative p-6">
								{/* Decorative line */}
								<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#a855f7] to-[#22c55e] rounded-full"></div>

								<h3 className="text-2xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
									{member.name}
								</h3>
								<p className="text-[#22c55e] font-medium mb-3">
									{member.role}
								</p>
								<p className="text-gray-400 mb-4">{member.bio}</p>

								<div className="flex gap-4">
									{member.social.linkedin && (
										<a
											href={member.social.linkedin}
											className="text-gray-400 hover:text-white transition-colors duration-300"
											target="_blank"
											rel="noopener noreferrer"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												fill="currentColor"
												viewBox="0 0 16 16"
											>
												<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
											</svg>
										</a>
									)}
									{member.social.twitter && (
										<a
											href={member.social.twitter}
											className="text-gray-400 hover:text-white transition-colors duration-300"
											target="_blank"
											rel="noopener noreferrer"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												fill="currentColor"
												viewBox="0 0 16 16"
											>
												<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
											</svg>
										</a>
									)}
									{member.social.instagram && (
										<a
											href={member.social.instagram}
											className="text-gray-400 hover:text-white transition-colors duration-300"
											target="_blank"
											rel="noopener noreferrer"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												fill="currentColor"
												viewBox="0 0 16 16"
											>
												<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
											</svg>
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}