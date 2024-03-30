import React from 'react';

const card = [
	{ title: "Ngaji Bareng dan Bukber Go Green di UMP, Makanan Dibungkus Daun Pisang, Tanpa Air Minum Kemasan", description: "Universitas Muhammadiyah Purwokerto (UMP) menggelar acara Ngaji Bareng dan Bukber Go Green di Auditorium Ukuhwah Islamiyah pada Selasa (26/3/2024). Acara ini dipimpin oleh Rektor UMP, Assoc Prof Dr Jebul Suroso,", image: "https://ump.ac.id/data/foto_berita/bukber.jpeg" },
	{ title: "Madrasah Tarjih PK IMM Buya Hamka UMP, Menjawab Tantangan Kontroversi Penentuan Bulan Ramadhan", description: "Pimpinan Komisariat (PK) Ikatan Mahasiswa Muhammadiyah (IMM) Buya Hamka, Universitas Muhammadiyah Purwokerto (UMP), menggelar acara Madrasah Tarjih yang sukses menarik perhatian mahasiswa dan aktivis umum.", image: "https://ump.ac.id/data/foto_berita/TARJIH IMM.jpeg" },
	{ title: "Eksistensi Islami TK UMP, Pengajian Ramadhan dan Baksos Salurkan Kebahagiaan kepada Masyarakat", description: "aman Kanak-Kanak (TK) Universitas Muhammadiyah Purwokerto (UMP) menggelar acara pengajian Ramadhan dan bakti sosial (Baksos) yang mengundang antusiasme besar dari peserta didik dan warga sekitar.", image: "https://ump.ac.id/data/foto_berita/TK(1).jpeg" },
	{ title: "Perkuat Sinergi Pendidikan Tinggi, UMP Tuan Rumah FORKAMA LDDIKTI VI", description: "Universitas Muhammadiyah Purwokerto (UMP) menjadi tuan rumah acara penting Forum Group Discussion Forum Kerjasama (FORKAMA) Perguruan Tinggi Jawa Tengah 2024, yang diselenggarakan bersama Lembaga Layanan Pendidikan Tinggi (LDDIKTI) Wilayah VI.", image: "https://ump.ac.id/data/foto_berita/FORKAMA.jpeg" },
];

const News = () => {
	return (
		<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 sm:p-8">
			{card.map((item, index) => (
				<div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
					<img className="w-full h-56 object-cover object-center" src={item.image} alt={item.title} />
					<div className="p-4">
						<h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
						<p className="text-gray-600 mt-2">{item.description}</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default News;