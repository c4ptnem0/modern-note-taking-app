import jwt from "jsonwebtoken";

export const authenticationToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: true, message: "Token missing" });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: true, message: "Invalid token" });
    }

    req.user = user; // Attach user to request
    next();
  });
};
