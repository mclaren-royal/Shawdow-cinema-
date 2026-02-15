import React from 'react';
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative h-[85vh] w-full flex items-center px-8 md:px-16">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.alphacoders.com/132/1322143.jpeg" 
            className="w-full h-full object-cover opacity-60" 
            alt="Hero Banner" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C10] via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-6xl font-bold mb-4 tracking-tighter">ONE PIECE</h1>
          <div className="flex items-center gap-4 text-sm mb-6">
            <span className="text-green-400 font-bold">98% Match</span>
            <span>2023</span>
            <span className="border px-2 py-0.5 rounded text-xs">16+</span>
            <span>Action, Adventure</span>
          </div>
          <p className="text-gray-300 text-lg mb-8 line-clamp-3">
            With a straw hat and an eccentric crew, young pirate Monkey D. Luffy 
            embarks on an epic voyage in the live-action adaptation of this popular manga.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#C3073F] hover:bg-[#a10532] px-8 py-3 rounded-full font-bold flex items-center gap-2 transition">
              ▶ Play Now
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-8 py-3 rounded-full font-bold transition">
              + My Watchlist
            </button>
          </div>
        </div>
      </section>

      {/* MOVIE ROWS */}
      <main className="px-8 md:px-16 -mt-20 relative z-20 pb-20">
        <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <MovieCard image="https://path-to-image1.jpg" title="Jujutsu Kaisen" />
          <MovieCard image="https://path-to-image2.jpg" title="John Wick 4" />
          {/* We Will add more cards here if need */}
        </div>
      </main>
    </div>
  );
};

export default Home;
