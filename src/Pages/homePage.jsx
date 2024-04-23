import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Card from '../components/card';
import Slider from '../components/slider';

import cardImg1 from '../assets/bukber.jpeg';
import cardImg2 from '../assets/TARJIH.jpeg';
import cardImg3 from '../assets/TK.jpeg';
import cardImg4 from '../assets/FORKAMA.jpeg';

const card = [
	{ title: "Ngaji Bareng dan Bukber Go Green di UMP, Makanan Dibungkus Daun Pisang, Tanpa Air Minum Kemasan", description: "Universitas Muhammadiyah Purwokerto (UMP) menggelar acara Ngaji Bareng dan Bukber Go Green di Auditorium Ukuhwah Islamiyah pada Selasa (26/3/2024). Acara ini dipimpin oleh Rektor UMP, Assoc Prof Dr Jebul Suroso,", image: cardImg1 },
	{ title: "Madrasah Tarjih PK IMM Buya Hamka UMP, Menjawab Tantangan Kontroversi Penentuan Bulan Ramadhan", description: "Pimpinan Komisariat (PK) Ikatan Mahasiswa Muhammadiyah (IMM) Buya Hamka, Universitas Muhammadiyah Purwokerto (UMP), menggelar acara Madrasah Tarjih yang sukses menarik perhatian mahasiswa dan aktivis umum.", image: cardImg2 },
	{ title: "Eksistensi Islami TK UMP, Pengajian Ramadhan dan Baksos Salurkan Kebahagiaan kepada Masyarakat", description: "aman Kanak-Kanak (TK) Universitas Muhammadiyah Purwokerto (UMP) menggelar acara pengajian Ramadhan dan bakti sosial (Baksos) yang mengundang antusiasme besar dari peserta didik dan warga sekitar.", image: cardImg3 },
	{ title: "Perkuat Sinergi Pendidikan Tinggi, UMP Tuan Rumah FORKAMA LDDIKTI VI", description: "Universitas Muhammadiyah Purwokerto (UMP) menjadi tuan rumah acara penting Forum Group Discussion Forum Kerjasama (FORKAMA) Perguruan Tinggi Jawa Tengah 2024, yang diselenggarakan bersama Lembaga Layanan Pendidikan Tinggi (LDDIKTI) Wilayah VI.", image: cardImg4 },
];


const HomePage = () => {
	return (
		<main>
			{/* Navbar section start*/}
			<Navbar />
			{/* Navbar section end*/}
			{/* Carousel section start */}
			<Slider />
			{/* Carousel section end */}
			{/* Profile section start */}
			<div className='text-center mt-8 pt-8'>
				<div className="container mx-auto px-16">
					<h1 className='text-3xl font-bold underline underline-offset-8'>PROFILE UMP</h1>
					<hr />
					<div className="mt-4 space-y-4 md:text-xl text-sm font-[Poppins]">
						<h1 className=''>
							Universitas Muhammadiyah Purwokerto (UMP) merupakan perguruan tinggi swasta terbesar di Jawa Tengah bagian barat, yang terakreditasi UNGGUL (No. SK: 557/SK/BAN-PT/Ak/PT/VIII/2023). UMP secara aktif mengembangkan kerja sama Internasional dengan ratusan perguruan tinggi ternama dunia dalam bidang riset dan peningkatan kualitas sumber daya manusia (SDM). Selain itu, UMP saat ini juga memperkuat
						</h1>
						<br></br>
						<a href="#" className='hover:text-yellow-500 duration-300'>SELENGKAPNYA</a>
					</div>
				</div>
			</div>
			{/* Profile section end */}
			{/* News section start */}
			<Card card={card} />
			{/* News section end */}
			{/* Footer section start */}
			<Footer />
			{/* Footer section end */}
		</main>
	);
};

export default HomePage;