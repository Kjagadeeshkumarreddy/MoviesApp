import React, { useEffect, useState } from "react";
import TableData from "./TableData";
import genreid from "../utility/genre";
function WatchList({ watchlist, deleteWatchList, setWatchList }) {
  const [search, setSearch] = useState("");
  const [genrelist, setGenreList] = useState(["All Genres"]);
  //this state is used to maintain current gueners

  const [curr_genre, setCurrGenre] = useState("All Genres");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };
  let handlefilter = (gener) => {
    setCurrGenre(gener);
  };
  let sortIncresing = () => {
    let incresingwatchlist = [...watchlist].sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList(incresingwatchlist);
  };

  let sortDecresing = () => {
    let decresingwatchlist = [...watchlist].sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList(decresingwatchlist);
  };
  //use use state to get all the gener list
  function genresearch(genre_ids) {
    for (let i of genre_ids) {
      if (i in genreid) return genreid[i];
    }
    return "Unknown";
  }

  useEffect(() => {
    let temp = watchlist.map((movieobj) => {
      return genresearch(movieobj.genre_ids);
    });
    let uniqueGenres = Array.from(new Set(["All Genres", ...temp]));
    setGenreList(uniqueGenres);
  }, [watchlist]);
  return (
    <>
      <div className="flex justify-center flex-wrap">
        {genrelist.map((gener) => {
          return (
            <div
              onClick={() => {
                handlefilter(gener);
              }}
              className={
                curr_genre == gener
                  ? "bg-blue-200 rounded-2xl text-2xl p-[10px] m-[1rem] hover:scale-110"
                  : "bg-gray-200 rounded-2xl text-2xl p-[10px] m-[1rem] hover:scale-110"
              }
            >
              {gener}
            </div>
          );
        })}
      </div>

      <div className="m-[2rem] flex justify-center">
        <input
          type="text"
          onChange={handleSearch}
          value={search}
          placeholder="search for movies"
          className="p-[0.5rem] text-2xl border-3 border-sold rounded-2xl w-[50%] text-center hover:border-2 hover:border-orange-600
        bg-gray-200 overflow-hidden"
        />
      </div>
      <div className="border-2 border-gray-300 m-8">
        <table className="w-full text-center">
          <thead>
            <tr>
              <th>Movie</th>
              <th>Name</th>
              <th>
                <div className="flex justify-center">
                  <div className="p-2" onClick={sortIncresing}>
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                  <div className="p-2">Ratings</div>
                  <div className="p-2" onClick={sortDecresing}>
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieobj) => {
                const genreName = genresearch(movieobj.genre_ids);
                return curr_genre === "All Genres" || curr_genre === genreName;
              })
              .filter((movies) => {
                //now i am comparing the input value with the movies in the watchlist
                return movies.name.toLowerCase().includes(search.toLowerCase());
              })
              .map((movies) => {
                return (
                  <TableData
                    key={movies.id}
                    movieobj={movies}
                    deleteWatchList={deleteWatchList}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
