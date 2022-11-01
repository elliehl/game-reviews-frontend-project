import axios from "axios";

const gamesAPI = axios.create({
  baseURL: "https://elliehl-board-games-project.herokuapp.com/api",
});

export const getAllReviews = (category) => {
  return gamesAPI.get("/reviews", { params: { category } }).then((res) => {
    return res.data.reviews;
  });
};
