import types from "store/types/recipes";
import Axios from "lib/axios";
import { set_error, set_loading } from "./index";
import { GET_ALL_MENU } from "lib/api";

export const set_random_recipes = (value) => {
  return {
    type: types.SET_RANDOM_RECIPE,
    payload: value,
  };
};

export const getAllMenu = () => async (dispatch) => {
  try {
    dispatch(set_loading(true));
    const { data, status } = await Axios.get(GET_ALL_MENU);
    if (status === 200) {
      dispatch(set_random_recipes(data.results));
    }
  } catch (error) {
    dispatch(set_error("Failed get data"));
    dispatch(set_loading(false));
  } finally {
    dispatch(set_loading(false));
  }
};
