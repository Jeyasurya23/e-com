
# E-Commerce Product Catalog 🛍️

A versatile and dynamic product catalog designed to showcase a variety of products with their respective prices in Indian Rupees (INR).

## 📖 Overview

This project provides a JSON-based product catalog encompassing diverse categories, making it an essential asset for modern e-commerce platforms. The categories include:

- Electronics
- Vehicles
- Fashion & Accessories
- Groceries & Food
- Home & Living
- Sports & Fitness
- Beauty Products
- Accessories

## 📂 Product Structure

Each product in the catalog is structured as follows:

```json
{
    "id": "Unique identifier",
    "name": "Product name",
    "price": "Price in INR",
    "image": "URL to product thumbnail"
}
```

## 📋 Categories

### 1. **Electronics**
   - **Products**: Smartphones (iPhone, Samsung, Realme, Oppo, Vivo), Laptops (MacBook), Mobile Accessories
   - **Price Range**: ₹15,000 - ₹1,70,000

### 2. **Vehicles**
   - **Products**: Cars (Charger SXT, 300 Touring), Motorcycles
   - **Price Range**: ₹2,50,000 - ₹48,00,000

### 3. **Fashion & Accessories**
   - **Products**: Watches (Rolex, Longines, IWC), Jewelry, Clothing, Shoes
   - **Price Range**: ₹1,000 - ₹5,000

### 4. **Home & Living**
   - **Products**: Furniture, Home Decoration, Kitchen Accessories
   - **Price Range**: ₹200 - ₹90,000

### 5. **Groceries & Food**
   - **Products**: Fresh Produce, Packaged Foods, Beverages
   - **Price Range**: ₹50 - ₹1,000

### 6. **Sports & Fitness**
   - **Products**: Sports Equipment, Sports Accessories
   - **Price Range**: Varies by item

## 💡 Usage

This catalog can be integrated into:

- **E-commerce Platforms**: Product listing, filtering, and searching
- **Price Comparison Tools**: Easy visualization of price variations
- **Shopping Carts**: Dynamic integration for cart functionality
- **Custom Applications**: Versatile use for various web or mobile applications

### Example Usage in JavaScript

```javascript
// Fetch product data from the catalog
fetch('src/components/assets/Products.json')
  .then(response => response.json())
  .then(products => {
    console.log(products);
    // Implement functionality using the product data
  });
```

## 🌐 Image URLs

All product images are hosted via CDN for optimal performance. Use the following structure to access images:

```
https://cdn.dummyjson.com/products/images/[category]/[product-name]/thumbnail.png
```

## 🤝 Contributing

We welcome contributions to this project. You can contribute by:

1. Adding new products or categories
2. Updating existing prices
3. Fixing broken image links
4. Enhancing product descriptions

## 📂 File Structure

The project is organized as follows:

```
src/
├── components/
│   └── assets/
│       └── Products.json
```

## 🛠️ Data Maintenance

- Prices are periodically updated to reflect market trends.
- Images are maintained on a CDN for seamless integration and performance.

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for further details.

---

**Note:** This is a sample catalog, and periodic updates are essential to ensure accuracy and relevance.
