import React from "react";
import genre from "../utility/genre";
function TableData({ movieobj, deleteWatchList }) {
  function genresearch(genre_ids) {
    for (let i of genre_ids) {
      if (i in genre) return genre[i];
    }
    return -1;
  }
  //console.log(genresearch([1,2,5,6]))
  //console.log(movieobj),
  return (
    <tr className="border-b-2">
      <td className="h-[10vh] flex items-center">
        <img
          src={`https://image.tmdb.org/t/p/original/${movieobj.poster_path}`}
          alt="loding"
          className="h-[80%] pl-[1rem]"
        />
      </td>
      <td>{movieobj.name}</td>
      <td>{movieobj.vote_average}</td>
      <td>{movieobj.popularity}</td>
      <td>
        {genresearch(movieobj.genre_ids) == -1
          ? "unknow"
          : genresearch(movieobj.genre_ids)}
      </td>
      <td className="text-red-800" onClick={() => deleteWatchList(movieobj)}>
        Delete
      </td>
    </tr>
  );
}

export default TableData;
