"use client";
import { useState } from "react";
import React from "react";
import Item from "./item";
import items from "./items.json";

const ItemList = () => {
  const [sortby, setSortby] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortby === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortby === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const renderSortButton = (label, value) => {
    return (
      <button
        key={value}
        onClick={() => setSortby(value)}
        style={{ backgroundColor: sortby === value ? "#f97316" : "" }}
        className="bg-orange-700 p-1 m-2 w-28"
      >
        {label}
      </button>
    );
  };

  return (
    <div>
      <div>
        <label for="sort" className="m-2">Sort by: </label>
        {renderSortButton("Name", "name")}
        {renderSortButton("Category", "category")}
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
