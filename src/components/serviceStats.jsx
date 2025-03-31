"use client";
import Image from "next/image";

export default function ServiceStats() {
  const stats = [
    {
      title: "Projects Completed",
      value: "250+",
      description: "Successful deliveries across industries",
    },
    {
      title: "Happy Clients",
      value: "98%",
      description: "Client satisfaction rate",
    },
    {
      title: "Team Members",
      value: "50+",
      description: "Skilled professionals",
    },
    {
      title: "Years Experience",
      value: "10+",
      description: "In the business",
    },
  ];

  return (
    <div className="relative -mt-80 min-h-[60vh] md:min-h-screen w-full flex items-center justify-center px-4 sm:px-6 py-20 md:py-0">
      <div className="w-full max-w-6xl">
        {/* Stats Cards */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white w-full max-w-4xl xl:w-[1048px] h-auto md:h-[225px] rounded-xl shadow-lg p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 z-20 relative">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 hover:bg-gray-50 transition-all duration-300 rounded-lg"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </h3>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                  {stat.title}
                </h4>
                <p className="text-gray-500 text-sm md:text-base">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Background Image */}
        <div className="relative -mt-20 sm:-mt-28 md:-mt-40 z-0 w-full">
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
          <Image
            src="/asset/images/banner.jpeg"
            alt="Background"
            width={1312}
            height={395}
            className="w-full max-w-5xl mx-auto h-[200px] sm:h-[300px] md:h-[395px] rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
