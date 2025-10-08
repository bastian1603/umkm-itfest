import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "rahasia_super_aman";

export const generate_token = (payload, expiresIn = "1h") => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

export const verify_token = (token) => {
    return jwt.verify(token, JWT_SECRET);
}