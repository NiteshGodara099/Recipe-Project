import { Swiper, SwiperSlide } from "swiper/react";
import RecipeCard from "./RecipeCard";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";



const recipes = [
  {
    id: 1,
    title: "Spicy Chicken Wings",
    description: "Crispy & hot chicken wings with spices.",
    image: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "John Smith",
    date: "15 March 2022",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Pasta Alfredo",
    description: "Creamy white sauce pasta with mushrooms.",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Anna Lee",
    date: "20 April 2022",
    rating: 4.6,
  },
  {
    id: 3,
    title: "Veggie Salad Bowl",
    description: "Healthy salad with fresh veggies & avocado.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "David Kim",
    date: "10 May 2022",
    rating: 4.9,
  },
];


export default function Swiperjs() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      centeredSlides={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000, // 3 seconds per slide
        disableOnInteraction: false, // keeps autoplay after manual swipe
      }}
      speed={3000}
      className="w-full max-w-4xl mx-auto"
    >
      {recipes.map((recipe) => (
        <SwiperSlide key={recipe.id}>
          <RecipeCard {...recipe} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
