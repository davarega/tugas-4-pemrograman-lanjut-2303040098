import React, { useState } from 'react';
import { Carousel } from '@material-tailwind/react';

import slideImg1 from '../assets/slide-1.jpg';
import slideImg2 from '../assets/slide-2.png';
import slideImg3 from '../assets/slide-3.png';
import slideImg4 from '../assets/slide-4.png';
import slideImg5 from '../assets/slide-5.png';

const Slider = () => {
	return (
		<Carousel className="rounded-xl mt-10 pt-10" loop="true" autoplay="true">
			<img
				src={slideImg1}
				alt="image 1"
				className="h-full w-full object-cover"
			/>
			<img
				src={slideImg2}
				alt="image 2"
				className="h-full w-full object-cover"
			/>
			<img
				src={slideImg3}
				alt="image 3"
				className="h-full w-full object-cover"
			/>
			<img
				src={slideImg4}
				alt="image 3"
				className="h-full w-full object-cover"
			/>
			<img
				src={slideImg5}
				alt="image 3"
				className="h-full w-full object-cover"
			/>
		</Carousel>
		// <div className='h-auto w-full mt-10 pt-10 relative group'>
		// 	<div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
		// 		<img src={slides[currentIndex].url ? slides[currentIndex].url : Hero} alt={slides[currentIndex].title ? slides[currentIndex].title : "Undefined"} />
		// 	</div>
		// 	<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
		// 		<span onClick={prevSlide}>
		// 			<ion-icon name="chevron-back-outline"></ion-icon>
		// 		</span>
		// 	</div>
		// 	<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
		// 		<span onClick={nextSlide}>
		// 			<ion-icon name="chevron-forward-outline"></ion-icon>
		// 		</span>
		// 	</div>
		// 	<div className='flex top-4 justify-center py-2'>
		// 		{slides.map((slide, slideIndex) => (
		// 			<div
		// 				key={slideIndex}
		// 				onClick={() => goToSlide(slideIndex)}
		// 				className='text-2xl cursor-pointer'
		// 			>
		// 				<ion-icon name="radio-button-on-outline"></ion-icon>
		// 			</div>
		// 		))}
		// 	</div>
		// </div>
	);
};

export default Slider;