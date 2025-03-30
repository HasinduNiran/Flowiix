"use client";

import Image from "next/image";

export default function ServiceStats() {
  return (
    <div className=" bg-black min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col items-center justify-center ">
          <div className="bg-white w-[1048px] h-[225px] rounded-xl shadow-lg p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 z-20">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-semibold">Title 1</h3>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative -top-40 z-0">
          <Image
            src="/asset/images/banner.jpeg"
            alt="Background"
            width={1312}
            height={395}
            className="w-[1312px] h-[395px] rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
