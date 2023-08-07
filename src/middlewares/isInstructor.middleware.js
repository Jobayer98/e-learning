const isInstructor = (req, res, next) => {
  if (req.user.role !== "instructor") {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};

module.exports = isInstructor;
