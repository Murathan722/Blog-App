import React from "react";
import BlogImage from "../assets/Blog.jpeg";

function WhyChooseUs() {
  return (
    <section className="bg-white py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12">
          <p className="text-gray-700 leading-relaxed">
            Blogumuza hoş geldiniz! Burada en güncel ve ilgi çekici konular
            hakkında bilgi bulabilirsiniz. Her yazımız titizlikle araştırılmış
            ve siz değerli okuyucularımıza en doğru bilgiyi sunmak için
            yazılmıştır. Blogumuzda şunları bulabilirsiniz:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Güncel haberler ve trendler</li>
            <li>Detaylı analizler ve yorumlar</li>
            <li>İlham verici hikayeler ve deneyimler</li>
            <li>Uzman görüşleri ve tavsiyeler</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Siz de bu kaliteli içerikleri kaçırmamak ve sürekli güncellenen
            bilgilerden haberdar olmak istiyorsanız, blogumuzu takip etmeye
            devam edin.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
          <img
            src={BlogImage}
            alt="Why Choose Us"
            className="w-full h-auto object-cover max-h-96 rounded-2xl shadow-md max-w-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
