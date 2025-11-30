import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      
      {/* NAVIGATION */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">MyBrand</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-500 transition">Home</a>
            <a href="#" className="hover:text-blue-500 transition">Features</a>
            <a href="#" className="hover:text-blue-500 transition">Pricing</a>
            <a href="#" className="hover:text-blue-500 transition">Contact</a>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="bg-white">
        <div className="container mx-auto px-6 py-20 text-center md:text-left md:flex md:items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Build your next idea <span className="text-blue-600">faster.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              This is a test page to verify your Tailwind CSS setup. If you see blue buttons, 
              a grid layout below, and hover effects, everything is working perfectly!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 shadow-lg transition">
                Start Now
              </button>
              <button className="bg-white text-gray-700 border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            {/* Placeholder Image using Tailwind colors */}
            <div className="w-full max-w-md h-64 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-2xl shadow-2xl flex items-center justify-center text-white text-2xl font-bold transform hover:rotate-2 transition duration-500">
              Hero Image Area
            </div>
          </div>
        </div>
      </header>

      {/* FEATURES GRID */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why use Tailwind?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-blue-500">
              <h3 className="text-xl font-bold mb-4">Utility-First</h3>
              <p className="text-gray-600">
                Style elements directly in your HTML. No more thinking of class names like "wrapper-inner-container".
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-purple-500">
              <h3 className="text-xl font-bold mb-4">Responsive</h3>
              <p className="text-gray-600">
                Prefix any utility with <code>md:</code> or <code>lg:</code> to apply it conditionally at specific breakpoints.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-pink-500">
              <h3 className="text-xl font-bold mb-4">Customizable</h3>
              <p className="text-gray-600">
                Configure your own design system (colors, fonts, spacing) easily in the <code>tailwind.config.js</code> file.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Tailwind Test App. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default Home;