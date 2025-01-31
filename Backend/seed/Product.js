const Product = require('../models/Product');
const mongoose = require('mongoose');

const seedProducts = [
    {
        name: "Classic Blue Slim Fit Jeans",
        originalPrice: "5500",
        discountedPrice: "4200",
        discount: "24%",
        imgSrc: "https://images.unsplash.com/photo-1542272604-787c3835535d",
        stock: 15,
        category: "Jeans",
        description: "Premium quality slim fit jeans in classic blue. Perfect for everyday wear with excellent comfort and style."
    },
    {
        name: "White Cotton T-Shirt",
        originalPrice: "2500",
        discountedPrice: "1800",
        discount: "28%",
        imgSrc: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
        stock: 25,
        category: "T-Shirts",
        description: "Essential white cotton t-shirt with a classic fit. Made from 100% premium cotton."
    },
    {
        name: "Black Leather Jacket",
        originalPrice: "12000",
        discountedPrice: "9600",
        discount: "20%",
        imgSrc: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
        stock: 8,
        category: "Jackets",
        description: "Stylish black leather jacket with silver hardware. Perfect for a cool, edgy look."
    },
    {
        name: "Casual Khaki Chinos",
        originalPrice: "4500",
        discountedPrice: "3600",
        discount: "20%",
        imgSrc: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a",
        stock: 20,
        category: "Pants",
        description: "Comfortable khaki chinos perfect for both casual and semi-formal occasions."
    },
    {
        name: "Navy Blue Blazer",
        originalPrice: "15000",
        discountedPrice: "12000",
        discount: "20%",
        imgSrc: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
        stock: 10,
        category: "Formal",
        description: "Classic navy blue blazer with a modern fit. Essential for your formal wardrobe."
    },
    {
        name: "Striped Polo Shirt",
        originalPrice: "3500",
        discountedPrice: "2800",
        discount: "20%",
        imgSrc: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
        stock: 18,
        category: "T-Shirts",
        description: "Classic striped polo shirt in cotton pique. Perfect for a smart casual look."
    },
    {
        name: "Denim Jacket",
        originalPrice: "8000",
        discountedPrice: "6400",
        discount: "20%",
        imgSrc: "https://images.unsplash.com/photo-1559551409-dadc959f76b8",
        stock: 12,
        category: "Jackets",
        description: "Classic denim jacket in medium wash. A timeless piece for your wardrobe."
    },
    {
        name: "Gray Wool Sweater",
        originalPrice: "6500",
        discountedPrice: "5200",
        discount: "20%",
        imgSrc: "https://images.unsplash.com/photo-1577963753472-cb6cc1cc5c09",
        stock: 15,
        category: "Sweaters",
        description: "Warm and comfortable wool sweater perfect for winter."
    },
    {
        name: "Black Dress Pants",
        originalPrice: "7000",
        discountedPrice: "5600",
        discount: "20%",
        imgSrc: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
        stock: 16,
        category: "Formal",
        description: "Classic black dress pants with a modern fit. Essential for formal occasions."
    },
    {
        name: "Printed Summer Shirt",
        originalPrice: "4000",
        discountedPrice: "3000",
        discount: "25%",
        imgSrc: "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6",
        stock: 20,
        category: "Shirts",
        description: "Vibrant printed shirt perfect for summer casual wear."
    },
    {
        name: "Athletic Track Pants",
        originalPrice: "4500",
        discountedPrice: "3600",
        discount: "20%",
        imgSrc: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
        stock: 25,
        category: "Sportswear",
        description: "Comfortable track pants perfect for workouts and casual wear."
    },
    {
        name: "White Oxford Shirt",
        originalPrice: "5500",
        discountedPrice: "4400",
        discount: "20%",
        imgSrc: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
        stock: 15,
        category: "Formal",
        description: "Classic white Oxford shirt. A must-have for any formal wardrobe."
    },
    {
        name: "Cargo Shorts",
        originalPrice: "3500",
        discountedPrice: "2800",
        discount: "20%",
        imgSrc: "https://images.unsplash.com/photo-1565839751462-ebd11d7f9a40",
        stock: 22,
        category: "Shorts",
        description: "Practical cargo shorts with multiple pockets. Perfect for casual summer days."
    },
    {
        name: "Hooded Sweatshirt",
        originalPrice: "5000",
        discountedPrice: "4000",
        discount: "20%",
        imgSrc: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
        stock: 18,
        category: "Casual",
        description: "Comfortable hooded sweatshirt perfect for casual wear and light workouts."
    },
    {
        name: "Slim Fit Dress Shirt",
        originalPrice: "6000",
        discountedPrice: "4800",
        discount: "20%",
        imgSrc: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
        stock: 14,
        category: "Formal",
        description: "Modern slim fit dress shirt in light blue. Perfect for business and formal events."
    }
];

const seedDB = async () => {
    try {
        // Clear existing products
        await Product.deleteMany({});
        
        // Insert new products
        const products = await Product.insertMany(seedProducts);
        console.log('Database seeded successfully!');
        console.log(`Seeded ${products.length} products`);
        
    } catch (error) {
        console.error('Error seeding database:', error);
    }
};

module.exports = seedDB;
