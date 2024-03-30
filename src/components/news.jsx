import React from 'react';

import img1 from '../assets/bukber.jpeg';
import img2 from '../assets/TARJIH.jpeg';
import img3 from '../assets/TK.jpeg';
import img4 from '../assets/FORKAMA.jpeg';

const card = [
	{ title: "Ngaji Bareng dan Bukber Go Green di UMP, Makanan Dibungkus Daun Pisang, Tanpa Air Minum Kemasan", description: "Universitas Muhammadiyah Purwokerto (UMP) menggelar acara Ngaji Bareng dan Bukber Go Green di Auditorium Ukuhwah Islamiyah pada Selasa (26/3/2024). Acara ini dipimpin oleh Rektor UMP, Assoc Prof Dr Jebul Suroso,", image: img1 },
	{ title: "Madrasah Tarjih PK IMM Buya Hamka UMP, Menjawab Tantangan Kontroversi Penentuan Bulan Ramadhan", description: "Pimpinan Komisariat (PK) Ikatan Mahasiswa Muhammadiyah (IMM) Buya Hamka, Universitas Muhammadiyah Purwokerto (UMP), menggelar acara Madrasah Tarjih yang sukses menarik perhatian mahasiswa dan aktivis umum.", image: img2 },
	{ title: "Eksistensi Islami TK UMP, Pengajian Ramadhan dan Baksos Salurkan Kebahagiaan kepada Masyarakat", description: "aman Kanak-Kanak (TK) Universitas Muhammadiyah Purwokerto (UMP) menggelar acara pengajian Ramadhan dan bakti sosial (Baksos) yang mengundang antusiasme besar dari peserta didik dan warga sekitar.", image: img3 },
	{ title: "Perkuat Sinergi Pendidikan Tinggi, UMP Tuan Rumah FORKAMA LDDIKTI VI", description: "Universitas Muhammadiyah Purwokerto (UMP) menjadi tuan rumah acara penting Forum Group Discussion Forum Kerjasama (FORKAMA) Perguruan Tinggi Jawa Tengah 2024, yang diselenggarakan bersama Lembaga Layanan Pendidikan Tinggi (LDDIKTI) Wilayah VI.", image: img4 },
];

const News = () => {
	return (
		<div className="grid p-10 m-10 mt-5 gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 sm:p-8">
			{
				card.map((item, index) => (
					<a href='#' key={index} className="bg-white shadow-lg rounded-lg overflow-hidden scale-95 hover:scale-105 ease-in duration-200">
						<img className="w-full h-56 object-cover object-center" src={item.image} alt={item.title} />
						<div className="p-4">
							<h2 className="text-xl font-semibold text-gray-800 hover:text-yellow-200 duration-500">{item.title}</h2>
							<p className="text-gray-600 mt-2">{item.description}</p>
						</div>
					</a>
				))
			}
		</div>
	);
}

export default News;