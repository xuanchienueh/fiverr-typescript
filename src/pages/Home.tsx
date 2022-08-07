import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllUserAction } from "store/movie";

const Home = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    /* (async () => {
      const res = await movieServices.getFilm();
      
    })();
 */
    dispatch(getAllUserAction());
  }, []);

  //--
  return (
    <div>
      <p>
        {(() => {
          return <span>234</span>;
        })()}
      </p>
    </div>
  );
};

export default Home;
