import React from "react";
import hero from '../assets/main-character.jpg';

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white p-4 text-center">
			<a href="https://eriksan123.carrd.co/" className="flex justify-center text-xl items-center space-x-4 mx-auto">
				<img src={hero} alt="main-character" height={50} width={50} />
				<p>&copy; Mochamad Faishal Rafi 2303040098</p>
			</a>
		</footer>
	);
};

export default Footer;