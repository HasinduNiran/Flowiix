const Loading = () => (
  <div className="flex flex-col justify-center items-center w-screen h-screen bg-white">
    <div className="flex justify-center items-center space-x-4">
      <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 rounded-full border-t-transparent border-primary"></div>
      <h1 className="text-3xl font-semibold text-primary animate-pulse">
        Flowiix
      </h1>
    </div>
    <p className="text-xl text-gray-500 mt-4 animate-pulse">Loading...</p>
  </div>
);

export default Loading;
