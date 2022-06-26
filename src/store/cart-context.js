import React from "react";

const CartContext = React.createContext({
	items: [],
	totalAmount: 0,
	addItem: (item) => {
		CartContext.items.push(item);
		CartContext.totalAmount += item.price;
	},
	removeItem: (id) => {
		CartContext.items = CartContext.items.filter((item) => item.id !== id);
		CartContext.totalAmount = CartContext.items.reduce(
			(acc, item) => acc + item.price,
			0
		);
	},
});

export default CartContext;
