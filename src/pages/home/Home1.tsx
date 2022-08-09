import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getListUserAction } from "store/manageUser";

const Home = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    /* (async () => {
      const res = await movieServices.getFilm();
      
    })();
 */
    dispatch(getListUserAction());
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
