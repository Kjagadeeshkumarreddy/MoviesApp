import React, { useState } from "react";

function MovieCard({
  movieobj,
  poster_path,
  name,
  addWatchList,
  deleteWatchList,
  watchlist,
}) {
  function doesContains(movieobj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieobj.id) {
        return true;
      }
    }
    return false;
  }
  const [emoji, setemoji] = useState(!doesContains(movieobj) ? "😜" : "❌"); //no there in list then 😜 will add
  return (
    <div
      className="relative h-[40vh] w-[250px]  bg-cover bg-center m-[1rem] rounded-3xl overflow-hidden hover:cursor-pointer hover:scale-110 duration-200 
      flex items-end justify-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      <div
        className="flex-none absolute top-0 right-0 text-4xl bg-gray-900/70 p-[8px] rounded-2xl my-2 mx-2"
        onClick={() => {
          if (emoji == "😜") {
            addWatchList(movieobj);
            setemoji("❌");
          } else {
            deleteWatchList(movieobj);
            setemoji("😜");
          }
        }}
      >
        {emoji}
      </div>
      <div className="w-full text-white p-[1rem] bg-gray-900/60 text-center">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
