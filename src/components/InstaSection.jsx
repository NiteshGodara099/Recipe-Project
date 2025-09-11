export default function InstaSection() {
  const posts = [
    {
      img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=60",
      caption: "The vegetables dishes need to have certain vitamin for those people",
      date: "September 19",
    },
    {
      img: "https://images.unsplash.com/photo-1541592106381-f3e06cc4b9c3?auto=format&fit=crop&w=600&q=60",
      caption: "Sweet food can bring someone into happiness as long as they don’t eat too much",
      date: "September 19",
    },
    {
      img: "https://images.unsplash.com/photo-1601050690597-df1c644a05f5?auto=format&fit=crop&w=600&q=60",
      caption: "What are you doing before start cooking? prepare the tools or ingredients?",
      date: "September 19",
    },
    {
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=60",
      caption: "Steak never be wrong, it’s suitable for you who want romantic dinner",
      date: "September 19",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Check out <span className="text-black">@foodieland</span> on Instagram
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
        {posts.map((post, i) => (
          <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
            <img src={post.img} alt="food" className="w-full h-56 object-cover" />
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-semibold text-sm">Foodieland.</span>
                <span className="text-xs text-gray-400">Tokyo, Japan</span>
              </div>
              <p className="text-sm text-gray-700">{post.caption}</p>
              <p className="text-xs text-gray-400 mt-2">{post.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-black text-white px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-gray-800 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 4a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"/>
          </svg>
          Visit Our Instagram
        </button>
      </div>
    </section>
  );
}

