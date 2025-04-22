// components/SpendingList.jsx
import SpendingItem from './SpendingItem';

function SpendingList({ spendings, onEdit, onDelete }) {
  if (spendings.length === 0) {
    return <p className="text-gray-500 mt-4">No spendings to show.</p>;
  }

  return (
    <div className="space-y-3 mt-4">
      {spendings.map((spending) => (
        <SpendingItem
          key={spending.id}
          spending={spending}
          onEdit={() => onEdit(spending)}
          onDelete={() => onDelete(spending.id)}
        />
      ))}
    </div>
  );
}

export default SpendingList;
