import React from 'react';

const Base = (props) => {
	return (
		<div className='h-screen w-screen flex justify-center flex-col md:flex-row center items-center'>
			<h3 className="m-4 p-4 text-xl">{ props.children }</h3>
			<div className="block justify-center items-center">
				<a href='/' className=' min-w-[100px] bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded hover:bg-indigo-400 duration-500'>
					Back to Home
				</a>
			</div>
		</div>
	);
};

export default Base;