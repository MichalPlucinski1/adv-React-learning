// components/FilterBar.jsx
import { useState, useEffect } from 'react';

function FilterBar({ spendings, onFilter }) {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  useEffect(() => {
    let result = [...spendings];

    if (query) { 
      result = result.filter((s) =>
        s.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (type !== 'all') {
      result = result.filter((s) => s.type === type);
    }

    if (sortBy === 'price') {
      result.sort((a, b) => b.price - a.price);
    } else {
      result.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
    }

    onFilter(result);
  }, [query, type, sortBy, spendings, onFilter]);

  return (
    <div className="flex flex-wrap gap-4 items-center mb-4">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 rounded border"
      />
      <select value={type} onChange={(e) => setType(e.target.value)} className="p-2 rounded border">
        <option value="all">All Types</option>
        <option value="car">Car</option>
        <option value="clothes">Clothes</option>
        <option value="food">Food</option>
        <option value="activities">Activities</option>
        <option value="transport">Transport</option>
        <option value="other">Other</option>
      </select>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="p-2 rounded border">
        <option value="date">Sort by Date</option>
        <option value="price">Sort by Price</option>
      </select>
    </div>
  );
}

export default FilterBar;
