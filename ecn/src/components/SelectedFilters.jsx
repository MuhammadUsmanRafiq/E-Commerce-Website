// SelectedFilters.jsx
import React from 'react';

const SelectedFilters = ({ filters, onClearFilter, onClearAllFilters }) => {
  if (!filters || filters.length === 0) {
    return null; // Don't render if no filters are selected
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-wrap items-center gap-2 font-sans">
      {filters.map((filter, index) => (
        <span
          key={index}
          className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium"
        >
          {filter.value}
          <button
            type="button"
            className="flex-shrink-0 ml-2 h-4 w-4 rounded-full inline-flex items-center justify-center text-blue-400 hover:bg-blue-200 hover:text-blue-500 focus:outline-none focus:bg-blue-200 focus:text-blue-500"
            onClick={() => onClearFilter(filter.type, filter.value)}
          >
            <span className="sr-only">Remove filter</span>
            <svg
              className="h-2 w-2"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 8 8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
            </svg>
          </button>
        </span>
      ))}
      <button
        onClick={onClearAllFilters}
        className="ml-auto text-blue-600 hover:underline text-sm font-medium py-1 px-2 rounded-md"
      >
        Clear all filter
      </button>
    </div>
  );
};

export default SelectedFilters;