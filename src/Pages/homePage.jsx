import React from 'react';
import Navbar from '../components/navbar';
import Carousel from '../components/carousel';
import Profile from '../components/profile';
import News from '../components/news';
import Footer from '../components/footer';

const slides = [
	{ url: "https://i.ibb.co/vcWCVP5/slide-1.jpg", title: "Slide 1" },
	{ url: "https://i.ibb.co/LtYkpgS/slide-2.png", title: "Slide 2" },
	{ url: "https://i.ibb.co/fnvNJNS/slide-3.png", title: "Slide 3" },
	{ url: "https://i.ibb.co/ZNhfvg9/slide-4.png", title: "Slide 4" },
	{ url: "https://i.ibb.co/nkyzk0n/slide-5.png", title: "Slide 5" }
];

const HomePage = () => {
	return (
		<div>
			<Navbar />
			<Carousel slides={slides} />
			<Profile />
			<News />
			<Footer />
		</div>
	);
};

export default HomePage;