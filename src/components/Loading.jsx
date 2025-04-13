const Loading = () => (
  <div className="flex flex-col justify-center items-center w-screen h-screen bg-white">
    <div className="flex flex-col items-center space-y-4">
      {/* SVG Spinner */}
      <svg
        className="w-16 h-16 text-primary animate-spin"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>

      {/* Title */}
      <h1 className="text-3xl font-bold text-primary animate-pulse tracking-wide">
        Flowiix
      </h1>

      {/* Subtext */}
      <p className="text-lg text-gray-500 animate-pulse">
        Loading, please wait...
      </p>
    </div>
  </div>
);

export default Loading;
