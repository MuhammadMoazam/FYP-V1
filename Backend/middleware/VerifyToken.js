const jwt = require("jsonwebtoken");
require("dotenv").config(); // Load environment variables

const verifyToken = (req, res, next) => {
  try {
    // Extract token from Authorization header
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ message: "Token missing. Please log in again." });
    }

    // Verify the JWT
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (decoded) {
      req.token = token;
      req.user = decoded; // Attach decoded payload to request
      next();
    } else {
      return res
        .status(401)
        .json({ message: "Invalid Token. Please log in again." });
    }
  } catch (error) {
    console.error("VerifyToken middleware error:", error);

    if (error instanceof jwt.TokenExpiredError) {
      return res
        .status(401)
        .json({ message: "Token expired. Please log in again." });
    } else if (error instanceof jwt.JsonWebTokenError) {
      return res
        .status(401)
        .json({ message: "Invalid Token. Please log in again." });
    } else {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

module.exports = verifyToken;
