import { useSelector } from "react-redux";
import { RootState } from "store";

export const useMovie = () => useSelector((state: RootState) => state.movie);
