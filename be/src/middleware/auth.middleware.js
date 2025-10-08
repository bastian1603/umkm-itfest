import argon2 from "argon2";
import jwt, { decode } from "jsonwebtoken";


const get_token = (auth_header) => {
    try {
        if(!auth_header || !auth_header.startsWith("Bearer ")) {
            return res.status(401).json({message: "Anda belum login. Silahkan login terlebih dahulu!"})
        }

        const token = auth_header.split(" ")[1];
        const decoded = jwt.decode(token, process.env.JWT_SECRET);

        return decoded;
    }catch (e) {
        return res.status(500).json({
            message: "Token kadaluarsa. Silahkan Login kembali."
        });
    }
}


export const is_producer = (req, res, next) => {
    try {
        const auth_header = req.headers.authorization;
        const user = get_token(auth_header);
        
        if (!user.is_producer) return res.status(403).json({
            message: "Kamu tidak berhak mengakses page ini"
        });

        req.user = user;

        next();
    }catch (e) {
        return res.status(403).json({
            message: "Token tidak valid atau sudah kadaluarsa"
        });
    }
}

export const is_distributor = (req, res, next) => {
    try {
        const auth_header = req.headers.authorization;
        const user = get_token(auth_header);
        
        if (user.is_producer) return res.status(403).json({
            message: "Kamu tidak berhak mengakses page ini"
        });

        req.user = user;

        next();
    }catch (e) {
        return res.status(403).json({
            message: "Token tidak valid atau sudah kadaluarsa"
        });
    }
}