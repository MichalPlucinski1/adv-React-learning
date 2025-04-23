// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// 

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
import './App.css'
import { useState, useEffect } from 'react';
import SpendingForm from './components/SpendingForm';
import SpendingList from './components/SpendingList';
import FilterBar from './components/FilterBar';
import { loadSpendings, saveSpendings } from './utils/storage';


function App() {
  const [spendings, setSpendings] = useState([]);
  const [editing, setEditing] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  

  useEffect(() => {
    const data = loadSpendings();
    setSpendings(data);
    // setFiltered(data);
  }, []);

  useEffect(() => {
    saveSpendings(spendings);
    // setFiltered(spendings);
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

  
  const filteredSpendings = spendings.filter(spending => {
    const matchesType = filterType === 'all' || spending.type === filterType;
    const matchesSearch = spending.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="container">
      <h1>🧾 My Spendings</h1>

      <div className="top-section">
        <div className="form-wrapper">
          <SpendingForm onSave={handleSave} editing={editing} />
        </div>
        <div className="filter-wrapper">
          <div className="filter-bar">
            <FilterBar
              filterType={filterType}
              searchTerm={searchTerm}
              setFilterType={setFilterType}
              setSearchTerm={setSearchTerm}
            />
          </div>
        </div>
      </div>

      <div className="spending-list">
        <SpendingList
          spendings={filteredSpendings}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
  
}

export default App;
