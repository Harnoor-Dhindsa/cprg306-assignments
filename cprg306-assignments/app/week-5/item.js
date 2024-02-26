import React from "react";

const Item = ({name, quantity, category}) => {
    return (
        <li className="p-2 m-4 bg-slate-900 max-w-sm">
            <h2 className="text-xl font-bold">{name}</h2>
            <span className="text-sm">Buy {quantity} in {category}</span>
        </li>
    )
};

export default Item;