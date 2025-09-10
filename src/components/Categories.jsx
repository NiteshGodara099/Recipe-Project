import React from "react";

const categories = [
  {
    name: "Breakfast",
    image:
      "https://img.icons8.com/?size=100&id=6gNboUEfYP8r&format=png&color=000000",
    bg: "bg-green-50",
  },
  {
    name: "Vegan",
    image: "https://img.icons8.com/emoji/96/leafy-green.png",
    bg: "bg-lime-50",
  },
  {
    name: "Meat",
    image:
      "https://img.icons8.com/?size=100&id=hwB2vUsbIvJ2&format=png&color=000000",
    bg: "bg-red-50",
  },
  {
    name: "Dessert",
    image: "https://img.icons8.com/emoji/96/shortcake.png",
    bg: "bg-yellow-50",
  },
  {
    name: "Lunch",
    image:
      "https://img.icons8.com/?size=100&id=HwIEsEmuCUlw&format=png&color=000000",
    bg: "bg-orange-50",
  },
  {
    name: "Chocolate",
    image:
      "https://img.icons8.com/?size=100&id=vGmusj6T9C1A&format=png&color=000000",
    bg: "bg-pink-50",
  },
];

const Categories = () => {
  return (
    <div className="md:w-2/3 max-w-4xl mx-auto m-4 flex flex-col gap-5">
      <div className=" flex  justify-between ">
        <h1 className="font-bold text-3xl">Categories</h1>
        <button className="bg-[#e7fbff] rounded-lg p-2 text-sm">
          View All Categories
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`${cat.bg} rounded-2xl flex flex-col items-center justify-center p-6 cursor-pointer transition hover:shadow-md`}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-16 h-16 object-contain mb-4 drop-shadow-xl/50"
            />
            <p className="font-medium text-gray-700">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
