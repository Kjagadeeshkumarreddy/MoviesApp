import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import PageChange from "./PageChange";

function Movies({ watchlist, addWatchList, deleteWatchList }) {
  const [movies, setmovies] = useState([]); //here we use list due to the res.data.result is array(20)

  const [pagecount, setpagecount] = useState(1);
  const prevHandeler = () => {
    if (pagecount > 1) {
      setpagecount(pagecount - 1);
      window.scrollTo({ top: 450, behavior: "smooth" });
    }
  };
  const nextHandeler = () => {
    setpagecount(pagecount + 1);
    window.scrollTo({ top: 450, behavior: "smooth" });
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=7d753ef015b8fb66e5879c1ec381b800&language=en-US&page=${pagecount}`
      )
      .then((res) => {
        setmovies(res.data.results);
      });
  }, [pagecount]);

  return (
    <div className="mt-5">
      <div className="text-center text-2xl">
        <span className="border-3 border-solid border-black 500 pl-4 pr-4 pt-1 pb-1 text-bold rounded-2xl font-bold">
          Trending Movies
        </span>
      </div>
      <div className="flex flex-row flex-wrap justify-around">
        {movies.map((movieobj) => {
          return (
            <MovieCard
              key={movieobj.id}
              movieobj={movieobj}
              poster_path={movieobj.poster_path}
              name={movieobj.original_name}
              addWatchList={addWatchList}
              deleteWatchList={deleteWatchList}
              watchlist={watchlist}
            />
          );
        })}
      </div>
      {/* <div className='flex flex-row justify-between m-[1rem]'>
        <button className='border-2 border-solid p-[0.5rem] rounded-2xl text-3xl'
        onClick={()=>{
          if(pagecount>1){
            setpagecount(pagecount-1)
          }
        }}
        >prev</button>
        <button
        className='border-2 border-solid p-[0.5rem] rounded-2xl text-3xl' onClick={()=>{
          setpagecount(pagecount+1)
          console.log(pagecount);
        }}>next</button>
      </div> */}
      <PageChange
        prevHandeler={prevHandeler}
        nextHandeler={nextHandeler}
        pagecount={pagecount}
      />
    </div>
  );
}

export default Movies;
