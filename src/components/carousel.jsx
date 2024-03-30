import { useState } from 'react';

import img1 from '../assets/slide-1.jpg';
import img2 from '../assets/slide-2.png';
import img3 from '../assets/slide-3.png';
import img4 from '../assets/slide-4.png';
import img5 from '../assets/slide-5.png';

const slides = [
	{ url: img1, title: "Slide 1" },
	{ url: img2, title: "Slide 2" },
	{ url: img3, title: "Slide 3" },
	{ url: img4, title: "Slide 4" },
	{ url: img5, title: "Slide 5" }
];

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<div className='h-auto w-full mt-10 pt-10 relative group'>
			<div href='#' className='w-full h-full rounded-2xl ease-in-out bg-center bg-cover duration-500'>
				<img src={process.env.PUBLIC_URL + slides[currentIndex].url} alt="" />
			</div>
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
				<span onClick={prevSlide}>
					<ion-icon name="chevron-back-outline"></ion-icon>
				</span>
			</div>
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
				<span onClick={nextSlide}>
					<ion-icon name="chevron-forward-outline"></ion-icon>
				</span>
			</div>
			<div className='flex top-4 justify-center py-2'>
				{slides.map((slide, slideIndex) => (
					<div
						key={slideIndex}
						onClick={() => goToSlide(slideIndex)}
						className='text-2xl cursor-pointer'
					>
						<ion-icon name="radio-button-on-outline"></ion-icon>
					</div>
				))}
			</div>
		</div>
	);
};

export default Carousel;
