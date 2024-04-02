"use client";

import { useState } from "react";

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = Math.floor(Math.random() * 1000);

    const Item = {
      id,
      name,
      quantity,
      category,
    };

    onAddItem(Item);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <form
      class="p-2 m-4 bg-slate-900 text-black max-w-sm w-full"
      onSubmit={handleSubmit}
    >
      <h2 className="text-white text-xl font-bold">Add new Item</h2>
      <div class="mb-2">
        <input
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
          placeholder="Item Name"
          required
          className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
        />
      </div>
      <div class="flex justify-between">
        <input
          type="number"
          value={quantity}
          min={1}
          max={99}
          required
          onChange={({ target }) => setQuantity(parseInt(target.value))}
          className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
        />
        <select
          value={category}
          onChange={({ target }) => setCategory(target.value)}
          class="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
        >
          <option value="produce" selected>
            Produce
          </option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button
        type="submit"
        class="w-full mt-4 py-2 px-4
        bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        +
      </button>
    </form>
  );
};

export default NewItem;
