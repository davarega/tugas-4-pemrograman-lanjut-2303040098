import { useState } from 'react'

const Navbar = () => {
	let Links = [
		{ name: "HOME", link: "/" },
		{ name: "ABOUT", link: "/about" },
		{ name: "CONTACT", link: "/contact" },
	];
	let [open, setOpen] = useState(false);

	return (
		<div className='shadow-md w-full fixed top-0 left-0 z-[100]'>
			<div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
				<div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
					<span className='text-3xl text-indigo-600 mr-1 pt-2'>
						<ion-icon name="logo-ionic"></ion-icon>
					</span>
					Designer
				</div>

				<div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
					<ion-icon name={open ? 'close' : 'menu'}></ion-icon>
				</div>

				<ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full bg-white md:w-auto md:pl-0 px-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
					{
						Links.map((link) => (
							<li key={link.name} className='text-lg md:my-0 my-7 py-1 text-center'>
								<a href={link.link} className='text-gray-800 hover:text-gray-400 font-[Poppins] p-5  duration-300'>{link.name}</a>
							</li>
						))
					}
					<div className="space-x-4 flex">
						<button
							className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-yellow-500 duration-300'
						>
							Sign In
						</button>
						<button
							className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-yellow-500 duration-300'>
							Log In
						</button>
					</div>
				</ul>
			</div>
		</div>
	)
}

export default Navbar