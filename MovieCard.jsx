const MovieCard = ({ image, title }) => {
  return (
    <div className="group relative cursor-pointer transition-transform duration-300 hover:scale-105">
      <div className="aspect-[2/3] overflow-hidden rounded-lg border border-white/10 shadow-2xl">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
          <p className="text-sm font-bold truncate">{title}</p>
          <div className="flex gap-2 mt-2">
            <span className="text-[10px] bg-red-600 px-1 rounded">Action</span>
            <span className="text-[10px] text-yellow-400">★ 8.5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
