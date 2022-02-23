import StarsView from "./starsView.js";
import AverageRatingView from "./averageRatingView.js";

const state = {
    ratings: [2, 4, 1, 5, 5, 3, 3, 4]
}

new AverageRatingView(state.ratings)

const ratingSubmitHandler = rating => {
    state.ratings.push(rating)
    new AverageRatingView(state.ratings)
}

StarsView.init()
StarsView.submitButtonHandler(ratingSubmitHandler)