import React from "react";
import hero from '../assets/main-character.jpg'

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white p-4 text-center">
			<div className="flex justify-center text-xl align-center space-x-4 mx-auto">
				<img src={hero} alt="main-character" height={50} width={50} />
				<p>&copy; Mochamad Faishal Rafi 2303040098</p>
			</div>
		</footer>
	);
};

export default Footer;