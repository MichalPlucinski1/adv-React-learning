// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   return (
//     <div>
//       <h1>Hello, React!</h1>
//       <p>This is my first component.</p>
//     </div>
//   );
// }

// export default App;


// App.jsx
import { useState, useEffect } from 'react';
import SpendingForm from './components/SpendingForm';
import SpendingList from './components/SpendingList';
import FilterBar from './components/FilterBar';
import { loadSpendings, saveSpendings } from './utils/storage';

function App() {
  const [spendings, setSpendings] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    const data = loadSpendings();
    setSpendings(data);
    setFiltered(data);
  }, []);

  useEffect(() => {
    saveSpendings(spendings);
    setFiltered(spendings);
  }, [spendings]);

  const handleSave = (spending) => {
    if (editing) {
      setSpendings(prev => prev.map(s => s.id === spending.id ? spending : s));
      setEditing(null);
    } else {
      setSpendings(prev => [...prev, spending]);
    }
  };

  const handleDelete = (id) => {
    setSpendings(prev => prev.filter(s => s.id !== id));
  };

  const handleEdit = (spending) => {
    setEditing(spending);
  };

  const handleFilter = (results) => {
    setFiltered(results);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Spendings</h1>
      <SpendingForm onSave={handleSave} editing={editing} />
      <FilterBar spendings={spendings} onFilter={handleFilter} />
      <SpendingList spendings={filtered} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
