import React from 'react';
import Image from 'next/image';
import blueFabric1 from '../../../public/asset/images/blueFabric1.png';
import blueFabric2 from '../../../public/asset/images/image.png';
import whiteFabric1 from '../../../public/asset/images/image26.png';
import whiteFabric2 from '../../../public/asset/images/whiteFabric2.png';

export default function Page() {
  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: 'var(--color-secoundary)' }}>
      {/* Blue cloth/fabric elements */}
      <div className="absolute top-0 left-0 w-1/8 h-1/4">
        <Image 
          src={blueFabric1} 
          alt="Blue fabric top left"
          fill
          className="object-cover rounded-full transform translate-x-[-30%] translate-y-[-30%] opacity-80"
          priority
        />
      </div>
      
      <div className="absolute bottom-0 right-0 w-2/9 h-3/5">
        <Image 
          src={blueFabric2}
          alt="Blue fabric bottom right"
          fill
          style={{ objectFit: 'cover' }}
          className="object-cover rounded-full transform translate-x-[20%] translate-y-[5%] opacity-100"
          priority
        />
      </div>
      
      {/* White cloth/fabric elements */}
      <div className="absolute top-0 right-0 w-1/4 h-3/4">
        <Image 
          src={whiteFabric1}
          alt="White fabric top right"
          fill
          style={{ objectFit: 'cover' }}
          className="object-cover rounded-full transform translate-x-[30%] translate-y-[-30%] opacity-90"
          priority
        />
      </div>
      
      <div className="absolute left-0 bottom-0 w-2/9 h-4/5">
        <Image 
          src={whiteFabric2}
          alt="White fabric bottom left"
          fill
          style={{ objectFit: 'cover', borderRadius: '50%' }}
          className="object-cover rounded-full transform translate-x-[-20%] translate-y-[-20%]"
          priority
        />
      </div>
      
      {/* Main content container - with reduced width */}
      <div className="relative z-10 w-11/12 sm:w-10/12 md:w-9/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2 max-w-4xl mx-auto mt-24 md:mt-32 px-4">
        {/* Heading row - now on same line */}
        <div className="flex flex-row items-center gap-8 mb-12">
          <div className="w-1/3 lg:w-1/4 text-white -ml-2">
            <h1 className="text-4xl md:text-2xl font-bold"><span className="text-white">WHO</span> <span className="text-black">WE ARE</span></h1>
          </div>
          
          <div className="w-2/3 lg:w-3/4">
            {/* Heading box with increased text size */}
            <div className="border-l-4 border-black pl-4 p-4">
              <h2 className="text-2xl md:text-3xl font-bold text-black">LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING</h2>
            </div>
          </div>
        </div>
        
        {/* Features section - with adjustable width */}
        <div className="md:pl-[33%] lg:pl-[25%] xl:pl-[20%]">
          <div className="space-y-8 max-w-xl">
            {/* Features remain the same */}
            {/* First feature with rocket icon */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-white">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm md:text-base text-black">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
            
            {/* Second feature with light bulb icon */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-white">
                  <path d="M9 18h6M10 22h4M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8A6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm md:text-base text-black">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
            
            {/* Third feature with 360 icon */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-white">
                  <circle cx="12" cy="12" r="10" />
                  <text x="7" y="16" fontSize="8" fill="currentColor" stroke="none">360</text>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm md:text-base text-black">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Corner hole markers */}
      <div className="absolute top-4 left-4 w-4 h-4 bg-white rounded-full border-2 border-gray-300"></div>
      <div className="absolute top-4 right-4 w-4 h-4 bg-white rounded-full border-2 border-gray-300"></div>
      <div className="absolute bottom-4 left-4 w-4 h-4 bg-white rounded-full border-2 border-gray-300"></div>
      <div className="absolute bottom-4 right-4 w-4 h-4 bg-white rounded-full border-2 border-gray-300"></div>
    </div>
  );
}