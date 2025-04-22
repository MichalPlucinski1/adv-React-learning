// components/SpendingItem.jsx

function SpendingItem({ spending, onEdit, onDelete }) {
    const { name, datetime, price, photo, type } = spending;
  
    return (
      <div className="flex items-start bg-white p-4 shadow rounded justify-between">
        <div className="flex gap-4">
          {photo && (
            <img
              src={photo}
              alt="spending"
              className="w-20 h-20 object-cover rounded"
            />
          )}
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-600">{new Date(datetime).toLocaleString()}</p>
            <p className="text-sm">💰 {price.toFixed(2)} USD</p>
            <p className="text-sm">📌 {type}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={onEdit} className="text-blue-600 hover:underline">Edit</button>
          <button onClick={onDelete} className="text-red-600 hover:underline">Delete</button>
        </div>
      </div>
    );
  }
  
  export default SpendingItem;
  