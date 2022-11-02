import axios from "axios";

const gamesAPI = axios.create({
  baseURL: "https://elliehl-board-games-project.herokuapp.com/api",
});

export const getAllReviews = (category) => {
  return gamesAPI.get("/reviews", { params: { category } }).then((res) => {
    return res.data.reviews;
  });
};

export const getReviewByID = (review_id) => {
  return gamesAPI
    .get(`/reviews/${review_id}`, { params: { review_id } })
    .then((res) => {
      return res.data.review;
    });
};
