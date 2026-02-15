const MovieCard = ({ image, title, category, rating }) => {
  return (
    <div className="group relative cursor-pointer">
      <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-[#1F2833] shadow-lg transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(195,7,63,0.4)] group-hover:-translate-y-2">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Subtle Overlay Badge */}
        <div className="absolute top-2 left-2">
          <span className="text-[9px] font-bold bg-black/60 backdrop-blur-md px-2 py-1 rounded uppercase tracking-widest border border-white/10">
            {category}
          </span>
        </div>

        {/* Hover Info Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
          <p className="text-sm font-bold">{title}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-yellow-500 font-bold">★ {rating}</span>
            <button className="text-[10px] bg-white text-black px-2 py-1 rounded-full font-bold">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};
