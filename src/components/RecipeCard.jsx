import restaurant from '../assets/restaurant.svg'

const RecipeCard = ({title, description, image, author, date, rating}) => {
  return (
    <div className="max-w-4xl mx-auto rounded-3xl shadow-lg overflow-hidden m-4 flex flex-col justify-between">
      <div className="md:flex">
        <div className="md:w-2/3 px-5 py-7 bg-[#e7fbff]">
            <div className="mb-4">
                <span className="inline-block bg-white text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold shadow">
                    Hot Recipes
                </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {title}
            </h2>
            <p className="mt-2 text-gray-600 mb-6">
                {description}
            </p>

            <div className="flex space-x-4 mb-6">
                <div
                    className="flex items-center rounded-lg px-4 py-3"
                    style={{ backgroundColor: "#dbecf0" }}
                >
                    <svg
                        className="w-5 h-5 text-gray-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="text-gray-700">30 Minutes</span>
                </div>
                <div
                    className="flex items-center rounded-lg px-4 py-3"
                    style={{ backgroundColor: "#dbecf0" }}
                >
                    <img src={restaurant} alt="" />
                    <span className="text-gray-700">1 Chicken</span>
                </div>
            </div>


            <div className="flex items-center justify-between mt-22">
                <div className="flex items-center py-1">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        <span className="text-gray-700 font-bold">JS</span>
                    </div>
                    <div>
                        <p className="text-gray-900 font-medium">{author}</p>
                        <p className="text-gray-500 text-sm">{date}</p>
                    </div>
                </div>
                <button className="px-4 py-2 bg-black text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                    View Recipes
                </button>
            </div>
        </div>
        <div className="md:w-2/5">
          <div className="h-full w-full overflow-hidden relative">
            <img
              src={image}
              alt="Spicy delicious chicken wings"
              className="h-[400px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-between p-5">
              {/* Rating Badge */}
              <div className="flex justify-end">
                <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {rating}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default RecipeCard;
