const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};

module.exports = isAdmin;
