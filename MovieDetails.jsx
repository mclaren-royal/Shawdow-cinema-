import React from 'react';
import Navbar from '../components/Navbar';

const MovieDetails = () => {
  // Mock data for the episode list
  const episodes = [
    { id: 1, title: "ROMANCE DAWN", duration: "56m", thumb: "https://bit.ly/3UzY8f5" },
    { id: 2, title: "MAN IN A STRAW HAT", duration: "55m", thumb: "https://bit.ly/3UzY8f5" },
    { id: 3, title: "TELL NO TALES", duration: "58m", thumb: "https://bit.ly/3UzY8f5" },
  ];

  return (
    <div className="min-h-screen bg-[#0B0C10]">
      <Navbar />
      
      {/* 1. VIDEO / TRAILER SECTION */}
      <div className="relative h-[60vh] w-full pt-20">
        <iframe 
          className="w-full h-full object-cover opacity-80"
          src="https://www.youtube.com/embed/AqzC-KAdasM?autoplay=1&mute=1&controls=0&loop=1" 
          title="Trailer"
          allow="autoplay; encrypted-media"
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent"></div>
      </div>

      {/* 2. MOVIE INFO & EPISODES */}
      <main className="px-8 md:px-16 -mt-32 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Side: Metadata */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
               <span className="bg-[#C3073F] text-[10px] font-black px-2 py-1 rounded">TOP 10</span>
               <h1 className="text-5xl font-bold uppercase tracking-tight">One Piece</h1>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
              <span className="text-green-400 font-bold">98% Match</span>
              <span>2023</span>
              <span className="border border-gray-600 px-2 rounded">16+</span>
              <span>8 Episodes</span>
            </div>

            <p className="text-gray-300 max-w-xl text-lg leading-relaxed mb-8">
              Based on Japan's highest-selling manga series in history by Eiichiro Oda, 
              this live-action adventure follows Monkey D. Luffy and his crew.
            </p>

            <div className="flex gap-4">
              <button className="bg-white text-black px-10 py-3 rounded-full font-bold hover:bg-gray-200 transition">
                Play Episode 1
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-3 rounded-full font-bold hover:bg-white/20 transition">
                + Watchlist
              </button>
            </div>
          </div>

          {/* Right Side: for our Episode Selector */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-xl font-bold mb-4 flex justify-between items-center">
              Episodes <span className="text-sm text-gray-500 font-normal">Season 1</span>
            </h3>
            <div className="space-y-4">
              {episodes.map((ep) => (
                <div key={ep.id} className="flex gap-4 p-3 rounded-xl hover:bg-white/5 cursor-pointer group transition">
                  <div className="relative w-32 aspect-video rounded-md overflow-hidden bg-gray-800">
                    <img src={ep.thumb} alt={ep.title} className="w-full h-full object-cover group-hover:scale-110 transition" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                      <span className="text-xs">▶</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase">{ep.id}. {ep.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{ep.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default MovieDetails;
