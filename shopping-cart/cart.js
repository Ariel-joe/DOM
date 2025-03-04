class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}


class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  // Calculate total price for this item
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.items = []; // Stores ShoppingCartItem instances
  }

  // Add item to the cart
  addItem(product, quantity = 1) {
    // Check if the product already exists in cart
    const existingItem = this.items.find((item) => item.product.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity; // Increase quantity
    } else {
      this.items.push(new ShoppingCartItem(product, quantity)); // Add new item
    }
  }

  // Remove item from the cart by product ID
  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  // Get the total cost of all items in the cart
  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  // Display all cart items
  displayCart() {
    console.log("Shopping Cart:");
    this.items.forEach((item, index) => {
      console.log(`${index + 1}. ${item.product.name} - $${item.product.price} x ${item.quantity} = $${item.getTotalPrice()}`);
    });
    console.log(`Total Price: $${this.getTotalPrice()}`);
  }
}


// Create products
const product1 = new Product(1, "Laptop", 1200);
const product2 = new Product(2, "Phone", 800);
const product3 = new Product(3, "Headphones", 150);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1); // 1 Laptop
cart.addItem(product2, 2); // 2 Phones
cart.addItem(product3, 3); // 3 Headphones

// Display cart
cart.displayCart();

// Remove an item (Phone)
cart.removeItem(2);

// Display cart after removing an item
cart.displayCart();
