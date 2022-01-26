import axios from "axios";
import {
  setLoadingFalseAction,
  setLoadingTrueAction,
} from "../actions/loadingActions";
import { setNewsListAction } from "../actions/newsActions";

export const getNewsThunk = () => async (dispatch, getState) => {
  try {
    dispatch(setLoadingTrueAction());
    const response = await axios.get(
      "https://bing-news-search1.p.rapidapi.com/news",
      {
        params: { safeSearch: "Off", textFormat: "Raw" },
        headers: {
          "x-bingapis-sdk": "true",
          "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
          "x-rapidapi-key":
            "96c802eb61msh09ca156d31b31f4p1bdef2jsn1ffeb228986a",
        },
      }
    );
    // console.log(response);
    dispatch(setNewsListAction(response.data.value));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoadingFalseAction());
  }
};
