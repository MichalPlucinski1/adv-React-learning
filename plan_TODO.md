Features
Add a spending entry

Edit a spending entry

Delete a spending entry

Search and Filter the list

Sort the list by date or price

Store data in localStorage as JSON

Show image previews when a photo is uploaded



Component Planning
App.jsx
Holds main state (spendings)

Passes props to child components

SpendingForm.jsx
Inputs for name, datetime, price, photo, type

Edit mode support (fill in existing data)

onSave(spending) prop

SpendingList.jsx
Maps over spendings and renders SpendingItem

SpendingItem.jsx
Displays a single spending

Buttons: Edit / Delete

FilterBar.jsx
Search input

Filter dropdown (type)

Sort options








{
  "id": "uuid",
  "name": "Gas refill",
  "datetime": "2025-04-21T15:23",
  "price": 45.99,
  "photo": "data:image/jpeg;base64,...",
  "type": "car"
}

src/
├── App.jsx
├── components/
│   ├── SpendingForm.jsx     ← Add/Edit Form
│   ├── SpendingList.jsx     ← List display
│   ├── SpendingItem.jsx     ← Single spending card
│   └── FilterBar.jsx        ← Search, Filter, Sort
├── utils/
│   └── storage.js           ← Get/Set from localStorage