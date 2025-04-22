export const loadSpendings = () => {
    const data = localStorage.getItem('spendings');
    return data ? JSON.parse(data) : [];
  };
  
  export const saveSpendings = (spendings) => {
    localStorage.setItem('spendings', JSON.stringify(spendings));
  };
  