import React from 'react';
import Hero from '../assets/main-character.jpg';

const Card = ({ card }) => {
	return (
		<div className="grid p-10 m-10 mt-5 gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 sm:p-8">
			{card.map((item, index) => (
				<a href='#' key={index} className="bg-white shadow-lg rounded-lg overflow-hidden scale-95 hover:scale-105 ease-in duration-200">
					<img className="w-full h-56 object-cover object-center" src={item.image ? item.image : Hero} alt={item.title ? item.title : "Undefined"} />
					<div className="p-4">
						<h2 className="text-xl font-semibold text-gray-800 hover:text-yellow-500 duration-300">{item.title ? item.title : "Undefined"}</h2>
						<p className="text-gray-600 mt-2">{item.description ? item.description : "Undefined"}</p>
					</div>
				</a>
			))}
		</div>
	);
};

export default Card;