module.exports.calculateAverageRating = async (course) => {
  const totalRatings = course.reviews?.reduce(
    (total, review) => total + review.rating,
    0
  );
  course.rating = totalRatings / course.reviews.length;
  await course.save();
};
