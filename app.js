const prices = { tomatoes: 40, milk: 60, bread: 45, eggs: 72 }; 
 
function cartTotal(items) { 
  return items.reduce((sum, item) => sum + prices[item], 0); 
} 
 
document.getElementById("total").textContent = 
  cartTotal(["tomatoes", "milk", "bread", "eggs"]); 