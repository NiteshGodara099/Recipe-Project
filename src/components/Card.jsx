import React from 'react'

  const recipes = [
   {
      id: 1,
      title: "Big and Juicy Wagyu Beef",
      category: "Smack",
      time: "30 Minutes",
      difficulty: "Medium",
      calories: 420,
      servings: 2,
      ingredients: 12,
      tags: ["Beef", "High Protein", "Keto"],
      image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Fresh Lime Roasted Salmon with Ginger Sauce",
      category: "Fish",
      time: "30 Minutes",
      difficulty: "Easy",
      calories: 320,
      servings: 3,
      ingredients: 9,
      tags: ["Seafood", "Healthy", "Low Carb"],
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
      category: "Breakfast",
      time: "30 Minutes",
      difficulty: "Easy",
      calories: 280,
      servings: 4,
      ingredients: 8,
      tags: ["Sweet", "Vegetarian", "Family Friendly"],
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Cheeseburger",
      category: "Lunch",
      time: "30 Minutes",
      difficulty: "Easy",
      calories: 520,
      servings: 2,
      ingredients: 10,
      tags: ["Comfort Food", "American", "Quick"],
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Creamy Mushroom Pasta",
      category: "Dinner",
      time: "25 Minutes",
      difficulty: "Medium",
      calories: 380,
      servings: 3,
      ingredients: 7,
      tags: ["Vegetarian", "Comfort Food", "Italian"],
      image: "https://images.pexels.com/photos/1058714/pexels-photo-1058714.jpeg"
    },
    {
      id: 6,
      title: "Chocolate Lava Cake",
      category: "Dessert",
      time: "35 Minutes",
      difficulty: "Hard",
      calories: 450,
      servings: 2,
      ingredients: 9,
      tags: ["Sweet", "Chocolate", "Special Occasion"],
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 7,
      title: "Mediterranean Salad Bowl",
      category: "Lunch",
      time: "15 Minutes",
      difficulty: "Easy",
      calories: 290,
      servings: 1,
      ingredients: 11,
      tags: ["Healthy", "Vegan", "Fresh"],
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 8,
      title: "BBQ Chicken Pizza",
      category: "Dinner",
      time: "40 Minutes",
      difficulty: "Medium",
      calories: 610,
      servings: 3,
      ingredients: 14,
      tags: ["Comfort Food", "Family", "Cheesy"],
      image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 9,
      title: "Vegetable Stir Fry",
      category: "Dinner",
      time: "20 Minutes",
      difficulty: "Easy",
      calories: 240,
      servings: 2,
      ingredients: 10,
      tags: ["Vegetarian", "Quick", "Asian"],
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
  ];


  

  
const Card = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">   
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Simple and tasty recipes</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        </p>
      </div>
      
      {/* Recipe Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-[#e7fbff] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            {/* Recipe Image */}
            <div className="relative">
              <img 
                src={recipe.image} 
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              {/* Time Badge */}
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-sm">
                <span className="text-sm font-medium text-gray-700">{recipe.time}</span>
              </div>
            </div>
            
            {/* Recipe Content */}
            <div className="p-5">
              {/* Category */}
              <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {recipe.category}
              </span>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">{recipe.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Card
