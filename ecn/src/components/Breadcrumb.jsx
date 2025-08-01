import React from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for navigation

const Breadcrumb = () => {
  // Define your breadcrumb items.
  // Each item has a 'name' to display and a 'path' for navigation.
  // The last item typically doesn't have a path as it's the current page.
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Clothings', path: '/clothings' },
    { name: 'Men\'s wear', path: '/mens-wear' },
    { name: 'Summer clothing', path: null }, // Last item, no path
  ];

  return (
    <nav className="container mx-auto px-4 py-4 text-gray-500 text-sm font-sans">
      <ol className="flex items-center space-x-2">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.path ? (
              // If there's a path, render a Link component
              <Link to={item.path} className="hover:text-blue-600 transition-colors">
                {item.name}
              </Link>
            ) : (
              // If no path (current item), render plain text
              <span className="text-gray-700 font-medium">{item.name}</span>
            )}
            {/* Add a separator if it's not the last item */}
            {index < breadcrumbItems.length - 1 && (
              <span className="mx-2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
