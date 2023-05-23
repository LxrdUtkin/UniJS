import React, { useState } from 'react';

function Product({ name, price, quantity, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newQuantity, setNewQuantity] = useState(quantity);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setNewQuantity(quantity);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    onDelete(newQuantity);
  };

  const handleQuantityChange = (event) => {
    setNewQuantity(event.target.value);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        {isEditing ? (
          <div>
            <input type="number" value={newQuantity} onChange={handleQuantityChange} />
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </div>
        ) : (
          <div>
            {quantity}
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={() => onDelete(quantity)}>Delete</button>
          </div>
        )}
      </td>
      <td>{price * quantity}</td>
    </tr>
  );
}

function ProductList({ products }) {
  const [items, setItems] = useState(products);

  const handleDeleteClick = (quantity) => {
    setItems((prevItems) => prevItems.filter((item) => item.quantity !== quantity));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Ім'я</th>
          <th>Ціна</th>
          <th>Кількість</th>
          <th>Вартість</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <Product key={item.name} {...item} onDelete={handleDeleteClick} />
        ))}
      </tbody>
    </table>
  );
}

export default function App() {
  const products = [
    { name: 'Apple', price: 1, quantity: 10 },
    { name: 'Banana', price: 2, quantity: 5 },
    { name: 'Orange', price: 3, quantity: 3 },
  ];

  return <ProductList products={products} />;
}
