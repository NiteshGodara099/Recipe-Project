

export default function ChefHero() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        {/* Left Side */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-3xl font-bold text-gray-900 leading-tight mb-14">
            Everyone can be a <br /> chef in their own kitchen
          </h1>
          <p className="text-gray-600 mb-15 max-w-md mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad
            minim
          </p>
          <button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>

        {/* Right Side */}
        <div className="flex-1 relative">
          <div className="relative mx-auto max-w-md h-[400px] overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg"
              alt="Chef"
              className="w-full h-full object-cover object-top"
            />

            {/* Floating food icons
            <img
              src="https://img.icons8.com/?size=100&id=lPmL0NaypRwo&format=png&color=000000"
              alt="Tomato Icon"
              className="absolute bottom-12 left-4 w-12 h-12"
            />
            <img
              src="https://img.icons8.com/?size=100&id=hwB2vUsbIvJ2&format=png&color=000000"
              alt="Meat Icon"
              className="absolute top-4 left-10 w-16 h-16"
            />
            <img
              src="https://img.icons8.com/?size=100&id=oVuQLxTagzph&format=png&color=000000"
              alt="Onion Icon"
              className="absolute top-8 right-16 w-12 h-12"
            />
            <img
              src="https://img.icons8.com/?size=100&id=brWmrA4--NST&format=png&color=000000"
              alt="Strawberry Icon"
              className="absolute bottom-20 right-4 w-14 h-14"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
