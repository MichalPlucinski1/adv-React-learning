// components/SpendingForm.jsx
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const defaultSpending = {
  name: '',
  datetime: '',
  price: '',
  photo: '',
  type: 'other',
};

function SpendingForm({ onSave, editing }) {
  const [form, setForm] = useState(defaultSpending);

  useEffect(() => {
    if (editing) {
      setForm(editing);
    } else {
      setForm(defaultSpending);
    }
  }, [editing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm(prev => ({ ...prev, photo: reader.result }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSpending = {
      ...form,
      id: form.id || uuidv4(),
      price: parseFloat(form.price),
    };
    onSave(newSpending);
    setForm(defaultSpending);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded mb-4 space-y-3">
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="w-full p-2 rounded"
        required
      />
      <input
        type="datetime-local"
        name="datetime"
        value={form.datetime}
        onChange={handleChange}
        className="w-full p-2 rounded"
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        className="w-full p-2 rounded"
        required
      />
      <select name="type" value={form.type} onChange={handleChange} className="w-full p-2 rounded">
        <option value="car">Car</option>
        <option value="clothes">Clothes</option>
        <option value="food">Food</option>
        <option value="activities">Activities</option>
        <option value="transport">Transport</option>
        <option value="other">Other</option>
      </select>
      <input type="file" accept="image/*" onChange={handlePhoto} className="w-full" />
      {form.photo && <img src={form.photo} alt="preview" className="w-32 h-32 object-cover mt-2" />}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {editing ? 'Update' : 'Add'} Spending
      </button>
    </form>
  );
}

export default SpendingForm;
