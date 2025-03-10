import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) return;

    const fetchResults = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
        if (!response.ok) throw new Error('Failed to fetch results');
        const data = await response.json();
        setResults(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [searchQuery]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for: {searchQuery}</h1>
      {loading && <p>Loading results...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && !error && results.length === 0 && <p>No results found.</p>}
      <ul>
        {results.map((result, index) => (
          <li key={index} className="border p-2 mb-2 rounded">
            {result.name} {/* Adjust based on API response */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
