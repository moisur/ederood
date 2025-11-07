import React from 'react';
import Image from 'next/image';

const HighQuality = () => (
  <section id="quality" className="py-20 bg-white">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 w-full">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">High Quality Handpan</h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                    It is our belief that the quality of materials used is crucial, as it is in many other art forms. And as a result, we have always thought that know-how shouldn’t be limited to mastering existing techniques.
                </p>
                <p>
                    This is why the key attribute of the company Ederod is also embedded singularly in its in-depth knowledge of metallurgy materials. This knowledge is the foundation of numerous years of research and development in engineering and innovation on steel sheet, strictly dedicated to musical applications.
                </p>
                 <p>
                    The technology we have developed is our own. It is protected industrially. Because we are sensitive to our environment, our company controls its ecological impact as well as possible through its choices of materials and products.
                </p>
            </div>
        </div>
        <div className="md:w-1/2 w-full">
            <Image 
                src="https://handpan-ederod.com/wp-content/uploads/2023/10/Handpan-tole-brevetee.jpg" 
                alt="High quality handpan steel" 
                width={800}
                height={550}
                className="rounded-lg shadow-2xl object-cover"
            />
        </div>
      </div>
    </div>
  </section>
);

export default HighQuality;
