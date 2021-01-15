import React from 'react-native';

class Functions {
    decimRound = (num) => {
        num = num.toFixed(2);
        var round = parseFloat(num);
        return round;
    }
    totalPrice = (cart) => {
        var total = 0;
        cart.forEach(item => {
            var itemPrice = item.price;
            total += itemPrice;
        });
        return total;
    }
    pushArray = (cart, foodItem) => {
        cart.push(foodItem);
        return cart;
    }
}

export default Functions;