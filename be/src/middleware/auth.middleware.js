import argon2 from "argon2";
import jwt, { decode } from "jsonwebtoken";


export const verify_token = (req, res, next) => {
    try {
        const auth_header = req.headers.authorization;
        if(!auth_header || !auth_header.startsWith("Bearer ")) {
            return res.status(401).json({message: "Token tidak ditemukan"});
        }

        const token = auth_header.split(" ")[1];
        const decoded = jwt.decode(token, process.env.JWT_SECRET)

        req.user = decoded;

        next();
    }catch (e) {
        return res.status(403).json({
            message: "Token tidak valid atau sudah kadaluarsa"
        });
    }
}