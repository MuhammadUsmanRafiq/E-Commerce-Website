import React from 'react'; // Corrected 'fro' to 'from'

const ItFeat = () => {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: 'Secure payment',
      description: 'Have you ever finally just',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      ),
      title: 'Customer support',
      description: 'Have you ever finally just',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 17H5a2 2 0 01-2-2V8a2 2 0 012-2h10a2 2 0 012 2v3m-6 4l4-4m-4 4l-4-4m6 0H9"
          />
        </svg>
      ),
      title: 'Free delivery',
      description: 'Have you ever finally just',
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md font-sans">
      {/* Changed to flex-row to always display in a row, removed responsive prefixes */}
      <div className="flex flex-row justify-around items-center space-x-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-xs">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-3">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItFeat;
